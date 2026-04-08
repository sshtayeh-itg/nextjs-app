"use client";

import { useEffect, useState } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
};

export default function Products() {
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

  if (loading) {
    return <p className="text-zinc-600 dark:text-zinc-400">Loading products…</p>;
  }
  if (error) {
    return (
      <p className="text-red-600 dark:text-red-400" role="alert">
        {error}
      </p>
    );
  }

  return (
    <section className="w-full" aria-label="Products">
      <h2 className="mb-4 text-xl font-semibold text-black dark:text-zinc-50">
        Products
      </h2>
      <ul className="flex flex-col gap-4">
        {products.map((p) => (
          <li
            key={p.id}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-medium text-black dark:text-zinc-50">
                {p.title}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                ${p.price.toFixed(2)}
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              {p.category}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
