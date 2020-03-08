import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLists } from "../actions/listActions";

class Lists extends Component {
  UNSAFE_componentWillMount() {
    //  UNSAFE_componentWillMount = I know information from database before rendering
    this.props.fetchLists();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // UNSAFE_componentWillReceiveProps(nextProps) = вызывается до того, как смонтированный компонент получит новые пропсы. Чтобы обновить состояние в ответ на изменение пропсов (например, для его сброса), можно сравнить this.props с nextProps и обновить состояние в этом методе с помощью this.setState().
    if (nextProps.newList) {
      this.props.lists.unshift(nextProps.newList);
    }
  }

  render() {
    const postLists = this.props.lists.map(list => (
      <div key={list._id}>{list.name}</div>
    ));

    return (
      <div>
        <h3>Lists:</h3>
        {postLists}
      </div>
    );
  }
}

Lists.propTypes = {
  fetchLists: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  newList: PropTypes.object
};

const mapStateToProps = state => ({
  lists: state.lists.lists,
  newList: state.lists.list
});

export default connect(mapStateToProps, { fetchLists })(Lists);
