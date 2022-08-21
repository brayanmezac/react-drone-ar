import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="header-image"
          />
          <img
            alt={props.colombiandevs_alt}
            src={props.colombiandevs_src}
            className="header-image1"
          />
          <img
            alt={props.Camper_alt}
            src={props.Camper_src}
            className="header-image2"
          />
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  colombiandevs_alt: 'image',
  colombiandevs_src: '/playground_assets/logo-dc.png',
  Camper_src: '/playground_assets/logo-camper.png',
  image_alt: 'image',
  Camper_alt: 'image',
  image_src: '/playground_assets/logo-datarock.png',
  rootClassName: '',
}

Header.propTypes = {
  colombiandevs_alt: PropTypes.string,
  colombiandevs_src: PropTypes.string,
  Camper_src: PropTypes.string,
  image_alt: PropTypes.string,
  Camper_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
