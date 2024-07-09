import React from 'react'
import { Container, Card, Badge, Button } from 'react-bootstrap'

const Resume: React.FC = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Resume</h2>

      {/* Skills */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4 text-primary-emphasis">
            <h3>Skills</h3>
          </Card.Title>
          <ul className="list-group list-group-flush">
            <SkillItem skill="React.js/jQuery" level="Expert" />
            <SkillItem skill="HTML/CSS/JavaScript" level="Advanced" />
            <SkillItem skill="Data Structures/Algorithms" level="Advanced" />
            <SkillItem skill="Django/Python" level="Intermediate" />
            <SkillItem skill="Design Thinking" level="Intermediate" />
            <SkillItem skill="Strong Communication" level="Expert" />
            <SkillItem skill="Project Management Skills" level="Expert" />
          </ul>
        </Card.Body>
      </Card>

      {/* Education */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4n text-primary-emphasis">
            <h3>Education</h3>
          </Card.Title>
          <br />
          <EducationItem
            institution="Udemy Courses / Self-Taught"
            period="2023-2024"
            description="Completed various courses on web development."
          />
          <EducationItem
            institution="Coding Bootcamp"
            period="2023"
            description="Intensive training in full-stack web development."
          />
          <EducationItem
            institution="Beijing Contemporary Music Academy"
            period="2008-2012"
            description="Studied Pop Singing & Performance."
          />
        </Card.Body>
      </Card>

      {/* Work Experience */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4 text-primary-emphasis">
            <h3>Work Experience</h3>
          </Card.Title>
          <WorkExperienceItem
            title="Party DJ & Emcee"
            location="San Francisco Bay Area"
            period="2019 - 2023"
            description="Served as an emcee and party DJ for various private events around the Bay Area."
          />
          <WorkExperienceItem
            title="Airbnb Tour Guide"
            location="San Francisco Bay Area"
            period="2019 - 2023"
            description="Led 5-star San Francisco Chinatown and Golden Gate Bridge tours on Airbnb experiences, once recommended by Airbnb CEO."
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

interface SkillItemProps {
  skill: string
  level: string
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, level }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    {skill}
    <Badge bg="primary" pill>
      {level}
    </Badge>
  </li>
)

interface EducationItemProps {
  institution: string
  period: string
  description: string
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  period,
  description
}) => (
  <div className="mb-3">
    <h5>{institution}</h5>
    <p className="text-muted">{period}</p>
    <p>{description}</p>
  </div>
)

interface WorkExperienceItemProps {
  title: string
  location: string
  period: string
  description: string
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  title,
  location,
  period,
  description
}) => (
  <div className="mb-3">
    <h5>{title}</h5>
    <p className="text-muted">
      {location} | {period}
    </p>
    <p>{description}</p>
  </div>
)

export default Resume
