import React from 'react'
import Particles from 'react-tsparticles';
import particlesConfig from '../config/particlesConfig';
const ParticlesBG = () => {
    return (
        <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute'}}>
                <Particles 
                    params={particlesConfig} />
            </div>
        </div>
    )
  }
  export default ParticlesBG
  
    