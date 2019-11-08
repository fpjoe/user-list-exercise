import React from 'react';
import PropTypes from 'prop-types';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { users } = this.props;

    return (
      <div>
		body here
      </div>
    );
  };
};

UserList.propTypes = {
  users: PropTypes.object.isRequired
};

export default UserList;
