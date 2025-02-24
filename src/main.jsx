import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from '../src/styles/Global'
import Home from '../src/pages/Home'
import Carousel from './components/Carousel'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <GlobalStyle/>
    <Carousel/>
  </StrictMode>,
)
