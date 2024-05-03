import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Profile() {
  return (
   <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'blue',
          borderTopLeftRadius: 200,
          position: 'absolute',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'white',
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'white',
            position: 'absolute',
            top: 60,
            left: 60,
          }}
        />
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 10,
            left: 10,
          }}
        />
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
