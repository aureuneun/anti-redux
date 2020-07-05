import React, { useState } from "react";
import { useContectDispatch } from "../toDosContext";
import { ADD } from "../reducer";

const Add = () => {
  const dispatch = useContectDispatch();
  const [value, setValue] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: value });
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write a to do"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default Add;
