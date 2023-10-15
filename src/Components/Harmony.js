import { Component } from "react";
import { notes, stackedIntervals, chordArr } from '../Constants/constants'
import ChordName from "./ChordName";

class Harmony extends Component {

  getNoteNum = (note_name) => {
    //find note id using sharp or flat
    let res = notes.find((note) => { return (note.name === note_name || note.alt === note_name) }); //indexOf ? //|| note.alt === note_name
    if (res) return res.id;
  }


  //Get interval between two notes
  getInterval(input) {
    let root = this.getNoteNum(String(input[0]));
    let second = this.getNoteNum(String(input[1]));
    return Math.abs(root - second);
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


  //Get chord name from a bunch of intervals
  // getChord(input) {

  //   let input_intervals = [];
  //   let res = [];
  //   let chord_name = "";

  //   switch (input.length) {

  //     case 1:

  //       chord_name = input[0];

  //     case 2:
  //       chord_name = Object.keys(intervals.two).find(
  //         (key) => intervals.two[key] === this.getInterval([input[0], input[1]])
  //       );

  //       // if (this.state.isMounted) {
  //       //   this.setState({ intervals: input_intervals });
  //       // }

  //       return { name: chord_name, intervals: input_intervals };

  //     case 3:

  //       input_intervals = [
  //         this.getInterval([input[0], input[1]]),
  //         this.getInterval([input[0], input[2]]),
  //       ];

  //       res = Object.keys(intervals.three).forEach((key, val) => {
  //         if (
  //           this.arrayEquals(intervals.three[key], input_intervals) === true
  //         ) {
  //           chord_name = input[0] + " " + key;
  //         }
  //       });


  //       return { name: chord_name, intervals: input_intervals };

  //     case 4:
  //       //Todo: this doesnt look correct but works
  //       // get from note 1 to note 2, note 1 to note 3
  //       input_intervals = [
  //         this.getInterval([input[0], input[1]]),
  //         this.getInterval([input[0], input[2]]),
  //         this.getInterval([input[0], input[3]]),
  //       ];
  //       res = Object.keys(intervals.four).forEach((key, val) => {
  //         if (
  //           this.arrayEquals(intervals.four[key], input_intervals) === true
  //         ) {
  //           chord_name = input[0] + " " + key;
  //         }
  //       });


  //       return { name: chord_name, intervals: input_intervals };

  //     case 5:

  //       input_intervals = [
  //         this.getInterval([input[0], input[1]]),
  //         this.getInterval([input[0], input[2]]),
  //         this.getInterval([input[0], input[3]]),
  //         this.getInterval([input[0], input[4]])
  //       ];
  //       res = Object.keys(intervals.five).forEach((key, val) => {
  //         if (
  //           this.arrayEquals(intervals.five[key], input_intervals) === true
  //         ) {
  //           chord_name = input[0] + " " + key;
  //         }
  //       });


  //       return { name: chord_name, intervals: input_intervals };

  //     case 6:

  //       input_intervals = [
  //         this.getInterval([input[0], input[1]]),
  //         this.getInterval([input[0], input[2]]),
  //         this.getInterval([input[0], input[3]]),
  //         this.getInterval([input[0], input[4]]),
  //         this.getInterval([input[0], input[5]])
  //       ];

  //       res = Object.keys(intervals.six).forEach((key, val) => {
  //         if (
  //           this.arrayEquals(intervals.six[key], input_intervals) === true
  //         ) {
  //           chord_name = input[0] + " " + key;
  //         }
  //       });


  //       return { name: chord_name, intervals: input_intervals };

  //     case 7:

  //       input_intervals = [
  //         this.getInterval([input[0], input[1]]),
  //         this.getInterval([input[0], input[2]]),
  //         this.getInterval([input[0], input[3]]),
  //         this.getInterval([input[0], input[4]]),
  //         this.getInterval([input[0], input[5]]),
  //         this.getInterval([input[0], input[6]])
  //       ];
  //       res = Object.keys(intervals.seven).forEach((key, val) => {
  //         if (
  //           this.arrayEquals(intervals.seven[key], input_intervals) === true
  //         ) {
  //           chord_name = input[0] + " " + key;
  //         }
  //       });

  //       return { name: chord_name, intervals: input_intervals };

  //     default:
  //       return 'no chord found'
  //   }

  // }



  getChord(input) {

    let userIntervals = [];
    let chordName = "";

    for (let i = 0; i < input.length - 1; i++) {

      userIntervals.push(this.getInterval([input[i], input[i + 1]]));

    }

    if(userIntervals.length === 0) return 'no chord found'

    let stackedInterval2 = stackedIntervals[parseInt(input.length)];
 
    Object.keys(stackedInterval2).forEach((key, val) => {     

      if (this.arrayEquals(stackedInterval2[key], userIntervals)) {
        chordName = key;
      }
    } );
      
    return { name: chordName, intervals: userIntervals };

  }


}
export default Harmony;
