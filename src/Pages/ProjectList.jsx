import React from "react";
import ListNav from "../Components/ListNav";
import { Outlet } from "react-router-dom";

export default function ProjectList() {
  return (
    <>
      <ListNav />
      <section className="flex-4/5">
        <Outlet />
      </section>
    </>
  );
}
