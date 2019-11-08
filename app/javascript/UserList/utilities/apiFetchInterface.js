import apiFetch from './apiFetch';
import { reloadPageAfterXSeconds } from './pageLoadUtils';

export function callApiFetch(data) {
  apiFetch({
	query: data.query,
	variables: data.variables,
	onSuccess: data.onSuccess,
	onError: data.onError
  });
}

export function handleApiFetchError(data,store,storeErrorKey) {
  store[storeErrorKey] = data.errors.join(', ');
  if ( data.errorKey == 'needLogin' ) {
    reloadPageAfterXSeconds();
  }
  return store;
}
