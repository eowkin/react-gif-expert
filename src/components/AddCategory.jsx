import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //console.log(inputValue);
    if (inputValue.length > 0) {
      onAddCategory(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Buscar Gif..."
      ></input>
    </form>
  );
};
