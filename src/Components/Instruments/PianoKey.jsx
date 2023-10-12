import React, { useContext, useState } from "react";
import styles from "./PianoKey.module.css";
import cx from "classnames";
import { NotesDispatchContext } from "../../store/notes-context";

const PianoKey = ({ id, name, alt, octave }) => {
  const [active, setActive] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

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
    setActive((prevActive) => !prevActive);
    !active
      ? dispatch({ type: "keyDown", octave: octave, id: id, name: name })
      : dispatch({ type: "keyUp", octave: octave, id: id, name: name });
  };

  return <li onClick={keyPressHandler} className={generateClassName()}></li>;
};

export default PianoKey;
