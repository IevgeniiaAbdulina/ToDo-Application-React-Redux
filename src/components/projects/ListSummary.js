import React from "react";

const ListSummary = ({ project }) => {
  return (
    <div>
      <span>{project.title}</span>
      <p>Posted by NN</p>
      <p>Data 12 Nov</p>
      <hr />
    </div>
  );
};

export default ListSummary;
