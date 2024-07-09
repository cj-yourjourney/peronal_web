// src/pages/Home.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profileImage from '../images/profile.png'; // Replace with your profile image path

const Home: React.FC = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="text-center">
          <Col md={6} className="my-auto mb-4">
            {' '}
            {/* Added margin-bottom */}
            <h1 className="display-4 mb-3">
              {' '}
              {/* Added margin-bottom */}
              Let's build something awesome
            </h1>
            <p className="lead mb-4">
              {' '}
              {/* Added margin-bottom */}
              Your next React developer: CJ Luo.
            </p>
            <div className="d-flex justify-content-center mb-4">
              {' '}
              {/* Added margin-bottom */}
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <Button variant="rimary" className="mr-3">
                  Resume
                </Button>
              </a>
              <a href="/projects" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Projects</Button>
              </a>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid rounded-circle mb-4"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Home;
