import React from 'react'
import { Link } from 'react-router-dom'

export default function NewProject() {
  return (
    <div>NewProject
        <Link to='..'><button>Cancel</button></Link>
        <Link to='..'><button>Save</button></Link>
    </div>
  )
}
