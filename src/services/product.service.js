const ProductService = async (url, options = {}) => {
  options["method"] = "GET";
  try {
    const res = await fetch(url,  options );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default ProductService;
