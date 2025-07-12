import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsLetterBox from '../Components/NewsLetterBox'
import VariableProximity from '../Components/VariableProximity'
import Particles from '../Components/Particles'


const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Particle Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',  backgroundColor: '#000000', zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#cccccc']}
          particleCount={600}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content on Top */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsLetterBox />
        <VariableProximity />
        
        
      </div>
    </div>
  )
}

export default Home
