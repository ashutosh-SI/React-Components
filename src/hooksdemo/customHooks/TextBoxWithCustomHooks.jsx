import React from "react";
import useFormData from "./useForm";


const TextBoxWithCustomHook = () => {
  const { state, addValue, validateInput, clearError } = useFormData();
  const validate = () => {
    clearError();
    validateInput((text) =>
      text.length < 5 ? "Name should have minimum of 5 characters." : null
    );
    validateInput((text) =>
      text.toLowerCase() === "test" ? "Name Cannot be Test" : null
    );
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <input type="text" onChange={addValue} />
      <button onClick={validate}>Submit</button>
      <h3>{state?.value}</h3>
      <ul>
        {state.errors.map((err, i) => {
          return <li key={i}>{err}</li>;
        })}
      </ul>
    </div>
  );
};

export default TextBoxWithCustomHook;