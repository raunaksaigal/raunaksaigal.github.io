import React from 'react'
import Landing from './components/Landing'
import Impact from './components/Impact'
import Scene from './components/Scene'
import Aboutme from './components/Aboutme'
import Stack from './components/Stack'

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Landing/>
      <Scene/>
      <Impact  />
      <Aboutme  />
      <Stack />
    </div>
    
  
  )
}

export default App