import React, { useReducer } from "react";

const inputDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return { ...state, value: action.value };
    case "ADD_ERROR":
      return { ...state, errors: [...state.errors, action.error] };
    case "CLEAR_ERROR":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

const initialData = { value: "", errors: [] };

const useFormData = () => {
  const [state, dispatch] = useReducer(inputDataReducer, initialData);

  const addValue = (e) => {
    const value = e.target.value;
    dispatch({ type: "ADD_VALUE", value: value });
  };

  const validateInput = (fn) => {
    const errFound = fn(state.value);

    if (errFound) {
      dispatch({ type: "ADD_ERROR", error: errFound });
    } else {
      dispatch({ type: "CLEAR_ERROR" });
    }
  };

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  return { state, addValue, validateInput, clearError };
};

export default useFormData;