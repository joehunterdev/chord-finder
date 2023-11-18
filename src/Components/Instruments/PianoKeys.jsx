import React from "react";
import { notes } from "../../Constants/constants";
import PianoKey from "./PianoKey";
import styles from "./PianoKeys.module.scss";
import cx from "classnames";
import CardCustom from "../UI/CardCustom";
import { Card } from "react-bootstrap";
const PianoKeys = ({ amount, octave }) => {
  return (
    <div className={cx(styles.piano)}>
        <PianoKeyList octave={octave} />
        <PianoKeyList octave={5} />
    </div>
  );
};

const PianoKeyList = ({ octave }) => {
  return notes.map((note) => (
    <PianoKey
      key={note.name + octave}
      id={octave === 5 ? note.id + 11 : note.id}
      name={note.name}
      alt={note.alt}
      octave={octave}
    />
  ));
};

export default PianoKeys;
