import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Pages/Root';
import ProjectList from './Pages/ProjectList';
import CompletedProjects from './Pages/CompletedProjects';
import UncompletedProjects from './Pages/UncompletedProjects';

const router = createBrowserRouter([
  {path: '/', element: <Root /> ,children: [
    {path: 'project-list', element: <ProjectList />},
    {path: 'completed', element: <CompletedProjects />},
    {path: 'uncompleted', element: <UncompletedProjects />}
  ]}
]);
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}