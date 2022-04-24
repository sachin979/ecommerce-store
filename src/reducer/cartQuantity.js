const initialQuantity = [];

const quantity = (state = initialQuantity, action) => {
  switch (action.type) {
    case "ADD_QUANTITY":
      if (!state[action.payload]) {
        console.log("if");
        //state.push(1);
        const state1 = [...state, 1];
        return state1;
      } else {
        console.log("else");

        state[action.payload] = state[action.payload] + 1;
        return state;
      }
    case "REMOVE_QUANTITY":
      if (state[action.payload] == 1) {
        return [...state.slice(0, action.index, ...state.slice(action.index + 1))];
      } else {
        state[action.payload] = state[action.payload] - 1;
        return state;
      }
    default:
      return state;
  }
};

export default quantity;
