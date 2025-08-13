
import './App.css'


import JemisseCta from './section/cta';
import CardUnilib from './section/CardProjectos/UniLib';
import CardFilmes from './section/CardProjectos/WhatMovie';
import Sobre from './section/sobre';
import Habilidades from './section/habilidades';
import ColorChangingFooter from './section/Footer';



function App() {
  return (
          <>
            <JemisseCta />
            <CardUnilib />
            <CardFilmes />
            <Sobre />
            <Habilidades />
            <ColorChangingFooter />
          </>
  );
}

export default App;