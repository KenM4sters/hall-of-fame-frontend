import React from 'react'
import ReactDOM from 'react-dom/client'
import R3f from './r3f.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <R3f />
  </BrowserRouter>
)
