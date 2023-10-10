import React, { useContext, useState } from 'react';
import styles from './PianoKey.module.css';
import cx from 'classnames';
// import './PianoKey.css';
import { NotesDispatchContext } from "../../store/notes-context";

const PianoKey = ({ id, name, alt }) => {

    const [active, setActive] = useState(false);
    const dispatch = useContext(NotesDispatchContext);
    
    // const formatAltName = () => {
    //   return  name.replace('#',"-sharp").replace('b',"-flat").toLowerCase()
    // }

    // const generateClass = () => {
    //     let activeClass = active ?  " active" :  " ";
    //     return alt ? "black " + formatAltName() + activeClass  : "white " + formatAltName()   + activeClass;
    //  }



    const generateClassName = () => {
        //strings
        // let noteName =  name.replace('#',"-sharp").replace('b',"-flat").toLowerCase()
        // let activeClass = active ?  " active" :  " ";
        // return alt ? "black " + noteName + activeClass  : "white " + noteName   + activeClass;

        let noteName = name.replace('#', "-sharp").replace('b', "-flat").toLowerCase()
        let activeClass = active ? styles.active : '';
        return alt ? cx(styles.black, activeClass, styles[noteName]) : cx(styles.white, activeClass, styles[noteName]);

    }


    const keyPressHandler = (event) => {
        //Todo: levarage prev state
        // setActive(true)
        setActive((prevActive) => !prevActive)
        ! active ? dispatch({type:'keyDown',id: id,name: name}) : dispatch({type:'keyUp',id: id,name: name}) 
    }
    //    return (<li onClick={keyPressHandler} className={alt ? cx(styles.black,styles[formatAltName()],styles.pressed) :cx(styles.white,styles[formatAltName()],styles.pressed) }>{active && "active"}</li>)
    //    return (<li onClick={keyPressHandler} className="black c-sharp pressed">{active && "active"}</li>)
    return (<li onClick={keyPressHandler} className={generateClassName()}></li>)

}

export default PianoKey

