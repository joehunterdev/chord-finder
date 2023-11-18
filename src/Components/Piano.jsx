import { Container } from "react-bootstrap";
import PianoKeys from "./Instruments/PianoKeys";

const Piano = () => {
  return (
      <PianoKeys octave={4}></PianoKeys>
  );
};

export default Piano;
