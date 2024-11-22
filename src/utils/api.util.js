import categoryProductData from "../mock/category-product-data.json";

export const fetchCategoryProductData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categoryProductData), 500);
  });
};
