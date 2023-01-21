export const initialState = {
  loading: false,
  error: false,
  cards: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        loading: true,
      };
    case "Success":
      return {
        ...state,
        loading: false,
        cards: action.payload,
        error: false,
      };
    case "Error":
      return {
        ...state,
        loading: false,
        cards: [],
        error: true,
      };
    default: {
      return state;
    }
  }
};
