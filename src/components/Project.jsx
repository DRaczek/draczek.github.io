import React from "react";

function Project({ addToRefs, link, title, badges }) {
  return (
    <div
      className="project-card d-flex justify-content-between align-items-center pb-4 pt-4 mb-4 row"
      ref={addToRefs}
    >
      <div className="col-12 col-sm-9">
        <p className="project-title h4 mb-3">{title}</p>
        <div className="tags  d-flex flex-wrap gap-2 fs-5">
          {badges.map((badge, index) => (
            <span key={index} className="badge bg-dark align-self-center">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        className="read-more fs-5 text-decoration-none col-12 col-sm-3 text-end"
      >
        Read More →
      </a>
    </div>
  );
}

export default Project;
