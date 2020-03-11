import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteList } from "../actions/deleteAction";

class DeleteList extends Component {
  onDeleteListButtonClick = () => {
    console.log("Delete list button clicked");
    this.props.deleteList();
  };

  render() {
    return (
      <div>
        <button onClick={this.onDeleteListButtonClick}>Delete list</button>
      </div>
    );
  }
}

DeleteList.propTypes = {
  deleteList: PropTypes.func.isRequired,
  list: PropTypes.object
};

const mapStateToProps = state => ({
  list: state.lists.list
});

export default connect(mapStateToProps, { deleteList })(DeleteList);
