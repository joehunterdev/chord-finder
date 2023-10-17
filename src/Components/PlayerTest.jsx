import React, { Component, Fragment } from 'react'
import ReactHowler from 'react-howler'
import soundUrl from '../audio/Piano/key01.mp3'

class PlayerTest extends Component {
  // This sound file may not work due to cross-origin setting
  render () {
    return (
      <Fragment>
        <h1>React Howler</h1>
      <ReactHowler
        src={soundUrl}
        playing={true}
      />
      </Fragment>
    )
  }
}

export default PlayerTest