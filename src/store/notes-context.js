import { createContext, useReducer } from 'react';
import Music from '../Components/Music';
export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);

const initialState = { notesInput: [], chordName: "" };

export function NotesProvider({ children }) {

    const [chord, dispatch] = useReducer(
        notesReducer,
        initialState
    );

    return (
        <NotesContext.Provider value={chord}>
            <NotesDispatchContext.Provider value={dispatch}>
                {children}
            </NotesDispatchContext.Provider>
        </NotesContext.Provider>
    );
}
// todo: handle state crud
function notesReducer(state, action) {

   let music = new Music();


    switch (action.type) {

        case 'keyDown': {

            return {
                notesInput: [...state.notesInput, action.name], 
                chordName: music.getChord([...state.notesInput, action.name])
            };

        }
        case 'keyUp': {

            return {
                //todo handle removal by id 
                notesInput: [...state.notesInput.filter(t => t !== action.name)],
                chordName: music.getChord([...state.notesInput, action.name])
              }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }


}
 