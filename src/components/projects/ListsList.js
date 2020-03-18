import React from "react";

import ListSummary from "./ListSummary";

const ListsList = ({ projects }) => {
  return (
    <div>
      {/* <ListSummary />
      <ListSummary />
      <ListSummary /> */}
      {projects &&
        projects.map(project => {
          return <ListSummary project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ListsList;
