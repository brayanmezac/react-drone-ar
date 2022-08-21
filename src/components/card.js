import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className="card-card">
      <div className="card-container">
        <h1 className="card-text">{props.Titulo}</h1>
        <div className="card-container1">
          <model-viewer 
            bounds="tight" 
            enable-pan src={props.Modelo} 
            ar 
            ar-modes="webxr scene-viewer quick-look" 
            shadow-intensity="0.97" 
            shadow-softness="0.8" 
            exposure="0.65"
            background-color
            preload
            reveal-when-loaded
            disable-zoom
            camera-orbit="calc(40rad * env(window-scroll-y)) 90deg"
            environment-image="neutral">

          </model-viewer>
        </div>
        <span className="card-text1">{props.Descripcion}</span>
      </div>
    </div>
    
  )
}

Card.defaultProps = {
  Titulo: 'Drone',
  Modelo: '"/playground_assets/models/dron1.glb"',
  Descripcion: 'descripcion',
}

Card.propTypes = {
  Titulo: PropTypes.string,
  Modelo: PropTypes.string,
  Descripcion: PropTypes.string,
}

export default Card
