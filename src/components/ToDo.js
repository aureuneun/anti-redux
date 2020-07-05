import React from "react";
import { useContextState } from "../toDosContext";
import List from "./List";
import Add from "./Add";
import Item from "./Item";

const ToDo = () => {
  const { toDos, completed } = useContextState();
  return (
    <>
      <Add />
      <List title="To Dos">
        {toDos.map((toDo) => (
          <Item key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List title="Completed">
        {completed.map((toDo) => (
          <Item
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
};

export default ToDo;
