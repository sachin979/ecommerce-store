const initialQuantity = [];

const quantity = (state = initialQuantity, action) => {
  switch (action.type) {
    case "ADD_QUANTITY":
      if (state[action.payload]) {
        let newstate = [...state];
        newstate[action.payload] = newstate[action.payload] + 1;
        return newstate;
      } else {
        const state1 = [...state, 1];
        return state1;
      }
    case "REMOVE_QUANTITY":
      if (state[action.payload] == 1) {
        return state.filter((i, index) => index != action.payload);
      } else {
        let newstate = [...state];
        newstate[action.payload] = newstate[action.payload] - 1;
        return newstate;
      }
    default:
      return state;
  }
};

export default quantity;
