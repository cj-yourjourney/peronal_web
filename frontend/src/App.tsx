import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
// import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/resume/" element={<Resume />} />
            <Route path="/projects/" element={<Projects />} />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
