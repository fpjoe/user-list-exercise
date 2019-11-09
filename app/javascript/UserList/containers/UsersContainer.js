import React from 'react';
import PropTypes from 'prop-types';
import { callApiFetch, retrieveApiFetchError } from '../utilities/apiFetchInterface';
import usersInfoGraphQlQueryKeys from '../components/UsersInfoGraphQlQueryKeys';
import Users from '../components/Users';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      Object.assign(
        this.defaultState(),
        { usersPage: '1' }
      );
  }

  defaultState() {
    return {
      getUsersMode: 'view',
	  getUsersError: ''
    };
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
	  usersInfo: result.usersInfo
    });
  }

  handleGetUsersInfoError = (errorInfo) => {
    this.setState({
	  getUsersMode: 'error',
  	  getUsersError: retrieveApiFetchError(errorInfo)
    });
  }

  render() {
    return (
	  <Users userListInfo={this.props.userListInfo}
   	         getUsersMode={this.state.getUsersMode}
   	         getUsersError={this.state.getUsersError}
			 usersPage={this.state.usersPage}
			 handlePaginationLinkClick={this.handlePaginationLinkClick} />
    );
  };
};

UsersContainer.propTypes = {
  userListInfo: PropTypes.object.isRequired
};

export default UsersContainer;
