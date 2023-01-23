import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducers/fetchReducer";

const ProductContext = createContext({});

const ContextProduct = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Central Fetching Operation
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch({ type: "Loading" });
    fetch("https://api.tvmaze.com/search/shows?q=all", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "Success", payload: data });
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          dispatch({ type: "Error" });
        }
      });
    // Cleanup fetch
    return () => controller.abort();
  }, []);

  const value = { state };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export const useProduct = () => {
  const context = useContext(ProductContext);
  return context;
};

export default ContextProduct;
