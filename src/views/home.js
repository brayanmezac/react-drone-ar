import React from 'react'

import { Helmet } from 'react-helmet'
import ParticlesBG from '../components/particlesBG'
import Header from '../components/header'
import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
      <div className="home-container">
        <ParticlesBG/>
        <Helmet>
          <title>ColombianDevs</title>
          <meta
            name="description"
            content="Realidad Aumentada(AR) para mejorar los procesos de aprendizaje con drones.\nSomos futuro e innovación 100% colombiana."
          />
          <meta property="og:title" content="ColombianDevs" />
          <meta
            property="og:description"
            content="Realidad Aumentada(AR) para mejorar los procesos de aprendizaje con drones.\nSomos futuro e innovación 100% colombiana."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3a254bed-6c5d-4e84-bdef-4a3b348886e0/26117468-62e4-47e8-9f98-3b3a49cb3864?org_if_sml=1"
          />
        </Helmet>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="home-card">
          <span className="home-text">
            <span>
              Realidad Aumentada(AR) para mejorar los procesos de aprendizaje con
              drones.
            </span>
            <br className="lead"></br>
            <span>Somos futuro e innovación 100% colombiana.</span>
          </span>
          <div className="home-container1">
            <img
              alt="image"
              src="/playground_assets/logo_alcaldia_de_medellin-200h.png"
              className="home-image"
            />
          </div>
        </div>
        <div className="home-container2">
          <Card
            Titulo="DJI mini 2"
            Modelo="/playground_assets/models/dron1.glb"
            Descripcion="Drone de 249 gramos para operación recreativa o profesional."
          ></Card>
          <Card
            Titulo="Octocoptero"
            Modelo="/playground_assets/models/dron2.glb"
            Descripcion="Drone de carga para trabajos industriales, Diseño propio."
          ></Card>
          <Card
            Titulo="Drone FPV"
            Modelo="/playground_assets/models/dron3.glb"
            Descripcion="Drone tipo FPV es usado en vuelos por carretera o que requieran velocidad."
          ></Card>
        </div>
      </div>
  )
}

export default Home
