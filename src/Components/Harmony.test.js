import { expect } from '@jest/globals';
import Harmony from './Harmony';
import { chordArr } from '../Constants/constants';
describe('Harmony', () => {
  let harmony;

  beforeEach(() => {
    harmony = new Harmony();
  });

  describe('getChord', () => {
    const testCases = [
      { input: ['C', 'E', 'G'], expectedOutput: { name: 'C Major', intervals: [4, 3] } },//major thrid minor third
      { input: ['A', 'C', 'E'], expectedOutput: { name: 'A Minor', intervals: [3, 4] } }//,[3, 7]
      // { input: ['G', 'B', 'D', 'F'], expectedOutput: { name: 'G7', intervals: [4, 3, 3] } },[4, 7, 10]
      // { input: ['D', 'F', 'A', 'C'], expectedOutput: { name: 'Dm7', intervals: [3, 4, 3] } },
      // { input: ['F', 'A', 'C', 'E'], expectedOutput: { name: 'Fmaj7', intervals: [4, 3, 4] } },
      // { input: ['B', 'D', 'F', 'Ab'], expectedOutput: { name: 'Bdim7', intervals: [3, 3, 3] } },
      // { input: ['C', 'E', 'G#'], expectedOutput: { name: 'Caug', intervals: [4, 4] } },
      // { input: ['G', 'C', 'D'], expectedOutput: { name: 'Gsus4', intervals: [5, 2] } },
      // { input: ['D', 'E', 'A'], expectedOutput: { name: 'Dsus2', intervals: [2, 5] } }, 
    ];

    testCases.forEach(({ input, expectedOutput }) => {
      it(`should return the correct chord name for ${input}`, () => {
        const output = harmony.getChord(input);
        expect(output).toEqual(expectedOutput);
      });
    });

    // it('should return "no chord found" for an invalid input', () => {
    //   const input = ['C', 'E', 'G', 'A'];
    //   const expectedOutput = { name: 'no chord found', intervals: [] };
    //   const output = harmony.getChord(input);
    //   expect(output).toEqual(expectedOutput);
    // });
  });

  describe('getChord2', () => {
    const testCases = [{}];
    // const testCases = [
    //   { input: ['C', 'E', 'G'], expectedOutput: { name: 'C Major (triad)', intervals: [4, 3] } },
    //   // { input: ['A', 'C', 'E'], expectedOutput: { name: 'A Minor (triad)', intervals: [3, 4] } },
    //   // { input: ['G', 'B', 'D', 'F'], expectedOutput: { name: 'G7', intervals: [4, 3, 3] } },
    //   // { input: ['D', 'F', 'A', 'C'], expectedOutput: { name: 'Dm7', intervals: [3, 4, 3] } },
    //   // { input: ['F', 'A', 'C', 'E'], expectedOutput: { name: 'Fmaj7', intervals: [4, 3, 4] } },
    //   // { input: ['B', 'D', 'F', 'Ab'], expectedOutput: { name: 'Bdim7', intervals: [3, 3, 3] } },
    //   // { input: ['C', 'E', 'G#'], expectedOutput: { name: 'Caug', intervals: [4, 4] } },
    //   // { input: ['G', 'C', 'D'], expectedOutput: { name: 'Gsus4', intervals: [5, 2] } },
    //   // { input: ['D', 'E', 'A'], expectedOutput: { name: 'Dsus2', intervals: [2, 5] } },
    // ];
  
    // chordArr.forEach((chord) => {
    //   console.log(chord.notes)
    //   testCases.push({ input: chord.notes, expectedOutput: { chordName: chord.chordName, intervals: [4, 3] } });
    // });
    chordArr.forEach(chord => {
      console.log(chord.chordName)
      console.log(harmony.getChord2(chord.notes).intervals)
   });
   
    testCases.forEach(({ input, expectedOutput }) => {
      it(`should return the correct chord name for ${input}`, () => {
        const output = harmony.getChord2(input);
        expect(output).toEqual(expectedOutput);
      });
    });
  
    // it('should return "no chord found" for an invalid input', () => {
    //   const input = ['C', 'E', 'G', 'A'];
    //   const expectedOutput = { name: 'no chord found', intervals: [] };
    //   const output = harmony.getChord2(input);
    //   expect(output).toEqual(expectedOutput);
    // });
  });

});



describe('getChord2', () => {
  const harmony = new Harmony();

  it('should return the correct chord name for a major triad', () => {
    const input = ['C', 'E', 'G'];
    const expectedOutput = { chordName: 'C Major (triad)', intervals: [4, 3] };
    const output = harmony.getChord2(input);
    expect(output).toEqual(expectedOutput);
  });

  it('should return the correct chord name for a minor triad', () => {
    const input = ['A', 'C', 'E'];
    const expectedOutput = { chordName: 'A Minor (triad)', intervals: [3, 4] };
    const output = harmony.getChord2(input);
    expect(output).toEqual(expectedOutput);
  });

  it('should return null for an invalid input', () => {
    const input = ['C', 'E', 'F'];
    const expectedOutput = null;
    const output = harmony.getChord2(input);
    expect(output).toEqual(expectedOutput);
  });
});