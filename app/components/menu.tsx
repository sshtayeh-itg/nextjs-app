import { useState, useEffect } from "react";

const Menu = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ];

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Menu");
    debugger;
    const fetchMPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchMPosts();
  }, [posts]);



  return (
    <div>
      <h1>Menu</h1>

      <ul>
        {menuItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
