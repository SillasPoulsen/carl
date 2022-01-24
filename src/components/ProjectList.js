import React from "react";
import PageContent from "./PageContent";
import HorizontalScroll from "react-scroll-horizontal";

export default function ProjectList({ projects, theme }) {
  return (
    <>
      {projects.map((project) => {
        return (
          <>
            <div className="container" key={project.id}>
              <PageContent project={project} theme={theme} key={project.id} />
            </div>
          </>
        );
      })}
    </>
  );
}
