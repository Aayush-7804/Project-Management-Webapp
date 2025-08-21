import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
  return (
    <div>
        <ul className='flex gap-10'>
            <li>
                <Link to='project-list'>Project list</Link>
            </li>
            <li>
                <Link to='completed'>Completed Projects</Link>
            </li>
            <li>
                <Link to='uncompleted'>Uncompleted Projects</Link>
            </li>
        </ul>
    </div>
  )
}
