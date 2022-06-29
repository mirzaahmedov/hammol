import React from "react";

import Catalog from "@components/Catalog";
import SearchBar from "@components/SearchBar";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Catalog />
    </main>
  );
}
