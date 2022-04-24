const initialCart = [];

const cart = (state = initialCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const state1 = [...state, action.payload];
      return state1;
    case "GET_CART_ITEMS":
      return state;
    case "REMOVE_FROM_CART":
      return state.filter((arr) => arr !== action.payload);
    default:
      return state;
  }
};

export default cart;
