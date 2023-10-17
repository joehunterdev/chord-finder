
import Header from "./Components/Layout/Header";
import Piano from "./Components/Instruments/Piano";
import Footer from "./Components/Layout/Footer";
import { StrictMode } from "react";
import ChordName from './Components/ChordName'
import { NotesProvider } from "./store/notes-context";
import { Container } from "react-bootstrap";
function App() {
  return (
    <StrictMode>
      <Container className="col-lg-8 mx-auto p-4 py-md-5">
        <Header></Header>
        <NotesProvider>
          <ChordName></ChordName>
          <Piano></Piano>
         </NotesProvider>
        <Footer />
      </Container>
    </StrictMode>
  );
}

export default App;
