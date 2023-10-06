import { Container, ListGroup, ListGroupItem, Card } from "react-bootstrap"
import { NotesContext } from "../store/notes-context"
import { useContext } from "react"
import Music from "./Music"
import { chordArr } from "./Constants/constants"

const ChordSelection = () => {

  const state = useContext(NotesContext);

  //text-center d-flex stretch-all
  return (
    <Container>
      <Card className="mb-4 col-lg-12" >
        <Card.Body>
          <Card.Text>
          <span className="text-success-emphasis text-center">{state.chordName}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ChordSelection