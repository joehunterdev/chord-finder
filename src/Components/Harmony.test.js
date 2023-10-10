import renderer from 'react-test-renderer';
import Music from './Music';

it('Chords Defined', () => {
  // const component = renderer.create(
  //   <Music/>,
  // );



  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // renderer.act(() => {
    
  //   tree.props.onMouseEnter();
  // });
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseLeave();
  // });
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  const music = new Music()
  renderer.act(() => {
    expect(music.chordName(['C','E','G'])).toBe("C Major");
  });

 });







// // import { test,describe } from "@testing-library/react";
// // import Music from "Music";
// const Music = require('Music');

// // //test block
// // test("increments counter", () => {
// // // render the component on virtual dom
// // render(<App />);
 
// // });

// describe("Chords Test", () => {
  
//   const music = new Music();
//   const chordName = music.getChord(['C', 'E', 'G']);
  
//   test('C Major', () => {
//         expect(music.chordName(['C','E','G'])).toBe("C Major");
//   });
  
// });
// /*
// // import React from "react";
// const Music = require("./Music");
// // import Music from "./Music";
// describe("Music", () => {
//   const music = new Music();
//   // const chordName = music.getChord();

//   test('C Major', () => {
//         expect(music.chordName(['C','E','G'])).toBe("C Major");
//   });
// });

// */