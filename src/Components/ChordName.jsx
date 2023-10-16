import {
  Container,
  Row,
  Card,
} from "react-bootstrap";
import { NotesContext } from "../store/notes-context";
import { useContext } from "react";
import Harmony from "./Harmony";
const harmony = new Harmony();

const ChordName = () => {

  const state = useContext(NotesContext);
  const notesInputs = state.map((obj) => obj.notesInput).flat();
  let chordData = harmony.getChord(notesInputs);
  let inversions = harmony.getChordInversion(notesInputs);
  return (
    <Row>
      <Container className="mb-4 col-lg-3">
        <Card>
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              <span className="text-success-emphasis text-center">
                {chordData.name ?  chordData.name : "No chord found" } {inversions && inversions.name}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mb-4 col-lg-2">
        <Card>
          <Card.Body>
            <Card.Title>Notes</Card.Title>
            <Card.Text>
              <span className="text-success-emphasis text-center">
                {notesInputs.join(" ")}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mb-4 col-lg-3">
        <Card>
          <Card.Body>
            <Card.Title>Stacked Intervals</Card.Title>
            <Card.Text>
              <span className="text-success-emphasis text-center">
                {chordData.intervals && harmony.getIntervalNames(chordData.intervals).join(" - ")}
                </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mb-4 col-lg-3">
        <Card>
          <Card.Body>
            <Card.Title>Formula </Card.Title>
            <Card.Text>
              <span className="text-success-emphasis text-center">{chordData.intervals && chordData.intervals.join(", ")}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  );
};

export default ChordName;