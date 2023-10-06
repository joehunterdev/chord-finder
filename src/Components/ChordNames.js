  import { Container, ListGroup, ListGroupItem, Card } from "react-bootstrap"
import { NotesContext } from "../store/notes-context"
import { useContext } from "react"
import Music from "./Music"
import { chordArr } from "./Constants/constants"

const ChordNames = () => {

    const state = useContext(NotesContext);
    const music = new Music();

    const sorted = chordArr.sort(function(a, b){return a.notes.length - b.notes.length}).slice(-24);;

    const ChordBlock = () => {
        return sorted.map((chord) => (
            <div className="p-2 flex-fill" key={chord.chordName}><strong>{music.getChord(chord.notes)} {music.notesToIntervals(chord.chordName)} </strong></div>
        ))
    }
    const ChordList = () => {
        return sorted.map((chord) => (
            <li className="list-group-item" key={chord.chordName}><span>{chord.chordName}</span> <strong> {music.notesToIntervals(chord.chordName)} </strong></li>
        ))
    }

   //text-center d-flex stretch-all
    return (
        <Container>
                 <div className="d-flex">
                   {ChordBlock()}
                 </div>
         </Container>
    )
}

export default ChordNames