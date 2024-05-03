import {View} from 'react-native';
import React from 'react';
import ShowFileComponent from './src/components/show_file_component';
import {FileType} from './src/utils/Enums';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ShowFileComponent
        height={200}
        width={200}
        uri={
          'https://docs.google.com/spreadsheets/d/17vGMLYXrMrW_KdABuyX4DW42XsQD9-He4LJD4TyNkhw/edit#gid=263571114'
        }
        file={'audio'}
      />
    </View>
  );
};

export default App;
