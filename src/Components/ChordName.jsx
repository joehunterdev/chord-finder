import { Container, ListGroup, ListGroupItem, Card } from "react-bootstrap"
import { NotesContext } from "../store/notes-context"
import { useContext } from "react"
import Harmony from "./Harmony"

const ChordName = () => {

 const state = useContext(NotesContext);

  const harmony = new Harmony();
  const notesInputs = state.map((obj) => obj.notesInput).flat();
  // console.log(notesInputs);
  return (
    <Container>
      <Card className="mb-4 col-lg-12" >
        <Card.Body>
          <Card.Text>
           <span className="text-success-emphasis text-center">{harmony.getChord(notesInputs)}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ChordName