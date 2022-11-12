import "./App.css";
import useFetch from "./useFetch";
import Photo from "./components/Photo";
import { useState, useEffect } from "react";

function App() {
  const { data, loading } = useFetch();
  useEffect(() => {
    if (loading) return;
    // console.log(data, loading);
  }, [loading]);

  const list = data.map(entry => {
    return <Photo key={entry.id} {...entry} />;
  });

  return (
    <div className="App">
      <div className="grid">{list}</div>
      <div className="loader">{loading && "loading..."}</div>
    </div>
  );
}

export default App;
