import { Container, ListGroup,ListGroupItem, Card } from "react-bootstrap"
import { NotesContext } from "../store/notes-context"
import { useContext } from "react"
import Music from "./Music"
const ChordName = () => {

    const state = useContext(NotesContext);
    console.log(state)
    
    // const music = new Music();
    // {music.getChord(state.notesIndex)}

    return (
    <Container className="text-center">
        <Card.Body>
            <h1 className="text-info">{state.chordName}</h1>
        </Card.Body>
    </Container>

    )
}

export default ChordName