import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullProjects from './components/FullProjects.jsx';
import ErrorPage from './components/ErrorPage.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>

      <Route  path='/'  element={  <App />} />
      <Route  path='/projects'  element={  <FullProjects />} />
      <Route  path='/*'  element={  <ErrorPage />} />



    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
)
