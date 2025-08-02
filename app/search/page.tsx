"use client";

import { useState, useTransition } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const bigDataSet = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = bigDataSet.filter((item) => item.includes(value));
      setResults(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleSearch} placeholder="Search..." />
      {isPending && <p>Loading...</p>}
      {results.length === 0 && <p>No results found</p>}
      <ul>
        {results.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
