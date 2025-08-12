
import './App.css'

import JemisseCta from './section/cta'
import ColorChangingFooter from './section/Footer'

import Habilidades from './section/habilidades'
import CardUnilib from './section/CardProjectos/UniLib'
import Sobre from './section/sobre'
import CardFilmes from './section/CardProjectos/WhatMovie'



function App() {

  return (

    <>
      <JemisseCta />
      <CardUnilib />
      <CardFilmes/>
      <Sobre/>
      <Habilidades/>
      <ColorChangingFooter />
    </>
  )
}

export default App
