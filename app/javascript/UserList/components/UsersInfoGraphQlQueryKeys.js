export default function usersInfoGraphQlQueryKeys() {

  // See corresponding entries in Types::UsersInfo and Types::User on server side, used by GraphQL
	
  return `users {
    	    id
	        name
	        surname
	        gender
	        region
	        age
	        title
	        phone
  		    birthday
            email
	        password
            photoUrl
  		  }
  		  numStart
		  numEnd
		  numTotal
  		  pages`;
}
