import { useState } from 'react';
import key01 from '../audio/Piano/key01.mp3'
import ReactHowler from 'react-howler';

const PlayerTest = () => {

  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying((prevStatus) => !prevStatus )
  }

  return (
    <>
      <h1>React Howler</h1>
      <button onClick={handlePlay}>{playing ? "Stop" : "Start"} Sound</button>
      <ReactHowler
        src={key01}
        playing={playing}
      /> 
    </>
  );
}

export default PlayerTest;
