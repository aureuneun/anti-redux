import { v4 as uuidv4 } from "uuid";

export const ADD = "add";
export const REMOVE = "remove";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";

export const initialState = { toDos: [], completed: [] };

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case REMOVE:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE:
      const completeTarget = state.toDos.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...completeTarget }],
      };
    case UNCOMPLETE:
      const uncompleteTarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: [...state.toDos, { ...uncompleteTarget }],
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
