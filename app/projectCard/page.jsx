import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
