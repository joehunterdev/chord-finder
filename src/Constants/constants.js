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
    "perfect fourth": 5,
    "dimished/augmented": 6,
    "perfect 5th": 7,
    "minor 6th": 8,
    "major 6th": 9,
    "minor 7th": 10,
    "major 7th": 11
  },
  three: {
    "Suspended 2": [2, 7],
    "Suspended 4": [4, 5],
    "Minor (triad)": [3, 7],
    "Major (triad)": [4, 7], // this means intervals
    "Dimished": [3, 6],
    "Augmented": [4, 8]
  },
  four: {
    "2": [2, 4, 7],
    "6Sus2": [2, 7, 9],
    "Minor 7th": [3, 7, 1],
    "Minor 6th ": [3, 7, 9],
    "Dimnished 7th": [3, 6, 9],
    "Minor-Major 7th": [3, 7, 11],
    "m7b5 (Minor 7th flat 5th)": [3, 6, 10],
    "Major 6th": [4, 7, 9],
    "7": [4, 7, 10],
    "Major 7th ": [4, 7, 11],
    "Dominant 7th": [4, 7, 1],
    "7b5 (7th flat 5th)": [4, 6, 10],
    "7#5 (7th sharp 5th)": [4, 8, 10]
  },
  five: {
    "Major 6-9th": [4, 7, 9, 2],
    "Major 9th": [4, 7, 11, 2],
    "Minor 9th": [3, 7, 1, 2],
    "Dominant 9th": [4, 7, 1, 2],
  },
  six: {
    "Major 11th": [4, 7, 11, 2, 5],
    "Minor 11th": [3, 7, 1, 2, 5],
    "Dominant 11": [4, 7, 1, 2, 5],
    "Major 13th": [3, 7, 1, 2, 5],
    "Minor 13th": [3, 7, 1, 2, 5]
  },
  seven: {
    "Major 13th": [4, 7, 11, 2, 5, 9],
    "Minor 13th": [3, 7, 1, 2, 5, 9],
    "Dominant 13th": [4, 7, 1, 2, 5, 9],
  },
};


const chordArr = [
  { chordName: "Major (triad)", notes: ['C', 'E', 'G'] },
  { chordName: "Minor (triad)", notes: ['C', 'Eb', 'G'] },
  { chordName: "Diminished", notes: ['C', 'Eb', 'Gb'] },
  { chordName: "Suspended 2", notes: ['C', 'D', 'G'] },
  { chordName: "Augmented", notes: ['C', 'E', 'G#'] },
  { chordName: "Major 6th ", notes: ['C', 'E', 'G', 'A'] },
  { chordName: "Minor 6th", notes: ['C', 'Eb', 'G', 'A'] },
  { chordName: "Dominant 7th", notes: ['C', 'E', 'G', 'Bb'] },
  { chordName: "Minor Major 7th ", notes: ['C', 'Eb', 'G', 'B'] },
  { chordName: "Major 7th ", notes: ['C', 'E', 'G', 'B'] },
  { chordName: "Dominant 9th", notes: ['C', 'E', 'G', 'Bb', 'D'] },
  { chordName: "Minor 7th ", notes: ['C', 'Eb', 'G', 'Bb'] },
  { chordName: "Major 9th ", notes: ['C', 'E', 'G', 'B', 'D'] },
  { chordName: "Minor 9th ", notes: ['C', 'Eb', 'G', 'Bb', 'D'] },
  { chordName: "7#5 (7th sharp 5th)", notes: [ 'C', 'E', 'G#', 'Bb' ] },
  { chordName: "7b5 (7th flat 5th)", notes: [ 'C', 'E', 'Gb', 'Bb' ] },
  { chordName: "Major 6/9 ", notes: ['C', 'E', 'G', 'A', 'D'] },
  { chordName: "Minor 11th ", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F'] },
  { chordName: "Dominant 11", notes: ['C', 'E', 'G', 'Bb', 'D', 'F'] },
  { chordName: "Major 11th ", notes: ['C', 'E', 'G', 'B', 'D', 'F'] },
  { chordName: "Minor 13th ", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F', 'A'] },
  { chordName: "Dominant 13th", notes: ['C', 'E', 'G', 'Bb', 'D', 'F', 'A'] },
  { chordName: "Major 13th ", notes: ['C', 'E', 'G', 'B', 'D', 'F', 'A'] },
];



export { notes, intervals, chordArr };

