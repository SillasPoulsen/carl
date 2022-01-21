import React from "react";
import PageContent from "./PageContent";
import HorizontalScroll from "react-scroll-horizontal";

export default function FlashcardList({ projects }) {
  const child = { width: `100em`, height: `100%`, display: `flex` };
  return (
    <HorizontalScroll>
      {projects.map((project) => {
        return (
          <>
            <div style={child} className="container">
              <PageContent project={project} key={project.id} />
            </div>
          </>
        );
      })}
    </HorizontalScroll>
  );
}
