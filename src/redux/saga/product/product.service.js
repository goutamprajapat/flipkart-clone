export const getAllProductData = async () => {
  const url = "https://fakestoreapi.com/products";
  // let url = "http://localhost:3001/categories";
  const res = await fetch(url, { methods: "GET" });
  const data = await res.json();
  return data;
};
export const getProductService = async () => {
  const url = "https://fakestoreapi.com/products/categories";
  // let url = "http://localhost:3001/categories";
  const res = await fetch(url, { methods: "GET" });
  const data = await res.json();
  return data;
};
export const getSingleProductWithID = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  // let url = "http://localhost:3001/categories";
  const res = await fetch(url, { methods: "GET" });
  const data = await res.json();
  return data;
};
export const getproductCategorie = async (categories) => {
  const url = `https://fakestoreapi.com/products/category/${categories}`;
  // let url = "http://localhost:3001/categories";
  const res = await fetch(url, { methods: "GET" });
  const data = await res.json();
  return data;
};
