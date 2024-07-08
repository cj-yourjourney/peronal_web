// src/components/ResumeItem.tsx
import React from 'react'
import { Card } from 'react-bootstrap'

interface ResumeItemProps {
  title: string
  subtitle: string
  year: string
  description?: string
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  subtitle,
  year,
  description
}) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {subtitle} - {year}
        </Card.Subtitle>
        {description && <Card.Text>{description}</Card.Text>}
      </Card.Body>
    </Card>
  )
}

export default ResumeItem
