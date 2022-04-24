export const addtocart = (id) => {
  return { type: "ADD_TO_CART", payload: id };
};

export const getcartproducts = () => {
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

export const addQuantity = (index) => {
  return {
    type: "ADD_QUANTITY",
    payload: index,
  };
};

export const removeQuantity = (index) => {
  return {
    type: "REMOVE_QUANTITY",
    payload: index,
  };
};
