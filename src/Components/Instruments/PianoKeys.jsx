
import React, { Children } from 'react';
import styles from './PianoKeys.module.css';
import { notes } from '../Constants/constants';
import PianoKey from './PianoKey';


const PianoKeys = ({amount,octave}) => {

    // let octave   = props.octave

    return (
        <ul className="set">
            <PianoKeyList octave={octave}/>
        </ul>)
}

const PianoKeyList = ({octave}) => {

    return notes.map((note) => (
        <PianoKey
            key={note.name+octave}
            id={note.id}
            name={note.name}
            alt={note.alt}
            octave={octave}
        />
    ));
}



export default PianoKeys;
