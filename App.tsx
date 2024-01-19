import React from 'react';
import ImageComponent from './src/components/image_component';
import {View} from 'react-native';
// import GoogleLogInNavigation from './src/navigation/google_login_navigation';
// import GoogleSigninContext from './src/context/google_signin_context';

const App = () => {
  const localImg = require('./src/assets/makima.jpg');
  return (
    <View style={{}}>
      <ImageComponent uri={localImg} height={100} width={100} />
    </View>
  );
};

export default App;
