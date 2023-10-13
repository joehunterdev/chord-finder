import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import { NotesContext } from "../store/notes-context";
import { useContext } from "react";
import Harmony from "./Harmony";
const harmony = new Harmony();

const ChordName = () => {
  const state = useContext(NotesContext);
  const notesInputs = state.map((obj) => obj.notesInput).flat();
  const chordData = harmony.getChord(notesInputs);

  return (
    <Row>
      <Container className="mb-4 col-lg-3">
        <Card>
          <Card.Body>
            <Card.Title>Chord Name</Card.Title>
            <Card.Text>
              <span className="text-success-emphasis text-center">
                {chordData.name}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mb-4 col-lg-3">
        <Card>
          <Card.Body>
            <Card.Title>Chord Notes</Card.Title>
            <Card.Text>
              <span className="text-success-emphasis text-center">
                {notesInputs.join(" ")}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mb-4 col-lg-4">
        <Card>
          <Card.Body>
            <Card.Title>Chord Intervals</Card.Title>
            <Card.Text>
              <span className="text-success-emphasis text-center">
                {" "}
                {chordData.intervals && chordData.intervals.join(", ")}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  );
};

export default ChordName;
