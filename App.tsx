import {View} from 'react-native';
import React from 'react';
import ImageComponent from './src/components/image_component';

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <ImageComponent
        uri={
          'https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x21600x10800.jpg'
        }
        height={200}
        width={200}
        borderRadius={100}
      />
    </View>
  );
};

export default App;
