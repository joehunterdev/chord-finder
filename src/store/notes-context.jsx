import React, { createContext, useReducer } from "react";
import Harmony from "../Components/Harmony";

const initialState = { notesInput: [] };

export const NotesContext = createContext(initialState);
export const NotesDispatchContext = createContext(null);

const notesReducer = (state, action) => {
  const harmony = new Harmony();
  const { notesInput } = state;

  switch (action.type) {
    case "keyDown": {
      return {
        notesInput: harmony.sortPitch(state.notesInput, action.name + action.octave),
      };
    }

    case "keyUp": {
      const noteToRemove = action.name + action.octave;
      const filteredNotes = notesInput.filter((note) => note !== noteToRemove);

      return {
        notesInput: filteredNotes,
      };
    }

    default: {
      throw new Error(`Unknown action: ${action.type}`);
      // return state;
    }
  }
};

const NotesProvider = ({ children }) => {
  const [noteData, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={noteData}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
};

export { NotesProvider };
