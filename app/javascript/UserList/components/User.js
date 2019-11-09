import React from 'react';
import PropTypes from 'prop-types';
import truncateText from '../utilities/truncateText';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTogglePasswordLinkClick = (e) => {
	e.preventDefault();
	this.props.handleTogglePasswordLinkClick(this.props.user.id);
  }

  render() {

    const { user,
		    photoHeight } = this.props;

    const fullName = user.surname + ', ' + user.name;

	return (
	  <tr>
        <td className="user_list leftmost_column" title={fullName}>
        {truncateText(fullName,20)}
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
        <td className="user_list">
		{user.showPassword && (
          <div>
  		    {user.password}
          </div>
		)}
		<div>
	      <a href="#" onClick={this.handleTogglePasswordLinkClick} className="toggle_password_link">{user.showPassword ? 'Hide pw' : 'Show pw'}</a>
        </div>
        </td>
        <td className="user_list">
        <div style={{height: photoHeight}}>
    	  <a href={user.photoUrl} target="_blank"><img src={user.photoUrl} height={photoHeight} /></a>
        </div>
        </td>
	  </tr>
    );
  };
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  photoHeight: PropTypes.number.isRequired,
  handleTogglePasswordLinkClick: PropTypes.func.isRequired
};

export default User;
