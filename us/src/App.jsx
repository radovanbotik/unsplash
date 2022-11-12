import "./App.css";
import useFetch from "./useFetch";
import Photo from "./components/Photo";
import { useState, useEffect } from "react";

function App() {
  const [userInput, setUserInput] = useState("cake");
  const [results, setResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = e => {
    setUserInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  const { data, loading } = useFetch(pageNumber);

  useEffect(() => {
    if (loading) return;
    console.log(data, loading);

    // setResults(data);
    setResults(prev => {
      return [...prev, ...data];
    });
  }, [loading, data]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      // console.log({ innerHeight: window.innerHeight });
      // console.log({ scrollY: window.scrollY });
      // console.log({ documentHeight: document.body.scrollHeight });
      if (
        !loading &&
        Math.ceil(window.scrollY + window.innerHeight) >=
          Math.ceil(document.body.scrollHeight - 20)
      ) {
        setPageNumber(prev => prev + 1);
      }
    });
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="browse images"
          value={userInput}
          onChange={handleChange}
        />
        <button>search</button>
      </form>
      {/* <div className="grid">{list}</div> */}
      <div className="grid">
        {results &&
          results.map(entry => {
            return <Photo key={entry.id} {...entry} />;
          })}
      </div>
      {loading && <div className="loader">loading...</div>}
    </div>
  );
}

export default App;
