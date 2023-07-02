const notes = Object.freeze([
  {
    id: 0,
    name: "C",
  },
  {
    id: 1,
    name: "C#",
    alt: "Bb"
  }, {
    id: 2,
    name: "D",
  }, {
    id: 3,
    name: "D#",
    alt: 'Eb'
  }, {
    id: 4,
    name: "E",
  }, {
    id: 5,
    name: "F",
  }, {
    id: 6,
    name: "F#",
    alt: "Gb",
  },
  {
    id: 7,
    name: "G",
  },
  {
    id: 8,
    name: "G#",
    alt: "Ab",

  },
  {
    id: 9,
    name: "A",
  },
  {
    id: 10,
    name: "A#",
    alt: "Bb",
  },
  {
    id: 11,
    name: "B",
  }
]);


//root is omited
const intervals = {
  two: {
    "perfect unison": 0,
    "minor 2nd": 1,
    "major 2nd": 2,
    "minor 3rd": 3,
    "major 3rd": 4,
    "perfect": 5,
    "dimished/augmented": 6,
    "perfect 5th": 7,
    "minor 6th": 8,
    "major 6th": 9,
  },
  triad: {
    "major": [4, 7],
    "minor": [3, 7]
  },
  tetrad: {
    "major 7th": [4, 7, 11],
    "minor 7th": [3, 7, 11]
  },
  five: {
    "major 7th": [4, 7, 11],
    "minor 7th": [3, 7, 11]
  },
};

export { notes, intervals };


// const notesNum = Object.freeze({
//   0: "C",
//   1: "C#",
//   2: "D",
//   3: "D#",
//   4: "E",
//   5: "F",
//   6: "F#",
//   7: "G",
//   8: "G#",
//   9: "A",
//   10: "A#",
//   11: "B",
// });

