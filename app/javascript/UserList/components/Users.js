import React from 'react';
import PropTypes from 'prop-types';
import pluralize from '../utilities/pluralize';
import User from './User';
import PaginationSummaryNumResults from './PaginationSummaryNumResults';
import PaginationSummaryPagingLinks from './PaginationSummaryPagingLinks';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePaginationLinkClick = (page) => {
  	this.props.handlePaginationLinkClick(page);
  }

  handleTogglePasswordLinkClick = (userId) => {
  	this.props.handleTogglePasswordLinkClick(userId);
  }

  handleTogglePhotosLinkClick = (e) => {
	e.preventDefault();
	this.props.handleTogglePhotosLinkClick();
  }

  render() {

    const { usersInfo,
		    photoHeight,
		    showPhotos,
  		    getUsersMode,
		    getUsersError,
		    usersPage } = this.props;

	const listUsers = usersInfo.users.map((user, index) => (
	  <User user={user}
	        photoHeight={photoHeight}
			showPhotos={showPhotos}
            handleTogglePasswordLinkClick={this.handleTogglePasswordLinkClick}
		    key={index} />
	));

	return (
      <div id="user_box">

        <div id="user_header">
          <div id="user_header_left_col">
            {pluralize(usersInfo.numTotal,'user')}.
          </div>
          <div id="user_header_middle_col">
    		<PaginationSummaryNumResults paginationInfo={usersInfo}
     		                             entityName="user" />
          </div>
          <div id="user_header_right_col">
  	        <a href="#" onClick={this.handleTogglePhotosLinkClick} className="toggle_photos_link">{showPhotos ? 'Hide photos' : 'Show photos'}</a>
          </div>
        </div>

        <table className="table">
        <tbody>
        <tr>
          <td className="user_col_header leftmost_column">Name</td>
          <td className="user_col_header">Gndr/Age</td>
          <td className="user_col_header">Region</td>
          <td className="user_col_header">Phone</td>
          <td className="user_col_header">Email</td>
          <td className="user_col_header">Password</td>
          <td className="user_col_header">Photo</td>
        </tr>
        {listUsers}
        </tbody>
        </table>

        <div id="user_footer">
  		  <PaginationSummaryPagingLinks paginationInfo={usersInfo}
 		                                currentPage={usersPage}
		                                linkIdPrefix="users"
		                                mode={getUsersMode}
		                                handlePaginationLinkClick={this.handlePaginationLinkClick} />
		  { ( getUsersMode == 'error' && getUsersError ) && (
            <div className="error">
              {getUsersError}
            </div>
          )}
        </div>

      </div>
    );
  };
};

Users.defaultProps = {
  usersPage: '1'
};

Users.propTypes = {
  usersInfo: PropTypes.object.isRequired,
  photoHeight: PropTypes.number.isRequired,
  showPhotos: PropTypes.bool.isRequired,
  getUsersMode: PropTypes.string,
  getUsersError: PropTypes.string,
  usersPage: PropTypes.string,
  handlePaginationLinkClick: PropTypes.func.isRequired,
  handleTogglePasswordLinkClick: PropTypes.func.isRequired,
  handleTogglePhotosLinkClick: PropTypes.func.isRequired
};

export default Users;
