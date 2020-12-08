import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import Logowhite from './Logowhite'
import SingleTikTokSidebar from './SingleTikTokSidebar'
import SingleTikTokFooter from './SingleTikTokFooter'

const SingleTikTokStyle = styled.div`
  /* snap begins */
  width: 100%;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  /* snap ends */
  .video-js {
    //background: var(--blue);
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    video {
      object-fit: cover;
    }
    .vjs-big-play-button {
      display: none;
    }
  }
`

// eslint-disable-next-line import/prefer-default-export
const usePlayer = ({ tiktok, controls, autoplay }) => {
  const options = {
    autoplay: false,
    controls: true,
    preload: 'auto',
    loop: true,
    html5: {
      vhs: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  }
  const src = tiktok.videoUrl
  const videoRef = useRef(null)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      sources: [src],
    })
    setPlayer(vjsPlayer)

    return () => {
      if (player !== null) {
        player.dispose()
      }
    }
  }, [])
  useEffect(() => {
    if (player !== null) {
      player.src({ src })
    }
  }, [src])

  return videoRef
}

const VideoPlayer = ({ tiktok, controls, autoplay }) => {
  const playerRef = usePlayer({ tiktok, controls, autoplay })

  return (
    <SingleTikTokStyle id={tiktok.tiktokID}>
      <Logowhite />
      <div data-vjs-player>
        <video ref={playerRef} className="video-js" />
      </div>
      <SingleTikTokSidebar tiktok={tiktok} />
      <SingleTikTokFooter tiktok={tiktok} />
    </SingleTikTokStyle>
  )
}

VideoPlayer.propTypes = {
  src: PropTypes.object,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
}

VideoPlayer.defaultProps = {
  controls: true,
  autoplay: false,
}

export default VideoPlayer
