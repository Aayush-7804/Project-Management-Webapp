import React from "react";
import NoProject from "../assets/no-projects.png";
import { Link } from "react-router-dom";
export default function NotSelected() {
  return (
    <div className="flex flex-col items-center gap-5 my-20">
      <figure>
        <img
          src={NoProject}
          alt="no-project"
          className="w-20 h-20 object-contain"
        />
      </figure>
      <h1 className="text-4xl">Select the project</h1>
      <p className="text-sm">Select the project / Create New Project</p>
      <Link to="new">
        <button className="border py-1.5 px-3.5 rounded-lg hover:bg-[var(--primary)] hover:border-transparent">
          Create New Project
        </button>
      </Link>
    </div>
  );
}
