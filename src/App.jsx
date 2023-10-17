
import Header from "./Components/Layout/Header";
import Piano from "./Components/Instruments/Piano";
import Footer from "./Components/Layout/Footer";
import { StrictMode } from "react";
import { NotesProvider } from "./store/notes-context";
import { Container } from "react-bootstrap";
import ChordInfo from "./Components/ChordInfo";
function App() {
  return (
    <StrictMode>
      <Header></Header>
      <Container className="col-lg-8 col-md-12 col-sm-12" fluid>
        <NotesProvider>
          <ChordInfo></ChordInfo>
          <Piano></Piano>
         </NotesProvider>
        <Footer />
      </Container>
    </StrictMode>
  );
}

export default App;
