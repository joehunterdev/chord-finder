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


// //root is omited
// const semiTonalIntervals = {
//   two: {
//     "perfect unison": 0,
//     "minor 2nd": 1,
//     "major 2nd": 2,
//     "minor 3rd": 3,
//     "major 3rd": 4,
//     "perfect fourth": 5,
//     "dimished/augmented": 6,
//     "perfect 5th": 7,
//     "minor 6th": 8,
//     "major 6th": 9,
//     "minor 7th": 10,
//     "major 7th": 11
//   },
//   three: {
//     "Suspended 2": [2, 7],
//     "Suspended 4": [4, 5],
//     "Minor": [3, 7],
//     "Major": [4, 7], // this means intervals
//     "Dimished": [3, 6],
//     "Augmented": [4, 8]
//   },
//   four: {
//     "2": [2, 4, 7],
//     "6Sus2": [2, 7, 9],
//     "Minor 7th": [3, 7, 1],
//     "Minor 6th ": [3, 7, 9],
//     "Dimnished 7th": [3, 6, 9],
//     "Minor-Major 7th": [3, 7, 11],
//     "m7b5": [3, 6, 10], // (Minor 7th flat 5th)
//     "Major 6th": [4, 7, 9],
//     "7": [4, 7, 10],
//     "Major 7th ": [4, 7, 11],
//     "Dominant 7th": [4, 7, 1],
//     "7b5 (7th flat 5th)": [4, 6, 10],
//     "7#5 (7th sharp 5th)": [4, 8, 10]
//   },
//   five: {
//     "Major 6-9th": [4, 7, 9, 2],
//     "Major 9th": [4, 7, 11, 2],
//     "Minor 9th": [3, 7, 1, 2],
//     "Dominant 9th": [4, 7, 1, 2],
//   },
//   six: {
//     "Major 11th": [4, 7, 11, 2, 5],
//     "Minor 11th": [3, 7, 1, 2, 5],
//     "Dominant 11": [4, 7, 1, 2, 5],
//     "Major 13th": [3, 7, 1, 2, 5],
//     "Minor 13th": [3, 7, 1, 2, 5]
//   },
//   seven: {
//     "Major 13th": [4, 7, 11, 2, 5, 9],
//     "Minor 13th": [3, 7, 1, 2, 5, 9],
//     "Dominant 13th": [4, 7, 1, 2, 5, 9],
//   },
// };

//root is omited
const stackedIntervals = {
  2: {
    "perfect unison": 0,
    "minor 2nd": 1,
    "major 2nd": 2,
    "minor 3rd": 3,
    "major 3rd": 4,
    "perfect fourth": 5,
    "dimished/augmented": 6,
    "perfect 5th": 7,
    "minor 6th": 8,
    "major 6th": 9,
    "minor 7th": 10,
    "major 7th": 11
  },
  3: {
    "Sus2": [2, 5],
    "Sus4": [4, 5],
    "m": [3, 4],
    "Maj": [4, 3], // this means intervals
    "Dim": [3, 3],
    "Aug": [4, 4]
  },

  4: {
    "2": [2, 2, 3],
    "m7": [3, 4, 3],
    "m6 ": [3, 4, 2],
    "Dim7": [3, 3, 3],
    "mMaj7": [3, 4, 4],
    "m7b5": [3, 6, 10], // (Minor 7th flat 5th) / (half-diminished)
    "Maj6": [4, 3, 2],
    "7": [4, 3, 3],
    "Maj7": [4, 3, 4],
    "Dom7": [4, 3, 6],
    "7b5": [4, 2, 4], // (7th flat 5th)
    "7#5": [4, 4, 7], // (7th sharp 5th)
  },
  5: {
    "6sus2": [2, 3, 2, 2],
    "Maj6/9": [3, 4, 2, 7],
    "Maj9": [4, 3, 4, 9],
    "Min9": [3, 4, 3, 8],
    "Dom9": [4, 3, 3, 8],
  },
  6: {
    "Maj11": [4, 3, 4, 9, 4],
    "Min11": [3, 4, 3, 8, 3],
    "Dom11": [4, 3, 3, 8, 3],
    "Maj13": [4, 3, 4, 9, 7],
    "Dom13": [4, 3, 3, 5, 4],
  },
  7: {
    "Min13": [3, 7, 1, 2, 5, 9],
  },
};


const chordArr = [
  { chordName: "Maj", notes: ['C', 'E', 'G'] },
  { chordName: "m", notes: ['C', 'Eb', 'G'] },
  { chordName: "Dim", notes: ['C', 'Eb', 'Gb'] },
  { chordName: "Sus2", notes: ['C', 'D', 'G'] },
  { chordName: "Sus4", notes: ['C', 'F', 'G'] },
  { chordName: "Aug", notes: ['C', 'E', 'G#'] },
  { chordName: "Maj6", notes: ['C', 'E', 'G', 'A'] },
  { chordName: "m6", notes: ['C', 'Eb', 'G', 'A'] },
  { chordName: "Dom7", notes: ['C', 'E', 'G', 'Bb'] },
  { chordName: "mMaj7", notes: ['C', 'Eb', 'G', 'B'] },
  { chordName: "7", notes: ['C', 'E', 'G', 'Bb'] },
  { chordName: "Dom9", notes: ['C', 'E', 'G', 'Bb', 'D'] },
  { chordName: "m7", notes: ['C', 'Eb', 'G', 'Bb'] },
  { chordName: "Maj9", notes: ['C', 'E', 'G', 'B', 'D'] },
  { chordName: "Min9", notes: ['C', 'Eb', 'G', 'Bb', 'D'] },
  { chordName: "7#5", notes: ['C', 'E', 'G#', 'Bb'] },
  { chordName: "7b5", notes: ['C', 'E', 'Gb', 'Bb'] },
  { chordName: "Maj6/9", notes: ['C', 'E', 'G', 'A', 'D'] },
  { chordName: "Min11", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F'] },
  { chordName: "Dom11", notes: ['C', 'E', 'G', 'Bb', 'D', 'F'] },
  { chordName: "Maj11", notes: ['C', 'E', 'G', 'B', 'D', 'F'] },
  { chordName: "Min13", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F', 'A'] },
  { chordName: "Dom13", notes: ['C', 'E', 'G', 'Bb', 'D', 'F', 'A'] },
  { chordName: "Maj13", notes: ['C', 'E', 'G', 'B', 'D', 'F', 'A'] },
];



export { notes, stackedIntervals, chordArr };

