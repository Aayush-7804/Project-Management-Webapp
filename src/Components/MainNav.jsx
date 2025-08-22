import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Button({ children, path, isSelected, onSelect }) {
  return (
    <>
      <li>
        <Link to={path} draggable="false">
          <button className="px-7 py-2" onClick={onSelect}>
            {children}
          </button>
        </Link>
        {isSelected && (
          <motion.div
            className="border-b-4 border-[var(--primary)] rounded-t-full"
            layoutId="underline"
          />
        )}
      </li>
    </>
  );
}
export default function MainNav() {
  const [selected, setSelected] = useState(0);

  return (
    <header className="px-10 border-b border-[var(--alternative)]">
      <h1 className="text-4xl my-5 font-semibold">
        <span className="text-[var(--primary)]">Pro</span>ject{" "}
        <span className="text-[var(--primary)]">Man</span>agement
      </h1>
      <nav>
        <ul className="flex">
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
