// src/pages/Projects.tsx
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import projectImage1 from '../images/project1.png' // Replace with actual image paths
import projectImage2 from '../images/project2.png' // Replace with actual image paths

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    link: 'http://example.com/project1',
    image: projectImage1
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    link: 'http://example.com/project2',
    image: projectImage2
  }
  // Add more projects here
]

const Projects: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Projects
