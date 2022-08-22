import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConfig from '../config/particlesConfig';

const ParticlesBG = () => {
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
            <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
                <div style={{ position: 'absolute'}}>
                    <Particles 
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: "0",
                            left: "0"
                        }}
                        params={particlesConfig} />
                </div>
            </div>
        
    )
  }
  export default ParticlesBG
  
    