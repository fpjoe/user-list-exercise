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

  render() {

    const { userListInfo,
  		    getUsersMode,
		    getUsersError,
 		    usersPage } = this.props;

	const listUsers = userListInfo.usersInfo.users.map((user, index) => (
	  <User user={user}
		    key={index} />
	));

	return (
      <div id="user_box">

        <div id="user_header">
          <div id="user_header_left_col">
            {pluralize(userListInfo.usersInfo.numTotal,'user')}.
          </div>
          <div id="user_header_right_col">
    		<PaginationSummaryNumResults paginationInfo={userListInfo.usersInfo}
     		                             entityName="user"
			                             marginBottom={0} />
          </div>
        </div>

        <table className="table">
        <tbody>
        <tr>
          <td className="user_col_header leftmost_column">Name</td>
          <td className="user_col_header">Gender</td>
          <td className="user_col_header">Region</td>
          <td className="user_col_header">Phone</td>
          <td className="user_col_header">Email</td>
          <td className="user_col_header">PW</td>
          <td className="user_col_header">Photo</td>
        </tr>
        {listUsers}
        </tbody>
        </table>

        <div id="user_footer">
  		  <PaginationSummaryPagingLinks paginationInfo={userListInfo.usersInfo}
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
  userListInfo: PropTypes.object.isRequired,
  getUsersMode: PropTypes.string,
  getUsersError: PropTypes.string,
  usersPage: PropTypes.string,
  handlePaginationLinkClick: PropTypes.func.isRequired
};

export default Users;
