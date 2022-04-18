const initialItems = [];

const items = (state = initialItems, action) => {
  switch (action.type) {
    case "ADD_TO_ITEM":
      return [...state, action.payload];
    case "GET_CART_ITEMS_ITEM":
      return state;
    case "REMOVE_FROM_CART":
      return state.filter((arr) => arr !== action.payload);
    default:
      return state;
  }
};

export default items;
