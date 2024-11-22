import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import "./App.css";
import { fetchCategoryProductData } from "./utils/api.util";

function App() {
  const [categoryProductData, setCategoryProductData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const respApi = await fetchCategoryProductData()
      setCategoryProductData(respApi)

    }
    fetchApi()
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = selectedCategory ? categoryProductData?.[selectedCategory].filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  }) : []

  return (
    <div className="container">
      <Header />
      <div className="content-container">
        <Menu
          categories={Object.keys(categoryProductData || {})}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <main className="main-panel">
          <SearchBar onFilter={handleSearch} />
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}

export default App;
