import { Component } from "react";
import { notes, intervals } from '../Constants/constants'

class Harmony extends Component {

  //find note id using sharp or flat
  getNoteNum = (note_name) => {
    note_name = note_name.slice(0, -1);
    let res = notes.find((note) => { return (note.name === note_name || note.alt === note_name) }); //indexOf ? //|| note.alt === note_name
    if (res) return res.id;
  }

  sortNoteLetter(notesInput, note_name) {
    const updatedNotesInput = [...notesInput, note_name];
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


  //Type comparison magic
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

    if (userIntervals.length === 0) return { name: chordName, intervals: userIntervals }

    // Cannot convert undefined or null to object
    Object.keys(intervals[parseInt(input.length)]).forEach((key) => {

      if (this.arrayEquals(intervals[parseInt(input.length)][key], userIntervals)) {
        chordName = input[0] + key;
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
