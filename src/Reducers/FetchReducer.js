import { useEffect, useReducer } from "react";
const initialState = {
  loading: false,
  error: false,
  cards: [],
};
const reducer = (state, action) => {
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
const FetchReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch({ type: "Loading" });
    fetch("https://api.tvmaze.com/search/shows?q=all", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "Success", payload: data });
      })
      .catch((err) => {
        // dispatch({type:"Error"})
        console.log(err);
      });
    return () => controller.abort();
  }, []);
  return;
};

export default FetchReducer;
