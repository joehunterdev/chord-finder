import React, { createContext, useReducer, memo } from "react";
import { notes } from "../Constants/constants";

const initialState = [
  { octave: 3, notesInput: [] },
  { octave: 4, notesInput: [] },
  { octave: 5, notesInput: [] },
  { octave: 6, notesInput: [] },
];

export const NotesContext = createContext(initialState);
export const NotesDispatchContext = createContext(null);

const notesReducer = (state, action) => {

  switch (action.type) {
 
    case "keyDown": {
      //Get object by octave
      const objToMutate = state.find((obj) => obj.octave === action.octave);
      if (objToMutate) {
        const updatedNotesInput = [...objToMutate.notesInput, action.name];
        //sort by pitch
        updatedNotesInput.sort((a, b) => {
          const aIndex = notes.findIndex((note) => note.name === a);
          const bIndex = notes.findIndex((note) => note.name === b);
          return aIndex - bIndex;
        });
        return state.map((obj) =>
          obj.octave === action.octave ? { ...obj, notesInput: updatedNotesInput } : obj
        );
      }
      return state; //return new state 
    }

    case "keyUp": {
      const objToMutate = state.find((obj) => obj.octave === action.octave);
      if (objToMutate) {
        const updatedNotesInput = objToMutate.notesInput.filter((t) => t !== action.name);
        return state.map((obj) =>
          obj.octave === action.octave ? { ...obj, notesInput: updatedNotesInput } : obj
        );
      }
      return state;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const NotesProvider = memo(({ children }) => {
  const [noteData, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={noteData}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
});

export { NotesProvider };