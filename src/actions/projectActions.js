export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to database
    console.log("project:", project);
    dispatch({
      type: "CREATE_PROJECT",
      project // project: project ...the same
    });
  };
};

// export default createProject;
