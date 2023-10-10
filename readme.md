## Chord Finder

Rough Outline Output chord name output from virtual piano keys. With a focus on ui ux display across multiple devices,Specifically mobile 

### V1
-  Use intervals to determin chords
-  Use note aliases
-  ~globals~ hmm try declaring in components or use Constants folder
- [x] getinterval
- [x] getNote
- [x] getChord
- [x] Setup repo
  
-  uses an object two: [5,5] output C fifth in case to define chord type (major, minor, augmented, diminished, 7th, Triad, 9th, sus) 
  
-  'Object.freeze' after its first use to ensure its immutable in your init scenario.

---

### V2

- [x]  Migrate to React Vite
  -  Investigate react-app to vite
- [] Setup proper Tests for chord names
- [] Recursive getChord 
- [] Fix redundant code in css ` .black:active { `
- [] `ol, ul {    /* padding-left: 2rem; */}`
- [x] Output no chord found

- Features:
   - Piano GUI:
     - [x] Do active notes
     - [x] markup css
     - [X] 12 Note input
     - classNames  helper 
       - [x] Black note
       - [x] White note
       - [x] friendly note name in class not C#

   - Piano Component Controls: 
     - Note click handler
       - [x] key down long press state (useEffect ?)
       - [x] key up
       - [] Max Keys
       - [] Key layout 
       - [x] Fix key press logic on and off

   - ChordName Components
     - [ ] Jest Test and config for all chord types
    
   - Context:
     - [x] Add note to noteInput
     - [x] Remove note from noteInput

   - Music Theroy HOC: 
     - Harmony 
       - [x] Look for alts to derive note id the "flat" Eb prblem. 
       - ~~ [] Change this to functional component ?? ~~
       - [] Needs extra octave
       - [] iradicate the switch
       - [] Add inversion
       
   - Reproduce audio:
       - [] Inve

- Fixes
     - [x] Simplify array handling from constants
     - [ ] Fix design layout to something 
     - [x] Fix piano padding layout
     - [x] Decide on Component Structure & naming
     - [x] Install Bootstrap
     - [x] Install classnames
     - [ ] Handling repo files for deployment directly from clone
     - [x] UI Color (make this more highlighted on black key) 
     - [x] Fix padding default issue @normalize using import and priority swith
     - [] Chord name needs to run every time a note is added or removed

- Deployment 
  - Build for prod
  - Github actions may be required

Component Tree:

```
    App.js
     -> Instrument
        -> Piano
            -> Keys
                onClick handlers
                state setNotes
                -> Key 
```

Analysis:
- [] Can getChord switch statement be imporved ?
  - Recursion + Typescript ?
- Where to handle chord name ? In context ? or directly in component 
- How we can we optimize events and state updates
- State and leveraging this in Harmony component
---

### V3
Requirements:
   - Play sound
   - Chord name to key output
   - Scale display
   - Key Select
   - refactor to vite or next app
   - reproduce a chord progression visualy
   - Change active color
   - Optimization
   - [] Handle inversion
-  [] Test cases
-  [] Docs / Diagram

--- 


### General Notes

#### Music Theory

    Semitones	Interval	Abbreviation	Example

    0	Unison	PP or P1	C – C
    1	Minor 2nd	m2	C – Db
    2	Major 2nd	M2	C – D
    3	Augmented 2nd	A2	C – D#
    3	Minor 3rd	m3	C – Eb
    4	Major 3rd	M3	C – E
    4	Diminished 4th	D4	C – Fb
    5	Perfect 4th	P4	C – F
    6	Augmented 4th	A4	C – F#
    6	Diminished 5th	D5	C – Gb
    7	Perfect 5th	P5	C – G
    8	Augmented 5th	A5	C – G#
    8	Minor 6th	m6	C – Ab
    9	Major 6th	M6	C – A

    The 18 chord formulas: major, sus2, sus4, 5, maj7, maj6, minor, augmented, diminished, minor7, minor7♭5, dim7, dom7, minor7#5, maj7#5, maj7♭5, dom7#5, dom7♭5.

    351 possible chord variations
the sharp (♯), the flat (♭) and the natural (♮).

  Scenario:
    - C Eb e () app should try to find the chord name by swithing bass note

    This chord is Eb6sus2\C (Borader chord finding by switching bass note)
    
    consonants:     
    pleasing or  sound. 
    dissonant sound:
    jarring or

#### Programmer Notes
-  [Enums !] https://www.sohamkamani.com/javascript/enums/?utm_content=cmp-true)
-  https://codepen.io/zastrow/pen/kxdYdk - Philip Zastrow @zastrow