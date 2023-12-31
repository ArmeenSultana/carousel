const BASE_URL = "https://fakestoreapi.com";

export default {
  products: `${BASE_URL}/products`,
  limitProduct: (limit) => {
    return `${BASE_URL}/products?limit=${limit}`;
  },
};
