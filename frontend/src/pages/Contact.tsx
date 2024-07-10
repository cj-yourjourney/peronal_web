// src/pages/Contact.tsx
import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const Contact: React.FC = () => {
  const emailAddress = 'cjinherenow@gmail.com'

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Card className="shadow p-4">
        <Card.Body>
          <Card.Title className="mb-4 text-primary-emphasis">
            Get in Touch
          </Card.Title>
          <p className="mb-4">
            Feel free to contact me via LinkedIn or email for any inquiries or
            opportunities.
          </p>
          <div className="mb-4">
            <p className="mb-3">
              <strong>LinkedIn:</strong>
              <br />
              <a
                href="https://www.linkedin.com/in/cj-luo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                CJ Luo
              </a>
            </p>
            <p className="mb-3">
              <strong>Email:</strong>
              <br />
              <a
                href={`mailto:${emailAddress}`}
                className="text-decoration-none"
              >
                {emailAddress}
              </a>
            </p>
          </div>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/cj-luo/"
            target="_blank"
            className="mb-3 d-block"
          >
            LinkedIn Profile
          </Button>
          <Button
            variant="secondary"
            href={`mailto:${emailAddress}`}
            className="d-block"
          >
            Email Me
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Contact
