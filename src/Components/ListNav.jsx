import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

const buttonCss = " w-44 py-2 rounded-lg ";
const buttonTextEllipsis =
  " overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] ";
const selectedButtonCss = " absolute inset-0 bg-[var(--primary)] rounded-lg -z-10 ";
const isNotselectedButtonCss =
  " absolute inset-0 hover:bg-[var(--alternative)] ";

function Button({ children, path, className, isSelected }) {
  return (
    <li>
      <Link to={path} draggable="false">
        <div className="relative">
          {isSelected && (
            <motion.div
              layoutId="button-highlight"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={selectedButtonCss}
            />
          )}
          <button
            className={
              buttonCss + buttonTextEllipsis + (className ?? undefined)
            }
          >
            {children}
          </button>
        </div>
      </Link>
    </li>
  );
}

const DUMMY_DATA = [
  { id: "p1", title: "Project 1" },
  { id: "p2", title: "Project 2" },
  { id: "p3", title: "Project 3" },
  { id: "p4", title: "Project 4" },
];

export default function ListNav() {
  const params = useParams();
  console.log(params.id);
  return (
    <aside className="flex-1/5 border-r">
      <ul className="flex flex-col items-center my-10 gap-5">
        <Button
          path="new"
          className=" bg-[var(--alternativeOpacity)] hover:bg-[var(--alternative)]"
        >
          + Add New Project
        </Button>
        {DUMMY_DATA.map((project) => (
          <Button
            key={project.id}
            path={project.id}
            isSelected={project.id === params.id}
          >
            {project.title}
          </Button>
        ))}
      </ul>
    </aside>
  );
}
