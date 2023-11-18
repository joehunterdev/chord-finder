import { Container, Row } from "react-bootstrap";
import { NotesContext } from "../store/notes-context";
import { useContext } from "react";
import Harmony from "./Harmony";
import CardCustom from "./UI/CardCustom";

const harmony = new Harmony();

const ChordInfo = () => {
  const state = useContext(NotesContext);
  const notesInputs = state.map((obj) => obj.notesInput).flat();
  let chordData = harmony.getChord(notesInputs);
  let inversions = harmony.getChordInversion(notesInputs);
  return (
    <Row>
      <Container className="mb-2 mt-2 col-lg-6 col-sm-6 col-xs-2 m-0">
        <CardCustom title="Chord">
          {chordData.name ? chordData.name : "No chord found"}{" "}
          {inversions && inversions.name}
        </CardCustom>
      </Container>
      <Container className="mb-2 mt-2 col-lg-2 col-md-3 col-sm-3 col-xs-2 overflow-hidden  m-0">
        <CardCustom title="Notes">
          {notesInputs ? notesInputs.join(" ") : "No input"}
        </CardCustom>
      </Container>
      <Container className="mb-2 mt-2 col-lg-4 col-md-3 col-sm-3 col-xs-2 overflow-hidden m-0">
        <CardCustom title="Formula">
          {!chordData.intervals ? "No Formula" : chordData.intervals.join(", ")}
        </CardCustom>
      </Container>
    </Row>
  );
};

export default ChordInfo;
