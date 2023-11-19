import { Container, Row } from "react-bootstrap";
import { NotesContext } from "../store/notes-context";
import { useContext } from "react";
import Harmony from "./Harmony";
import CardCustom from "./UI/CardCustom";

const harmony = new Harmony();

const ChordInfo = () => {

  const state = useContext(NotesContext);
  const notesInput = state.notesInput;
 
  let chordData = harmony.getChord(notesInput);
  let inversions = harmony.getChordInversion(notesInput);
  const { name, intervals } = chordData;

  return (
    <Row>
      <Container className="mb-2 mt-2 col-lg-4 col-md-6 col-sm-5 col-xs-2 m-0">
        <CardCustom title="Chord">
          {name ? name : "No chord found"} {inversions && inversions.name}
        </CardCustom>
      </Container>
      <Container className="mb-2 mt-2 col-lg-4 col-md-4 col-sm-4 col-xs-2 overflow-hidden  m-0">
        <CardCustom title="Notes">
          {notesInput ? notesInput.join(" ") : "No input"}
        </CardCustom>
      </Container>
      <Container className="mb-2 mt-2 col-lg-4 col-md-3 col-sm-3 col-xs-2 overflow-hidden m-0">
        <CardCustom title="Degree">
          {!intervals ? "No Degree" : intervals.join(", ")}
        </CardCustom>
      </Container>
    </Row>
  );
};

export default ChordInfo;
