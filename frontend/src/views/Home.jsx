import React from "react";

import Catalog from "@components/Catalog";
import SearchBar from "@components/SearchBar";
import Pagination from "@components/Pagination";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Catalog />
      <Pagination />
    </main>
  );
}
