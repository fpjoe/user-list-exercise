import Api from './api';
import { parseErrorRequestCompleted, parseErrorRequestError } from './apiParseResponse';

export default function performFetch({ query, variables = {}, onSuccess, onError }) {
  return Api.get('', {
	params: {
      query: query,
      variables: variables
	}
  }).then(response => {
    var errorInfo = parseErrorRequestCompleted(response,'fetch');
    if ( errorInfo.errors.length > 0 ) {
      onError(errorInfo);
    } else {
      onSuccess(response.data.data);	
    }
  }).catch(error => {
    var errorInfo = parseErrorRequestError(error,'fetch');
    onError(errorInfo);
  });
};
