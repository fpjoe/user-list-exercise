import humps from 'humps';

export default function convertRailsKeysToReactKeys(keysFromRails) {
  return humps.camelizeKeys(keysFromRails);
};
