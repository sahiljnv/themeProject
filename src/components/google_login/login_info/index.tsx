import {Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../../../navigation/google_login_navigation';
import {
  GoogleinfoContextType,
  GoogleinfoContext,
} from '../../../context/google_signin_context';
import ImageComponent from '../../image_component';
import {style} from './style';

type Props = NativeStackScreenProps<StackProps, 'LoginInfo'>;
const LoginInfo = (props: Props) => {
  const {} = props;
  const useGoogleInfo =
    React.useContext<GoogleinfoContextType>(GoogleinfoContext);
  return (
    <View style={style.mainContainer}>
      <ImageComponent
        uri={useGoogleInfo.userInfo.photo ?? ''}
        height={200}
        width={200}
        borderRadius={100}
      />
      <Text style={style.textStyle}>
        User Name: {useGoogleInfo.userInfo.name}
        {'\n'}Email: {useGoogleInfo.userInfo.email}
      </Text>
    </View>
  );
};

export default LoginInfo;

// const styles = StyleSheet.create({});
