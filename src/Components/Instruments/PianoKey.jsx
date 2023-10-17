import ReactHowler from "react-howler";
import { useState } from "react";
import { useContext } from "react";
import { NotesContext, NotesDispatchContext } from "../../store/notes-context";
import cx from "classnames";
import styles from "./PianoKey.module.css";
import { audioFiles } from "../../Constants/constants";

const PianoKey = ({ id, name, alt, octave }) => {
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);


  const dispatch = useContext(NotesDispatchContext);
  const state = useContext(NotesContext);
  const inputLength = state.map((obj) => obj.notesInput).flat().length;

  const generateClassName = () => {
    let noteName = name
      .replace("#", "-sharp")
      .replace("b", "-flat")
      .toLowerCase();
    let activeClass = active ? styles.active : "";

    return alt
      ? cx(styles.black, activeClass, styles[noteName])
      : cx(styles.white, activeClass, styles[noteName]);
  };

  const keyPressHandler = (event) => {
    if (inputLength < 7) {
      setActive((prevActive) => !prevActive);
      setPlaying((prevStatus) => !prevStatus);
    }
    !active && inputLength < 7
      ? dispatch({ type: "keyDown", octave: octave, id: id, name: name })
      : dispatch({ type: "keyUp", octave: octave, id: id, name: name });
  };

  return (
    <li onClick={keyPressHandler} className={generateClassName()}>
      <ReactHowler src={[audioFiles[id]]} playing={playing} />
    </li>
  );
};

export default PianoKey;
