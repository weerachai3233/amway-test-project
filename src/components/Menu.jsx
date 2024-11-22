import React, { useEffect } from "react";

const Menu = ({ categories, selectedCategory, onCategoryChange }) => {

  // set default category
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      onCategoryChange(categories[0])
    }
  }, [categories, selectedCategory])

  return (
    <aside className="menu">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onCategoryChange(item)}
              className={`${selectedCategory === item ? "active" : ""}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Menu;
