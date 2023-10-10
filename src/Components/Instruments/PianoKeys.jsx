
import React from 'react';
import styles from './PianoKeys.module.css';
import { notes } from '../Constants/constants';

import PianoKey from './PianoKey';


const PianoKeyList = () => {

    return notes.map((note) => (
        <PianoKey
            key={note.id}
            id={note.id}
            name={note.name}
            alt={note.alt}
        />
    ));
}


const PianoKeys = () => {
     
    return (
        <ul className="set">
            <PianoKeyList />
        </ul>)
}

export default PianoKeys;


// <li className={cx(styles.white,styles.b)}></li>
// <li className={cx(styles.black,styles.asharp)}></li>
// <li className="white a" ></li>
// <li className="black gsharp"></li>
// <li className="white g"></li>
// <li className="black fsharp"></li>
// <li className="white f"></li>
// <li className="white e"></li>
// <li className="black dsharp"></li>
// <li className="white d"></li>
// <li className="black cs"></li>
// <li className="white c"></li> *


// console.log(noteIndex)

// const filterIndexes = noteIndex.filter(value => {
//     return !accidentalIndex.find(key => {
//         return key === value;
//     });
// });