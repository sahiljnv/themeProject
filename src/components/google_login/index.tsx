import {ActivityIndicator, Button, View, NativeModules} from 'react-native';
import React from 'react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {StackProps} from '../../navigation/google_login_navigation';
// import {style} from './style';
// import {LoginManager} from 'react-native-fbsdk-next';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';
// import {
//   GoogleinfoContextType,
//   GoogleinfoContext,
// } from '../../context/google_signin_context';
// import {
//   AUTH_URI,
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI,
// } from '../../assets/oauth';
// import {authorize} from 'react-native-app-auth';
import {
  GoogleSignin,
  User,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../../navigation/google_login_navigation';
type Props = NativeStackScreenProps<StackProps, 'GoogleLogIn'>;

const GoogleLogIn = (props: Props) => {
  // GoogleSignin.configure({
  //   webClientId: CLIENT_ID,
  //   offlineAccess: true,
  // });
  // const {navigation} = props;
  // const useGoogleInfo =
  //   React.useContext<GoogleinfoContextType>(GoogleinfoContext);
  // const [isFetching, setFetching] = React.useState(false);

  // // const printKt = () => {
  // //   console.log('@@@@@@@@@@@@@@@@@@@');
  // //   MyTostModule.createCalendarEvent('sahil', 'karnal');
  // // };
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
  // authHandler();
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
  // return (
  //   <View style={style.mainContainer}>
  //     <GoogleSigninButton style={style.buttonStyle} onPress={signIn} />
  //     <Button onPress={fbLogin} title={'Facebook'} />
  //     {/* {isFetching ? (
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     ) : (
  //       <>
  //         <Button onPress={printKt} title="log it" />
  //         <BaseText
  //           color="black"
  //           fontSize={23}
  //           style={{backgroundColor: 'red'}}>
  //           {'hello'}
  //         </BaseText>
  //       </>
  //     )} */}
  //   </View>
  // );
  const initalState: User = {
    user: {
      id: '',
      name: null,
      email: '',
      photo: null,
      familyName: null,
      givenName: null,
    },
    idToken: null,
    serverAuthCode: null,
  };
  const [user, setUser] = React.useState<User>(initalState);

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '808482264866-4sb8640o4csn45utjhi2spb1es2vioqi.apps.googleusercontent.com',
      iosClientId:
        '808482264866-9rqclu9j17289qc54fae5m8ob2ra1fg3.apps.googleusercontent.com',
      scopes: ['email', 'profile'],
    });
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const hasPlayService = await GoogleSignin.hasPlayServices();
      console.log('HAS_PLAY_SERVICE ==>', JSON.stringify(hasPlayService));
      const isAlreadySignedIn = await GoogleSignin.isSignedIn();
      if (!isAlreadySignedIn) {
        const userInfo = await GoogleSignin.signIn();
        console.log('LOGGED_IN_USER ===>', JSON.stringify(userInfo));
      } else {
        const currentUser = await GoogleSignin.getCurrentUser();
        console.log(
          'ALREADY_LOGGED_IN_CURRENT_USER ===>',
          JSON.stringify(currentUser),
        );
      }
      // setGoogleResponse(JSON.stringify(userInfo));
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('error code =>>', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('error code =>>', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('error code =>>', error);
      } else {
        // some other error happened
        console.log('error code =>>', error);
      }
    } finally {
    }
  };

  const handleGoogleLogout = React.useCallback(() => {}, []);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}>
      <Text>{'Google Login App'}</Text>
      <TouchableOpacity
        style={{
          width: 250,
          height: 50,
          justifyContent: 'center',
          backgroundColor: 'teal',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={handleGoogleLogin}>
        <Text>{'Login With Google'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 250,
          height: 50,
          justifyContent: 'center',
          backgroundColor: 'teal',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={handleGoogleLogout}>
        <Text>{'Logout from Google'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

// export type User = {
//   email: string;
//   familyName: string | null;
//   givenName: string | null;
//   id: string;
//   name: string | null;
//   photo: string | null;
// };

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
