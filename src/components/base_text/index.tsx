import React from 'react';
import {Text, TextProps} from 'react-native';
import {myStyle} from './style';

type BaseTextProps = TextProps & {
  children: React.ReactNode;
  fontSize: number;
  color: string;
};

const BaseText = (props: BaseTextProps) => {
  const {children, fontSize, color, style} = props;
  const textStyle = myStyle(fontSize, color);
  return <Text style={[textStyle.textStyle, style]}>{children}</Text>;
};

export default BaseText;
