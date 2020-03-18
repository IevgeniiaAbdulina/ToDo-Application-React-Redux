import React from "react";

const ListDetails = props => {
  console.log("DETAILS", props);

  // grab id from url ex. http://localhost:3000/project/7
  // = id is 7 and push it in to content on the page
  const id = props.match.params.id;

  return (
    <div>
      <div>Project Title - {id}</div>
      <p>lorem</p>
      <div>posted by NN</div>
      <div>data 2 Nov</div>
    </div>
  );
};

export default ListDetails;
