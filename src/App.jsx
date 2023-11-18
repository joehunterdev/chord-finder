import Header from "./Components/Layout/Header";
import Piano from "./Components/Piano";
import Footer from "./Components/Layout/Footer";
import { NotesProvider } from "./store/notes-context";
import ChordInfo from "./Components/ChordInfo";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Header></Header>
      <NotesProvider>
        <Container fluid>
          <Row className="justify-content-center"> {/* Add justify-content-center class */}
            <Col sm={12} lg={8}>
              <ChordInfo></ChordInfo>
            </Col>
            <Col sm={12} lg={8}>
              <Piano></Piano>
            </Col>
          </Row>
        </Container>
      </NotesProvider>
      <Footer />
    </>
  );
}

export default App;
