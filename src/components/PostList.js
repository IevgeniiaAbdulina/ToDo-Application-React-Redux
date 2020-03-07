import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <div>
        <h3>Post list</h3>
        <form>
          <div>
            <label>List Name: </label>
            <br />
            <textarea name="listName" />
          </div>
          <br />
          <button type="submit">OK</button>
        </form>
      </div>
    );
  }
}

export default PostList;
