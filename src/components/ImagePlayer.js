import React from 'react'
import './StylePlayer.css'; // Import custom styles from StylePlayer.css
// Functional component ImagePlayer that takes 'src' as a prop
function ImagePlayer(props) {
  return (
    <h3>{props.src}</h3> 
  )
}

export default ImagePlayer

