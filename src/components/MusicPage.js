import React, { useState, useEffect, createRef } from 'react';
import Comp from './Comp';
import loadscript from 'load-script'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function MusicPage(props) {

  // SoundCloud widget API
  //  https://developers.soundcloud.com/docs/api/html5-widget
  // state

  // used to communicate between SC widget and React
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlistIndex, setPlaylistIndex] = useState(0)
  
  // populated once SoundCloud Widget API is loaded and initialized
  const [player, setPlayer] = useState(false)

  // ref for iframe element - https://reactjs.org/docs/refs-and-the-dom.html
  const iframeRef = createRef()
 
  useEffect(() => {
    loadscript('https://w.soundcloud.com/player/api.js', () => {
      
      // initialize player and store reference in state

      const player = window.SC.Widget(iframeRef.current)
      setPlayer( player )
    
      const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = window.SC.Widget.Events

      // NOTE: closures created - cannot access react state or props from within and SC callback functions!!

      player.bind( PLAY, () => {
        // update state to playing
        setIsPlaying(true)

        // check to see if song has changed - if so update state with next index
        player.getCurrentSoundIndex( (playerPlaylistIndex) => {            
          setPlaylistIndex(playerPlaylistIndex)
        })
    
      })

      player.bind( PAUSE, () => {
        // update state if player has paused - must double check isPaused since false positives
        player.isPaused( (playerIsPaused) => {
          if (playerIsPaused) setIsPlaying(false)
        })
      })

    })

  }, [])

  useEffect(() => {
    
    if (!player) return 

    player.isPaused( (playerIsPaused) => {
      if (isPlaying && playerIsPaused) {
        player.play()
      } else if (!isPlaying && !playerIsPaused) {
        player.pause()
      }
    })
    
  },[isPlaying])

  useEffect(() => {
    
    if (!player) return 
    player.getCurrentSoundIndex( (playerPlaylistIndex) => {            
      if (playerPlaylistIndex !== playlistIndex) player.skip(playlistIndex)
    })
    
  },[playlistIndex])


  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const changePlaylistIndex = (skipForward = true) => {

    // get list of songs from SC widget
    player.getSounds( (playerSongList) => {      

      let nextIndex = (skipForward) ? playlistIndex + 1 : playlistIndex - 1

      if (nextIndex < 0) nextIndex = 0
      else if (nextIndex >= playerSongList.length) nextIndex = playerSongList.length - 1

      setPlaylistIndex(nextIndex)
    })

  }
  return (
    <div>
      <Comp title={props.title} subtitle={props.subtitle} text={props.text}/> 
      <div className="soundcloud-section">
      <Row className="sc-widget">
      <Col className="justify-content-center py-5 soundcloud">
        <h3>Most recent releases</h3>
        <iframe ref={iframeRef} id="sound-cloud-player" style={{border: 'none', height: 314, width: 400}} scrolling="no" allow="autoplay" 
          src={ "https://w.soundcloud.com/player/?url=https://soundcloud.com/quinq" }>
        </iframe>
    
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={ () => changePlaylistIndex(false) }>{'<'}</button>
        <button className="btn btn-secondary" onClick={ togglePlayback }>{ (isPlaying) ? 'Pause' : 'Play' }</button>
        <button className="btn btn-secondary" onClick={ () => changePlaylistIndex(true) }>{'>'}</button>
      </div>
      
      </Col>
    </Row>
    <div className="justify-content-center music-description" md={8} sm={12}> 
      <h3> Background </h3>
      <p> I started playing a few instruments such as tuba, guitar, and piano at a young age. It wasn't until December 2019 that I 
        decided to start recording my own songs. At this point, I had been making songs for years, but was too afraid to share with the world. I realized that 
        the worst that could happen is that people don't like it and that's ok because music creation should be for ~you~. 
      </p>
      <p> 
        These days I have been making music here and there in my makeshift bedroom studio using Logic, the Scarlett 2i2 interface, a small midi keyboard, and a telecaster. 
      </p>
    </div>
    </div>
  </div>
  );
}

export default MusicPage;