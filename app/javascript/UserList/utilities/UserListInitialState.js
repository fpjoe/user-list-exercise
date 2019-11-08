import convertRailsKeysToReactKeys from '../utilities/convertRailsKeysToReactKeys';

export default function userListInitialState(props) {
  const propsFromRails = convertRailsKeysToReactKeys(props);

  return {
    users: propsFromRails.users
  };
};
