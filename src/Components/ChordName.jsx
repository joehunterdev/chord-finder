import { Container, ListGroup, ListGroupItem, Card } from "react-bootstrap"
import { NotesContext } from "../store/notes-context"
import { useContext } from "react"
import Harmony from "./Harmony"
import { chordArr } from "./Constants/constants"

const ChordName = () => {

  const state = useContext(NotesContext);
  const harmony = new Harmony();
  
  return (
    <Container>
      <Card className="mb-4 col-lg-12" >
        <Card.Body>
          <Card.Text>
          <span className="text-success-emphasis text-center">{harmony.getChord(state.notesInput)}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ChordName