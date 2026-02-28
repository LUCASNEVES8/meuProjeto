import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Header } from '../components/Header/Header.jsx'
import { Sobre } from '../components/Sobre/Sobre.jsx'
import { Contato } from '../components/Contato/Contato.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Sobre categoria="sobreMim"/>
    <Contato categoria="contato"/>
  </StrictMode>,
)
