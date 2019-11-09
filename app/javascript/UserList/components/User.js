import React from 'react';
import PropTypes from 'prop-types';
import truncateText from '../utilities/truncateText';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { user } = this.props;

	return (
	  <tr>
        <td className="user_list leftmost_column">
        {user.surname}, {user.name}
        </td>
        <td className="user_list">
        {user.gender}
        </td>
        <td className="user_list">
        {user.region}
        </td>
        <td className="user_list">
        {user.phone}
        </td>
        <td className="user_list" title={user.email}>
		{truncateText(user.email,20)}
        </td>
        <td className="user_list" title={user.password}>
		{truncateText(user.password,20)}
        </td>
        <td className="user_list">
        {user.photoUrl}
        </td>
	  </tr>
    );
  };
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
