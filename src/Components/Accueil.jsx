import React from 'react'
import video from "../Video/video.mp4"
import './Accueil.css'

export default function Accueil() {
  return (
    <video id='video' src={video} autoPlay loop muted />
  )
}
