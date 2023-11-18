import { Container } from "react-bootstrap";
import PianoKeys from "./Instruments/PianoKeys";
import { Row } from "react-bootstrap";
const Piano = () => {
  return (
    <Row>
      <Container className="mt-2 pb-0 col-lg-12">
        <PianoKeys octave={4}></PianoKeys>
      </Container>
    </Row>
  );
};

export default Piano;
