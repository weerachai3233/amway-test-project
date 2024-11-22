import React from "react";

const Menu = ({ categories, selectedCategory, onCategoryChange }) => {
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
