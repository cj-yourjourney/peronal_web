// src/pages/Home.tsx
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import profileImage from '../images/profile.png' // Replace with your profile image path

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Row className="text-center">
          <Col md={6} className="my-auto">
            <h1 className="display-4">I can help your business to</h1>
            <p className="lead">Get online and grow fast</p>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="mr-3">
                Resume
              </Button>
              <Button variant="outline-primary">Projects</Button>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
