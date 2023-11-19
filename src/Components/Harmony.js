import { Component } from "react";
import { notes, intervals, scales } from '../Constants/constants'

class Harmony extends Component {


  //find note id using sharp or flat
  getNoteNum = (note_name) => {
    note_name = note_name.slice(0, -1);
    let res = notes.find((note) => { return (note.name === note_name || note.alt === note_name) }); //indexOf ? //|| note.alt === note_name
    if (res) return res.id;
  }

  sortNoteLetter(notesInput, note_name) {
    const updatedNotesInput = [...notesInput, note_name];
    console.log(updatedNotesInput);

    return updatedNotesInput.sort((a, b) => {
      const aIndex = notes.findIndex((note) => note.name === a);
      const bIndex = notes.findIndex((note) => note.name === b);

      return aIndex - bIndex;
    });


  }

  //TODO: Just separate by pitch remove responsibility of adding to array
  sortPitch(notesInput, note_name) {

    let sortedNotes = [];

    for (let octave = 4; octave <= 5; octave++) {
      if (parseInt(note_name.slice(-1)) === octave) {
        console.log(note_name.slice(0, -1))
        sortedNotes = this.sortNoteLetter(notesInput, note_name);
        break;
      }
    }

    return [...sortedNotes];
  }

  sortOctave(notesInput) {
    let notesByOctave = notesInput.reduce((acc, note) => {
      let octave = note.slice(-1);
      if (!acc[octave]) {
        acc[octave] = [];
      }
      acc[octave].push(note);
      return acc;
    }, {});

    return notesByOctave;
  }

  //Get interval between two notes
  getInterval(input) {

    let first = this.getNoteNum(String(input[0]));
    let second = this.getNoteNum(String(input[1]));

    if (second < first) {
      second += 12;
    }

    return Math.abs(first - second);
  }


  //get stacked intervals
  getIntervals(input) {

    let userIntervals = [];
    for (let i = 0; i < input.length - 1; i++) {
      userIntervals.push(this.getInterval([input[i], input[i + 1]]));
    }
    return userIntervals
  }

  getIntervalNames(input) {

    const intervalNames = [];

    input.forEach((val) => {
      const name = Object.keys(intervals[2]).find((key) => {
        return intervals[2][key] === val;
      });
      if (name) {
        intervalNames.push(name);
      }
    });
    return intervalNames;
  }


  getDegrees(notesInput, scaleNotes) {
    return notesInput.map(note => {
      let naturalNote = note.slice(0, -1);
      let index = scaleNotes.indexOf(naturalNote);

      if (index === -1) {
        let noteIndex = notes.findIndex(n => n.name === naturalNote);

        // Try going down a semitone
        let downNote = notes[(noteIndex - 1 + notes.length) % notes.length].name;
        index = scaleNotes.indexOf(downNote);
        if (index !== -1) {
          let degree = index + 1;
          return '♭' + degree;
        }
        // // Try going up a semitone
        // let noteIndex = notes.findIndex(n => n.name === naturalNote);
        // let upNote = notes[(noteIndex + 1) % notes.length].name;
        // index = scaleNotes.indexOf(upNote);
        // if (index !== -1) {
        //   let degree = index + 1;
        //   return degree + '♯';
        // }

        throw new Error(`${note} is not in the scale`);
      }
      // Degrees are traditionally 1-indexed, so add 1 to the array index
      let degree = index + 1;
      return degree;
    });
  }

  detectScaleFromFirstInterval(input) {

    if (input.length < 2) {
      return false;
    }

    let root = input[0].slice(0, -1);

    // Get the interval of the first two notes
    const firstInterval = this.getInterval(input);

    // Be aware that this will only work for diatonic scale maj/min
    //HACK: Restructure data for this ?
    let intervalNames = this.getIntervalNames([firstInterval]);
    let name = intervalNames.length > 0 ? intervalNames[0].split(" ")[0].trim() : "major";

    //Fallback for wierd intervals
    if (name !== "major" && name !== "minor") {
      name = "major";
    }

    return { root: root, name: name, intervals: scales[name] }
  }

  //Get the scale from input
  getScaleNotes(input) {

    let root = input[0].slice(0, -1);

    // let scaleName = this.detectScale(input);
    const rootIndex = notes.findIndex(note => note.name === root || note.alt === root);
    if (rootIndex === -1) {
      throw new Error(`${root} is not a valid note`);
    }

    let intervalPattern = this.detectScaleFromFirstInterval(input).intervals;
    if (!intervalPattern) {
      throw new Error(`${scaleType} is not a valid scale type`);
    }

    //HACK: Were doing this twice for sure
    let currentIndex = rootIndex;
    let scale = [notes[currentIndex].name];

    intervalPattern.forEach(interval => {
      currentIndex = (currentIndex + interval) % notes.length;
      scale.push(notes[currentIndex].name);
    });

    return scale;
  }

  //Type comparison magic 
  //TODO: Move to utils
  arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  // invert input to nth degree
  invertInput(input, degree) {

    let invertedInput = input.slice(degree);
    invertedInput = invertedInput.concat(input.slice(0, degree));
    return invertedInput;

  }

  getChordInversion(input) {

    if (input.length < 2)

      for (let i = -2; i < input.length; i++) {
        if (i === 0) continue;
        let invertedInput = this.invertInput(input, i);
        let chord = this.getChord(invertedInput);
        if (chord.name !== "") {
          return {
            name: chord.name + " (" + Math
              .abs(i) + " inversion)", intervals: chord.intervals
          };
        }
      }

  }


  //get chord name and numerical intervals
  getChord(input) {

    let chordName = "";
    let userIntervals = this.getIntervals(input);

    //HACK: cant these just be checked in comp instead of here / or in constructor validate?
    if (userIntervals.length === 0) return { name: chordName, intervals: userIntervals }
    if (userIntervals.length === 1) { chordName = this.getIntervalNames(userIntervals); }

    Object.keys(intervals[parseInt(input.length)]).forEach((key) => {

      if (this.arrayEquals(intervals[parseInt(input.length)][key], userIntervals)) {
        let root = input[0].slice(0, -1);
        chordName = root + key;
      }

    });



    return { name: chordName, intervals: userIntervals };

  }


  // getChord(input) {
  //   const userIntervals = this.getIntervals(input);
  //   const chordName = Object.keys(intervals[parseInt(input.length)])
  //     .find(key => this.arrayEquals(intervals[parseInt(input.length)][key], userIntervals)) || '';
  //   return { name: chordName ? input[0] + chordName : '', intervals: userIntervals };
  // }


}
export default Harmony;
