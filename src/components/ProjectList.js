import React from "react";
import PageContent from "./PageContent";
import HorizontalScroll from "react-scroll-horizontal";

export default function ProjectList({ projects, theme }) {
  const child = { width: `100em`, height: `90vh` };

  return (
    <HorizontalScroll>
      {projects.map((project) => {
        return (
          <>
            <div style={child} className="container" key={project.id}>
              <PageContent project={project} theme={theme} key={project.id} />
            </div>
          </>
        );
      })}
    </HorizontalScroll>
  );
}
