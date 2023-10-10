import { createContext, useReducer } from "react";

export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);

const initialState = { notesInput: [] };

export function NotesProvider({ children }) {
  const [chord, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={chord}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}
function notesReducer(state, action) {
  switch (action.type) {
    case "keyDown": {
      return {
        notesInput: [...state.notesInput, action.name],
      };
    }

    case "keyUp": {
      return {
        notesInput: [...state.notesInput.filter((t) => t !== action.name)], //return everything thats not the note passed
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
