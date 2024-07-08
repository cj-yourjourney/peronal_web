import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
// import './App.css'

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/resume/" element={<Resume />} />
          <Route path="/projects/" element={<Projects />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
