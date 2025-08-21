import React from "react";
import { Link } from "react-router-dom";

function Button({ children, path }) {
  return (
    <Link to={path} draggable="false">
      <button className="overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
        {children}
      </button>
    </Link>
  );
}

const DUMMY_DATA = [
  { id: "p1", title: "Project 1" },
  { id: "p2", title: "Project 2" },
  { id: "p3", title: "Project 3" },
  { id: "p4", title: "Project 4" },
];

export default function ListNav() {
  return (
    <aside className="flex-1/5 border-r">
      <ul>
        <Button path='new'>+ Add New Project</Button>
        {DUMMY_DATA.map((project) => (
          <li key={project.id}>
            <Button path={project.id}>{project.title}</Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
