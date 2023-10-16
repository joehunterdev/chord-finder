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


const chords = [
  { name: "Maj", notes: ['C', 'E', 'G'] },
  { name: "m", notes: ['C', 'Eb', 'G'] },
  { name: "Dim", notes: ['C', 'Eb', 'Gb'] },
  { name: "Sus2", notes: ['C', 'D', 'G'] },
  { name: "Sus4", notes: ['C', 'F', 'G'] },
  { name: "Aug", notes: ['C', 'E', 'G#'] },
  { name: "Maj6", notes: ['C', 'E', 'G', 'A'] },
  { name: "m6", notes: ['C', 'Eb', 'G', 'A'] },
  { name: "Dom7", notes: ['C', 'E', 'G', 'Bb'] },
  { name: "mMaj7", notes: ['C', 'Eb', 'G', 'B'] },
  { name: "7", notes: ['C', 'E', 'G', 'Bb'] },
  { name: "Dom9", notes: ['C', 'E', 'G', 'Bb', 'D'] },
  { name: "m7", notes: ['C', 'Eb', 'G', 'Bb'] },
  { name: "Maj9", notes: ['C', 'E', 'G', 'B', 'D'] },
  { name: "Min9", notes: ['C', 'Eb', 'G', 'Bb', 'D'] },
  { name: "7#5", notes: ['C', 'E', 'G#', 'Bb'] },
  { name: "7b5", notes: ['C', 'E', 'Gb', 'Bb'] },
  { name: "Maj6/9", notes: ['C', 'E', 'G', 'A', 'D'] },
  { name: "Min11", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F'] },
  { name: "Dom11", notes: ['C', 'E', 'G', 'Bb', 'D', 'F'] },
  { name: "Maj11", notes: ['C', 'E', 'G', 'B', 'D', 'F'] },
  { name: "Min13", notes: ['C', 'Eb', 'G', 'Bb', 'D', 'F', 'A'] },
  { name: "Dom13", notes: ['C', 'E', 'G', 'Bb', 'D', 'F', 'A'] },
  { name: "Maj13", notes: ['C', 'E', 'G', 'B', 'D', 'F', 'A'] },
];



export { notes, intervals, chords };

