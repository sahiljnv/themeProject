import {ActivityIndicator, Image, ImageProps, View} from 'react-native';
import React from 'react';
import {myStyle} from './style';
interface ImageComponentProps extends ImageProps {
  uri: string;
}

const ImageComponent = (props: ImageComponentProps) => {
  const {uri, ...style} = props;
  const [isLoading, setLoading] = React.useState(true);
  const loadIMageWithPlaceholder = (imageUrl: string) => {
    if (imageUrl) {
      return {uri: imageUrl};
    }
    return require('../../assets/download.jpeg');
  };

  return (
    <View style={myStyle.mainContainer}>
      {isLoading ? (
        <View style={[style, myStyle.indicatorContainer]}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={[style, myStyle.indicatorStyle]}
          />
        </View>
      ) : (
        ''
      )}
      <Image
        source={loadIMageWithPlaceholder(uri)}
        style={style}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </View>
  );
};

export default ImageComponent;
