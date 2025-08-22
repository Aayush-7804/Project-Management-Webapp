import React from "react";
import { Link } from "react-router-dom";

export default function MainLanding() {
  return (
    <header className="text-center">
      <figure className="relative">
        <img
          src="https://newseu.cgtn.com/news/2022-07-13/-NASA-releases-spectacular-new-images-from-James-Webb-Space-Telescope-1bClnBF50xW/img/bf7ef47e8fc54e46a6a9ed2053f4ddf5/bf7ef47e8fc54e46a6a9ed2053f4ddf5-1920.jpeg"
          alt=""
          className="w-full h-screen object-cover opacity-80"
        />
        <figcaption className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-8 items-center">
          <h1 className="text-4xl">Welcome to The Project Managment WebApp</h1>
          <Link to="project-list">
            <button className="border w-32 py-1.5 rounded-lg hover:bg-[var(--primary)] hover:border-transparent ">
              Let's Start
            </button>
          </Link>
        </figcaption>
      </figure>
    </header>
  );
}
