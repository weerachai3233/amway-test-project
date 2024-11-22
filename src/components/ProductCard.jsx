import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-list">
      <div className="product">
        <img
          src={product.image_url}
          alt={product.name}
          onError={(e) =>
            (e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8LWlb8l34MXvr3BonwEYsd11lw1QKQVEiQ&s")
          }
        />
        <div className="product-name">{product.name}</div>
        <div className="product-price">Price: ${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
