import Harmony from './Harmony';

describe('Harmony', () => {
  let harmony;

  beforeEach(() => {
    harmony = new Harmony();
  });

  describe('getMajorTriad', () => {

    const testCase = { input: ['C', 'E', 'G'], expectedOutput: { name: 'CMaj', intervals: [4, 3] } };

    it(`should return the correct chord name for Cmaj`, () => {
      const output = harmony.getChord(testCase.input);
      expect(output).toEqual(testCase.expectedOutput);
    });
  });

  describe('getFirstInversion', () => {

    const testCase = { input: ['E', 'G', 'C'], expectedOutput: { name: 'CMaj (1 inversion)', intervals: [3, 5] } };

    it(`should return the correct chord name for CMaj (2 Inversion)`, () => {
      const output = harmony.getChordInversion(testCase.input);
      expect(output).toEqual(testCase.expectedOutput);
    });
  });

  describe('getSecondInversion', () => {

    const testCase = { input: ['G', 'C', 'E'], expectedOutput: { name: 'CMaj (2 inversion)', intervals: [4, 3] } };

    it(`should return the correct chord name for  CMaj (3 Inversion)`, () => {
      const output = harmony.getChordInversion(testCase.input);
      expect(output).toEqual(testCase.expectedOutput);
    });
  });


  // describe('getComplexInversion', () => {

  //   const testCase = { input: ['C', 'Eb', 'E'], expectedOutput: { name: '', intervals: [4, 3] } };

  //   it(`should return the correct chord name for Eb6sus2`, () => {
  //     const output = harmony.getChord(testCase.input);
  //     expect(output).toEqual(testCase.expectedOutput);
  //   });
  // });

  describe('getChordsVarious', () => {
    const testCases = [
      { input: ['C', 'E', 'G'], expectedOutput: { name: 'CMaj', intervals: [4, 3] } },//major thrid minor third
      { input: ['A', 'C', 'E'], expectedOutput: { name: 'Amin', intervals: [3, 4] } },//,[3, 7]
      { input: ['G', 'B', 'D', 'F'], expectedOutput: { name: 'G7', intervals: [4, 3, 3] } },
      { input: ['D', 'F', 'A', 'C'], expectedOutput: { name: 'Dm7', intervals: [3, 4, 3] } },
      { input: ['F', 'A', 'C', 'E'], expectedOutput: { name: 'Fmaj7', intervals: [4, 3, 4] } },
      { input: ['B', 'D', 'F', 'Ab'], expectedOutput: { name: 'Bdim7', intervals: [3, 3, 3] } },
      { input: ['C', 'E', 'G#'], expectedOutput: { name: 'CAug', intervals: [4, 4] } },
      { input: ['G', 'C', 'D'], expectedOutput: { name: 'GSus4', intervals: [5, 2] } },
      { input: ['D', 'E', 'A'], expectedOutput: { name: 'DSus2', intervals: [2, 5] } },
    ];

    testCases.forEach(({ input, expectedOutput }) => {
      it(`should return the correct chord name for ${expectedOutput.name}`, () => {
        const output = harmony.getChord(input);
        expect(output).toEqual(expectedOutput);
      });
    });

    it('should return "no chord found" for an invalid input', () => {
      const input = ['C', 'C#', 'D'];
      const expectedOutput = { name: 'no chord found', intervals: [1, 1] };
      const output = harmony.getChord(input);
      expect(output).toEqual(expectedOutput);
    });
  });





});


