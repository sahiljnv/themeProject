import {ActivityIndicator, Button, View, NativeModules} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../../navigation/google_login_navigation';
import {style} from './style';
import BaseText from '../base_text';
type Props = NativeStackScreenProps<StackProps, 'GoogleLogIn'>;
const GoogleLogIn = (props: Props) => {
  const {MyTostModule} = NativeModules;
  const {} = props;
  // const useGoogleInfo =
  //   React.useContext<GoogleinfoContextType>(GoogleinfoContext);
  const [isFetching, setFetching] = React.useState(false);

  const printKt = () => {
    console.log('@@@@@@@@@@@@@@@@@@@');
    MyTostModule.createCalendarEvent('sahil', 'karnal');
  };
  return (
    <View style={style.mainContainer}>
      {isFetching ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button onPress={printKt} title="log it" />
          <BaseText
            color="black"
            fontSize={23}
            style={{backgroundColor: 'red'}}>
            {'hello'}
          </BaseText>
        </>
      )}
    </View>
  );
};
// import {CLIENT_ID} from '../../assets/oauth';
// import {
//   GoogleSignin,
// GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';
// import {LoginManager} from 'react-native-fbsdk-next';

// import {
//   GoogleinfoContextType,
//   GoogleinfoContext,
// } from '../../context/google_signin_context';
// import BaseText from '../base_text';
// GoogleSignin.configure({
//   webClientId: CLIENT_ID,
//   offlineAccess: true,
// });

export type User = {
  email: string;
  familyName: string | null;
  givenName: string | null;
  id: string;
  name: string | null;
  photo: string | null;
};

/* <GoogleSigninButton style={style.buttonStyle} onPress={signIn} />
          <Button onPress={fbLogin} title={'Facebook'} /> */

// const signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     setFetching(true);
//     const result: User = (await GoogleSignin.signIn()).user;
//     useGoogleInfo.setUserInformation(result);
//     navigation.navigate('LoginInfo');
//     setFetching(false);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fbLogin = async () => {
//   LoginManager.logInWithPermissions(['public_profile']).then(
//     function (result) {
//       if (result.isCancelled) {
//         console.log('Login cancelled');
//       } else {
//         console.log(
//           'Login success with permissions: ',
//           // result.grantedPermissions.toString(),
//         );
//       }
//     },
//     function (error) {
//       console.log('Login fail with error: ' + error);
//     },
//   );
// };
// const config = {
//   clientSecret: CLIENT_SECRET,
//   issuer: AUTH_URI,
//   clientId: CLIENT_ID,
//   redirectUrl: REDIRECT_URI,
//   scopes: ['email'],
// };

// const authHandler = async () => {
//   console.log('out side the try block');

//   try {
//     const result = await authorize(config);
//     console.log('result ===========> ', result);
//   } catch (error) {
//     console.error('error:::::::::::> ', error);
//   }
// };

// const handleGoogleSignin = async () => {
//   console.log('sl;d;');

//   const result = await prefetchConfiguration(config);
//   console.log(';:::::::::::::::;', result);
// };

export default GoogleLogIn;
