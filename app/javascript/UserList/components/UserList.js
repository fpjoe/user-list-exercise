import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import UsersContainer from '../containers/UsersContainer';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { userListInfo } = this.props;

    return (
      <div>
        <Header />
        <UsersContainer userListInfo={userListInfo} />
      </div>
    );
  };
};

UserList.propTypes = {
  userListInfo: PropTypes.object.isRequired
};

export default UserList;
