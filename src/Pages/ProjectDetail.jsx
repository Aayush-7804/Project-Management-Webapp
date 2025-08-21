import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
    const param = useParams();

  return (
    <div>ProjectDetail {param.id}</div>
  )
}
