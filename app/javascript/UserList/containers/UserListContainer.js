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
      <UserList users={this.state.users} />
    );
  };
};

UserListContainer.propTypes = {
  users: PropTypes.object.isRequired
};

export default UserListContainer;
