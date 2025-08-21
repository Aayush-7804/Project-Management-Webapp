import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import ProjectList from "./Pages/ProjectList";
import CompletedProjects from "./Pages/CompletedProjects";
import UncompletedProjects from "./Pages/UncompletedProjects";
import ProjectDetail from "./Pages/ProjectDetail";
import NotSelected from "./Components/NotSelected";
import NewProject from "./Pages/NewProject";
import MainLanding from "./Pages/MainLanding";

const router = createBrowserRouter([
  {
    index: true,
    element: <MainLanding />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "project-list",
        element: <ProjectList />,
        children: [
          { index: true, element: <NotSelected /> },
          { path: ":id", element: <ProjectDetail /> },
          { path: "new", element: <NewProject /> },
        ],
      },
      { path: "completed", element: <CompletedProjects /> },
      { path: "uncompleted", element: <UncompletedProjects /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
