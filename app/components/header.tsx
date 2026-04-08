import { useState, useEffect } from "react";
import Cart from "./cart";

const Header = () => {
    const [data, setData] = useState([]); // store JSON array
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const str = "Hello World";
  }, []);

  useEffect(() => {
    // fetch from dummy API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);     // store data in state
        setLoading(false); // stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    //   console.log(data);
    console.log("data ---", data);
  }, []); // empty dependency array → runs once on mount

  if (loading) return <p>Loading...</p>;


  return (
    <header>
      <h1>Header</h1>
      <Cart />
    </header>
  );
};

export default Header;