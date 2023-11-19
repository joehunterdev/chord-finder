import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { NotesContext } from "../store/notes-context";
import { useContext } from "react";
import Harmony from "./Harmony";
import CardCustom from "./UI/CardCustom";

const harmony = new Harmony();

const ChordInfo = () => {
  const notesContext = useContext(NotesContext);
  let notesInput = notesContext.notesInput;
  const [chordData, setChordData] = useState({});
  const [inversions, setInversions] = useState({});
  const [scales, setScales] = useState({});
  const [scale, setScale] = useState([]);
  const [degrees, setDegrees] = useState([]);


  useEffect(() => {
  
    if (notesInput.length > 1) {
      setChordData(harmony.getChord(notesInput));
      setInversions(harmony.getChordInversion(notesInput));
      setScales(harmony.detectScaleFromFirstInterval(notesInput));
      let scaleNotes = harmony.getScaleNotes(notesInput);
      setScale(scaleNotes);
      setDegrees(harmony.getDegrees(notesInput, scaleNotes));
    }
  }, [notesInput]);

  const { name, intervals } = chordData;

  return (
    <Row>
      <Container className="mb-2 mt-2 col-lg-3 col-md-4 col-sm-5 col-xs-2 m-0">
        <CardCustom title="Chord">
          {name && name} <small>{inversions && inversions.name}</small>
        </CardCustom>
      </Container>
      <Container className="mb-2 mt-2 col-lg-3 col-md-3 col-sm-4 col-xs-2 overflow-hidden  m-0">
        <CardCustom title="Notes">
          
          {notesInput
            ? notesInput
                .map((note) => {
                  return note.slice(0, -1);
                })
                .join(" | ")
            : "No input"}
        </CardCustom>
      </Container>
      <Container className="mb-2 mt-2 col-lg-3 col-md-3 col-sm-3 col-xs-2 overflow-hidden m-0">
        <CardCustom title="Degrees">
          {!degrees ? "None" : degrees.join(" | ")}
        </CardCustom>
      </Container>
      <Container className="mb-2 mt-2 col-lg-3 col-md-2 col-sm-3 col-xs-2 overflow-hidden m-0">
        <CardCustom title="Scale">
          {!scales.name ? "" : scales.root + " " + scales.name}
         </CardCustom>
      </Container>
    </Row>
  );
};

export default ChordInfo;
