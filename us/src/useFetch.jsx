import React from "react";
import { useState, useEffect } from "react";

// const url2 = "https://api.unsplash.com/photos/?client_id=";

export default function useFetch(props) {
  // let url = `https://api.unsplash.com/search/photos?query=${props}`;
  let url = `https://api.unsplash.com/photos?page=${props}`;
  const access = import.meta.env.VITE_ACCESS;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${access}`,
        },
      };
      const resp = await fetch(url, options);
      if (resp.ok) {
        const data = await resp.json();
        setData(data);
        setLoading(false);
      } else {
        throw new Error(resp.statusText);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(props);
  }, [props]);
  return { data, loading };
}
