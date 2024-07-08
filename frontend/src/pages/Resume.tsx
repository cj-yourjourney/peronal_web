// src/pages/Resume.tsx
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'

const Resume: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Row>
          <Col md={8}>
            <h2 className="mb-4">Resume</h2>
            <p>Your resume details and achievements can go here...</p>
          </Col>
          <Col md={4}>
            <h4 className="mb-3">Skills</h4>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Resume
