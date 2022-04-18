export const addtocart = (id) => {
  return { type: "ADD_TO_CART", payload: id };
};

export const cartproducts = () => {
  return {
    type: "GET_CART_ITEMS",
  };
};

export const removefromcart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
