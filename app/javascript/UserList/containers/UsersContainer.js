import React from 'react';
import PropTypes from 'prop-types';
import { callApiFetch, retrieveApiFetchError } from '../utilities/apiFetchInterface';
import usersInfoGraphQlQueryKeys from '../components/UsersInfoGraphQlQueryKeys';
import Users from '../components/Users';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();
  }

  defaultState() {
    return {
	  usersInfo: this.setDefaultShowPasswordValues(this.props.userListInfo.usersInfo),
      getUsersMode: 'view',
	  getUsersError: '',
	  usersPage: '1'
    };
  }

  setDefaultShowPasswordValues(usersInfo) {
	var users = [];
    for ( const user of usersInfo.users ) {
      users.push(
        Object.assign(
          user,
          { showPassword: false }
        )
	  );
	}
	usersInfo.users = users;
    return usersInfo;
  }

  toggleShowPasswordValue(usersInfo,userId) {
	var users = [];
    for ( const user of usersInfo.users ) {
      users.push(
        Object.assign(
          user,
          { showPassword: ( user.id == userId ? !user.showPassword : user.showPassword ) }
        )
	  );
	}
	usersInfo.users = users;
    return usersInfo;
  }

  queryGetUsersInfo() {
	return `query getUsersInfo(
		$page: Int!
	  ) {
      usersInfo(
		page: $page
	  ) {
		${usersInfoGraphQlQueryKeys()}
      }
    }`;
  }

  variablesGetUsersInfo(page) {
    return {
	  page: Number(page)
	};
  }

  handlePaginationLinkClick = (page) => {
    callApiFetch({
	  query: this.queryGetUsersInfo(),
	  variables: this.variablesGetUsersInfo(page),
	  onSuccess: this.handleGetUsersInfoSuccess,
	  onError: this.handleGetUsersInfoError
  	});
    this.setState({
      getUsersMode: 'loading',
	  usersPage: page.toString()
    });
  }

  handleGetUsersInfoSuccess = (result) => {
    this.setState({
      getUsersMode: 'view',
	  usersInfo: this.setDefaultShowPasswordValues(result.usersInfo)
    });
  }

  handleGetUsersInfoError = (errorInfo) => {
    this.setState({
	  getUsersMode: 'error',
  	  getUsersError: retrieveApiFetchError(errorInfo)
    });
  }

  handleTogglePasswordLinkClick = (userId) => {
    this.setState({
      usersInfo: this.toggleShowPasswordValue(this.state.usersInfo,userId)
    });
  }
  
  render() {
    return (
	  <Users usersInfo={this.state.usersInfo}
	         photoHeight={this.props.userListInfo.photoHeight}
   	         getUsersMode={this.state.getUsersMode}
   	         getUsersError={this.state.getUsersError}
			 usersPage={this.state.usersPage}
			 handlePaginationLinkClick={this.handlePaginationLinkClick}
			 handleTogglePasswordLinkClick={this.handleTogglePasswordLinkClick} />
    );
  };
};

UsersContainer.propTypes = {
  userListInfo: PropTypes.object.isRequired
};

export default UsersContainer;
