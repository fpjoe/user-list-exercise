import React from 'react';
import PropTypes from 'prop-types';
import userListInitialState from '../utilities/UserListInitialState';
import UserList from '../components/UserList';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = userListInitialState(this.props);

  render() {
    return (
      <UserList userListInfo={this.state.userListInfo} />
    );
  };
};

UserListContainer.propTypes = {
  userListInfo: PropTypes.object.isRequired
};

export default UserListContainer;
