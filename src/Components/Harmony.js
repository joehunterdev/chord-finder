import { Component } from "react";
import { notes, intervals } from '../Constants/constants'

class Harmony extends Component {

  //find note id using sharp or fla
  getNoteNum = (note_name) => {
    let res = notes.find((note) => { return (note.name === note_name || note.alt === note_name) }); //indexOf ? //|| note.alt === note_name
    if (res) return res.id;
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

  getDiatonicIntervals(input) {
    //diatonic intervals


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

  //get chord name and numerical intervals
  getChord(input) {

    let chordName = "no chord found";
    let userIntervals = this.getIntervals(input);

    if (userIntervals.length === 0) return chordName

    // Cannot convert undefined or null to object

    Object.keys(intervals[parseInt(input.length)]).forEach((key, val) => {

      if (this.arrayEquals(intervals[parseInt(input.length)][key], userIntervals)) {
        chordName = input[0] + key;
      }

    });


    return { name: chordName, intervals: userIntervals };

  }



}
export default Harmony;
