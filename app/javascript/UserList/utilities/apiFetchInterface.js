import apiFetch from './apiFetch';

export function callApiFetch(data) {
  apiFetch({
	query: data.query,
	variables: data.variables,
	onSuccess: data.onSuccess,
	onError: data.onError
  });
}

export function retrieveApiFetchError(data) {
  return data.errors.join(', ');
}
