import { useState, useEffect } from "react";

const Header = () => {
    const [data, setData] = useState([]); // store JSON array
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const str = "Hello World";
  }, []);


  if (loading) return <p>Loading...</p>;


  return (
    <header>
      <h1>Header</h1>

    </header>
  );
};

export default Header;