import {ActivityIndicator, Image, ImageProps, View} from 'react-native';
import React from 'react';
import {myStyle} from './style';
interface ImageComponentProps extends ImageProps {
  uri: string | any;
  height: number;
  width: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const ImageComponent = (props: ImageComponentProps) => {
  const {uri, ...style} = props;
  const [isLoading, setLoading] = React.useState(true);
  const [isValidUri, setValidUri] = React.useState(true);
  const loadIMageWithPlaceholder = (imageUrl: string) => {
    if (typeof imageUrl !== 'string') {
      return imageUrl;
    }
    if (imageUrl) {
      console.log(imageUrl);
      return {uri: imageUrl};
    }
    return require('../../assets/default_img.jpeg');
  };
  return (
    <View style={myStyle.mainContainer}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={[style, myStyle.indicatorStyle]}
        />
      ) : (
        false
      )}
      <Image
        source={loadIMageWithPlaceholder(isValidUri ? uri : '')}
        style={style}
        height={props.height}
        width={props.width}
        resizeMode={props.resizeMode ? props.resizeMode : 'cover'}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoad={() => {
          setLoading(false);
        }}
        onError={error => {
          if (error) {
            setLoading(false);
            setValidUri(false);
          }
        }}
      />
    </View>
  );
};

export default ImageComponent;
