import React from 'react'
import NoProject from '../assets/no-projects.png'
import { Link } from 'react-router-dom'
export default function NotSelected() {
  return (
    <>
    <figure>
        <img src={NoProject} alt="no-project" className='w-20 h-20 object-contain' />
    </figure>
    <h1>Select the project</h1>
    <p>Select the project / Create New Project</p>
    <Link to='new'>
    <button>Create New Project</button>
    </Link>
    </>
  )
}
