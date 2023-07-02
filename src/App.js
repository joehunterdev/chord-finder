
import Header from "./Components/Layout/Header";
import Piano from "./Components/Instruments/Piano";
import Footer from "./Components/Layout/Footer";
import { StrictMode } from "react";
import ChordName from "./Components/ChordName";
// import { Button } from "react-bootstrap";
import { NotesProvider } from "./store/notes-context";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StrictMode>
       <Header></Header>
       <NotesProvider>
       <Piano></Piano>
       <ChordName></ChordName>
       </NotesProvider>
       <Footer />
    </StrictMode>
  );
}

export default App;
