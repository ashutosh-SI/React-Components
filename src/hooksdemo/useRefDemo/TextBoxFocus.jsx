import { useEffect, useRef } from "react";

const TextBoxFocus = () => {
  let message = "Welcome";

  const inputRef = useRef();
  const labelRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const buttonHandler = () => {
    labelRef.current.textContent = "Message : " + inputRef.current.value;
  };

  const buttonHandler2 = () => {
    labelRef.current.textContent = "Enter Your Name";
  };

  const buttonHandler3 = () => {
    fileInputRef.current.textContent = "";
  };

  const onFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <label ref={labelRef}>Entered Message : {message} </label>
      <br />
      <label>Message : </label>
      <input type="text" ref={inputRef} />
      <br />
      <label>Email : </label>
      <input type="text" />
      <br />
      <button onClick={buttonHandler}>Submit</button>
      <button onClick={buttonHandler2}>Enter Your Name</button>
      <br />
      <input type="file" hidden={true} ref={fileInputRef} />
      <button onClick={onFileUpload}>Upload</button>
    </>
  );
};

export default TextBoxFocus;