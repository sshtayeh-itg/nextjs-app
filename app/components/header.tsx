import { useState, useEffect, useMemo } from "react";

const Header = () => {
    const [data, setData] = useState([]); // store JSON array
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const str = "Hello World";
  }, []);

    debugger;
    const fruits = ['apple', 'banana', 'grapes']

  if (loading) return <p>Loading...</p>;


  return (
    <header>
      <h1>Header</h1>

    </header>
  );
};

export default Header;
