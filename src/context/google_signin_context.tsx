import React, {createContext} from 'react';
import {User} from '../components/google_login';
export type GoogleinfoContextType = {
  userInfo: User;
  setUserInformation: (value: User) => void;
};
type Props = {
  children?: React.ReactNode;
};
export const GoogleinfoContext = createContext<GoogleinfoContextType>(
  {} as GoogleinfoContextType,
);
const GoogleSigninContext = ({children}: Props) => {
  const [userInfo, setUserInfo] = React.useState<User>({
    email: '',
    familyName: '',
    givenName: '',
    id: '',
    name: '',
    photo: '',
  });
  const setUserInformation = (value: User) => {
    setUserInfo(value);
  };

  const value = {
    userInfo,
    setUserInformation,
  };
  return (
    <GoogleinfoContext.Provider value={value}>
      {children}
    </GoogleinfoContext.Provider>
  );
};

export default GoogleSigninContext;
