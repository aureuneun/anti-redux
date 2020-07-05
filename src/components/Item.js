import React from "react";
import { useContectDispatch } from "../toDosContext";
import { REMOVE, COMPLETE, UNCOMPLETE } from "../reducer";

const Item = ({ id, text, isCompleted }) => {
  const dispatch = useContectDispatch();
  return (
    <li>
      <span
        role="img"
        aria-label=""
        onClick={() => dispatch({ type: REMOVE, payload: id })}
      >
        ❌
      </span>
      <span
        role="img"
        aria-label=""
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "⛔️" : "✅"}
      </span>
      <span>{text}</span>
    </li>
  );
};

export default Item;
