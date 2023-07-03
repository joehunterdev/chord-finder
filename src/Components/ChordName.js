import { Container, ListGroup, ListGroupItem, Card } from "react-bootstrap"
import { NotesContext } from "../store/notes-context"
import { useContext } from "react"
import Music from "./Music"
const ChordName = () => {

    const state = useContext(NotesContext);
    console.log(state)

    const music = new Music();
    const root = 'C'; //${root}  

    //Todo figure out how to handle this flat accidental. 
    //b flat means were going up 


    const chordArr = [
        { chordName: "Major (triad)", notes: ['C', 'E', 'G'] },
        { chordName: "Major 6th ", notes: ['C', 'E', 'G', 'A'] },
        { chordName: "Major 6/9 ", notes: ['C', 'E', 'G', 'A', 'D'] },
        { chordName: "Major 7th ", notes: ['C', 'E', 'G', 'B'] },
        { chordName: "Major 9th ", notes: ['C', 'E', 'G', 'B', 'D'] },
        { chordName: "Major 11th ", notes: ['C', 'E', 'G', 'B', 'D', 'F'] },
        { chordName: "Major 13th ", notes: ['C', 'E', 'G', 'B', 'D', 'F', 'A'] },

        { chordName: "Minor (triad)", notes: ['C', 'Eb', 'G'] },
        { chordName: "Minor 6th", notes: ['C', 'Eb', 'G', 'A'] },
        { chordName: "Minor 7th ", notes: ['C', 'Eb', 'G', 'Bb'] },
        { chordName: "Minor 9th ", notes: ['C', 'Eb', 'G', 'Bb', 'D'] },
        { chordName: "Minor 11th ", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F'] },
        { chordName: "Minor 13th ", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F', 'A'] },
        { chordName: "Minor Major 7th ", notes: ['C', 'Eb', 'G', 'B'] },

        { chordName: "Dominant 7th", notes: ['C', 'E', 'G', 'Bb'] },
        { chordName: "Dominant 9th", notes: ['C', 'E', 'G', 'Bb', 'D'] },
        { chordName: "Dominant 11th", notes: ['C', 'E', 'G', 'Bb', 'D', 'F'] },
        { chordName: "Dominant 13th", notes: ['C', 'E', 'G', 'Bb', 'D', 'F', 'A'] },

        { chordName: "Diminished", notes: ['C', 'Eb', 'Gb'] },

        { chordName: "Augmented", notes: ['C', 'E', 'G#'] },

        { chordName: "Suspended 2", notes: ['C', 'D', 'G'] }

    ];

    // console.log(chordArr.forEach())

    const ChordList = () => {
        //music.getChord(chord.notes)
        return chordArr.map((chord)=> (
              <li key={chord.chordName}><span>{chord.chordName}</span> <strong>{music.getChord(chord.notes)}</strong></li>
        ))


    }

    return (
        <Container className="text-center d-flex stretch-all">
            <Card.Body>

                <ul className="list-group">
                    {/* {chordArr.map(chord => (
                        <li key={chord.indexOf}>{chord.chordName}{music.getChord(chord.notes)}</li>
                     ))}
  */} {ChordList()}
                </ul>

            </Card.Body>
        </Container>
    )
}

export default ChordName