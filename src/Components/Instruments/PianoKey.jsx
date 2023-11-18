import React, { useState, useEffect, useContext } from "react";
import ReactHowler from "react-howler";
import cx from "classnames";
import styles from "./PianoKeys.module.scss";
import { audioFiles } from "../../constants/audioFiles";
import { NotesContext, NotesDispatchContext } from "../../store/notes-context";

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
      ? cx(styles.key,styles.black, activeClass, styles[noteName])
      : cx(styles.key,styles.white, activeClass, styles[noteName]);
  };

  useEffect(() => {
    setPlaying(active);
  }, [active]);

  const keyPressHandler = () => {
    if (inputLength < 7) {
      setActive((prevActive) => !prevActive);
    }
    !active && inputLength < 7
      ? dispatch({ type: "keyDown", octave: octave, id: id, name: name })
      : dispatch({ type: "keyUp", octave: octave, id: id, name: name });
  };

  return (
    <div onClick={keyPressHandler} className={generateClassName()}>
      <ReactHowler src={[audioFiles[id]]} playing={playing} />
   </div>
  );
};

export default PianoKey;
