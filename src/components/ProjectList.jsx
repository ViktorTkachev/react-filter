import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project__container">
      {projects.map((project, index) => (
        <div key={index} className="card">
          <img className="card__img" src={project.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
