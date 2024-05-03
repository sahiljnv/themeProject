import {ActivityIndicator, Image, ImageProps, View} from 'react-native';
import React from 'react';
import {myStyle} from './style';
import {FileType} from '../../utils/Enums';
interface Props extends ImageProps {
  uri: string | any;
  height: number;
  width: number;
  file: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
const ShowFileComponent = (props: Props) => {
  const {uri, file, ...style} = props;
  const [isLoading, setLoading] = React.useState(true);
  const [isValidUri, setValidUri] = React.useState(true);
  const setDefaultUri = (fileType: string) => {
    switch (fileType) {
      case FileType.IMAGE:
        return require('../../assets/default_image.jpg');
      case FileType.AUDIO:
        return require('../../assets/default_audio.jpg');
      case FileType.VIDEO:
        return require('../../assets/default_video.png');
      case FileType.PDF:
        return require('../../assets/default_pdf.jpeg');
      default:
        return require('../../assets/default_pdf.jpeg');
    }
  };
  const loadIMageWithPlaceholder = (imageUrl: string) => {
    if (typeof imageUrl !== 'string') {
      return imageUrl;
    }
    if (imageUrl) {
      console.log(imageUrl);
      return {uri: imageUrl};
    }
    return setDefaultUri(file);
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

export default ShowFileComponent;
