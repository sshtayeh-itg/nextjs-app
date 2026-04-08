"use client";

import { useEffect, useState } from "react";

import type { Product } from "./products";

const Category = () => {
    console.log("Category 1");
    console.log("Category 2");
    console.log("Category 3");
    console.log("Category 4");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json() as Promise<Product[]>;
      })
      .then((data) => {
        if (!cancelled) setProducts(data);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load products.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  debugger

  return (
    <div>
      <h1>Category</h1>
      <h2>sub category</h2>

      {loading && (
        <p className="text-zinc-600 dark:text-zinc-400">Loading products…</p>
      )}
      {error && (
        <p className="text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
      {!loading && !error && (
        <ul className="mt-4 flex flex-col gap-2">
          {products.map((p) => (
            <li key={p.id} className="text-sm text-zinc-700 dark:text-zinc-300">
              <span className="font-medium">{p.title}</span>
              <span className="text-zinc-500"> — {p.category}</span>
            </li>
          ))}
        </ul>
      )}

      <div>
      <ul>
      {products.map((product) => (
        <li onClick={() => console.log(product)}>{product.category}</li>
      ))}
    </ul>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
  );
};

export default Category;
