import {Component} from "react";
import {notes, intervals} from "../store/constants" ;

//High order component
class Music extends Component {
   
  //TestProps = (props) => {return props}
  getNoteNum = (note_name) => {
    // note_name = "C#";
   // let res = notes.find(({note}) => name === note_name ); //indexOf ? //|| note.alt === note_name
    let res = notes.find((note) => { return ( note.name === note_name || note.alt === note_name )  }  ); //indexOf ? //|| note.alt === note_name
    console.log(res);
    return res.id; // return as object ?
  };

  //Get interval between two notes
  getInterval(input) {
    let root = this.getNoteNum(String(input[0]));
    let second = this.getNoteNum(String(input[1]));
    return Math.abs(root - second);
  }

  arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  //Get chord name from a bunch of notes

  getChord(input) {
    let input_intervals = [];
    let res = [];
    let chord_name = "";
   if (Array.isArray(input)) {
     switch (input.length) {
       case 1:
       return input[0];
 
       case 2:
         chord_name = Object.keys(intervals.two).find(
           (key) => intervals.two[key] === this.getInterval([input[0], input[1]])
         );
        //  console.log("case 2")
        //  console.log(chord_name);
         return chord_name;
 
       case 3:
         //Triad: will compose of two intervals
         // get from note 1 to note 2, note 1 to note 3
         input_intervals = [
           this.getInterval([input[0], input[1]]),
           this.getInterval([input[0], input[2]]),
         ];
         //  console.log("input intervals: " + input_intervals)
         res = Object.keys(intervals.triad).forEach((key, val) => {
           if (
             this.arrayEquals(intervals.triad[key], input_intervals) === true
           ) {
             chord_name = input[0] + " " + key;
           }
         });
        //  console.log("case 3")
        //  console.log(input_intervals);
         return chord_name;
 
       case 4:
         //Tetrad: will compose of two intervals
         // get from note 1 to note 2, note 1 to note 3
         input_intervals = [
           this.getInterval([input[0], input[1]]),
           this.getInterval([input[0], input[2]]),
           this.getInterval([input[0], input[3]]),
         ];
          res = Object.keys(intervals.tetrad).forEach((key, val) => {
           if (
             this.arrayEquals(intervals.tetrad[key], input_intervals) === true
           ) {
             chord_name = input[0] + " " + key;
           }
         });
        //  console.log("case 4")
        //  console.log(input_intervals);
         return chord_name;
 
       case 5:
         //Tetrad: will compose of two intervals
         // get from note 1 to note 2, note 1 to note 3
         input_intervals = [
           this.getInterval([input[0], input[1]]),
           this.getInterval([input[0], input[2]]),
           this.getInterval([input[0], input[3]]),
           this.getInterval([input[0], input[4]]),
         ];
          res = Object.keys(intervals.five).forEach((key, val) => {
           if (
             this.arrayEquals(intervals.tetrad[key], input_intervals) === true
           ) {
             chord_name = input[0] + " " + key;
           }
         });
         console.log("case 5")
         console.log(input_intervals);
         return chord_name;
         case 6:
          return 'no chord found'
          case 7:
          return 'no intervals found'
 
       default:
         return 'no chord found'
     }
   } else {
     
    return 'no chord found'

   }
  }

  // render() {
  //   return (
  //     <div>
  //       <ul>
  //         <li>Root: {this.getNoteNum("C")}</li>
  //         <li>1st Interval: {this.getInterval(["C", "E"])}</li>
  //         <li>Dyad Name: {this.getChord(["C", "D#"])}</li>
  //         <li>Triad Name: {this.getChord(["C", "D#", "G"])}</li>
  //         <li>Tetrad Name: {this.getChord(["C", "D#", "G", "B"])}</li>

  //         {/* <li>Chord Name: {this.getChord(['C','D','G'])}</li> */}
  //         {/* <li><TestProps notes={['C','D','G']} /></li> */}
  //       </ul>
  //     </div>
  //   );
  // }
}
export default Music;
