export function parseErrorRequestCompleted(response,requestType) {
  return {
    errorKey: '',
	errors: []
  };
};

export function parseErrorRequestError(response,requestType) {
  return {
    errorKey: 'platformError',
	errors: ["Something went wrong and we couldn't load the info you need - try " +
	         "waiting a few moments then reloading the page - the problem " +
	         "may fix itself.  If you're still seeing this error, please " +
	         "notify our engineers at tech@fakedomain.com and tell them exactly " +
	         "what you were trying to do (please paste the entire URL to " +
	         "the page in the email)."]
  };
};
