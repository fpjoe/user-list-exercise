import convertRailsKeysToReactKeys from '../utilities/convertRailsKeysToReactKeys';

export default function userListInitialState(props) {
  const propsFromRails = convertRailsKeysToReactKeys(props);

  return {
    userListInfo: propsFromRails.userListInfo
  };
};
