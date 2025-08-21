import React, { useState } from "react";
import { Link } from "react-router-dom";

function Button({ children, path, isSelected, onSelect }) {
  return (
    <>
      <li>
        <Link to={path}>
          <button className="px-7 py-2" onClick={onSelect}>
            {children}
          </button>
        </Link>
        {isSelected && (
          <div className="border-b-4 border-[var(--primary)] rounded-t-full" />
        )}
      </li>
    </>
  );
}
export default function MainNav() {
  const [selected, setSelected] = useState(0);
  
  return (
    <header className="border-b border-[var(--alternative)]">
      <h1 className="text-4xl">Project Management</h1>
      <nav>
        <ul className="flex gap-10">
          <Button
            path="project-list"
            isSelected={selected === 0}
            onSelect={() => setSelected(0)}
          >
            Project list
          </Button>
          <Button
            path="completed"
            isSelected={selected === 1}
            onSelect={() => setSelected(1)}
          >
            Completed Project
          </Button>
          <Button
            path="uncompleted"
            isSelected={selected === 2}
            onSelect={() => setSelected(2)}
          >
            Uncompleted Project
          </Button>
        </ul>
      </nav>
    </header>
  );
}
