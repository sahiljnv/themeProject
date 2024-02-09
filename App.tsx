import React from 'react';
// import ImageComponent from './src/components/image_component';
// import {View} from 'react-native';
// import GoogleLogInNavigation from './src/navigation/google_login_navigation';
import CommentsComponent from './src/components/comments_components';
// import GoogleSigninContext from './src/context/google_signin_context';
// import {createActor, createMachine} from 'xstate';
// import {Button, View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();

const App = () => {
  // const localImg = require('./src/assets/makima.jpg');
  // const toggleMachine = createMachine({
  //   /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCSAdgIYDGyAlgG5gDEaG2A2gAwC6ioADqrORagQ4gAHogCMAdmY5ms2QDYAnPJXMxADnkAaEAE9EEgKwy5zACyzFFiQGZDAX3s76WXAEEyVWi6Zsh3Xn5BJBFxKRM5JRV5NU0dfQQAJjMcQ1NmdUNE+UNFR2d0VxwCMAB3AAJYZCJkMHKxGgBRagJkepZ2EIC+cgEhUQQzYzELeRsxZVUNbT1xQzEZdRsbRNyJ5iybdUcnEAJUCDghHzB-Hh6+kIGAWjFDeMRr+UScRTf3kdszMXyQE-xiJ5qGdAr1gqABssHkkUmk5Ip1HdYkYJL9-h4KMCuucgv1EIkJIocIllOpCYTlBZ7rMEMtFssbGYJGJEmJJBs0YVsMUypVqrV6iCLuDQrTjJlFDYJOozEsbJYbNCxPJ1PSVmtFBtElsdvYgA */
  //   id: 'toggle',
  //   initial: 'Inactive',
  //   states: {
  //     Inactive: {
  //       on: {
  //         toggle: 'Active'
  //       },
  //     },

  //     Active: {
  //       on: {toggle: 'Inactive'},
  //     },

  //     "new state 1": {
  //       on: {
  //         "Event 1": "Inactive"
  //       }
  //     }
  //   },
  // });
  // const actor = createActor(toggleMachine);
  //
  // Subscribe to snapshots (emitted state changes) from the actor
  // actor.subscribe(snapshot => {
  //   console.log('Value:', snapshot.value);
  // });

  // Start the actor
  // actor.start(); // logs 'Inactive'
  return (
    // <View style={{}}>
    //   {/* <ImageComponent uri={localImg} height={100} width={100} /> */}

    // </View>
    // <GoogleLogInNavigation />
    <QueryClientProvider client={queryClient}>
      <CommentsComponent />
    </QueryClientProvider>
    // <View>
    //   <Button title="onPress" onPress={() => actor.send({type: 'toggle'})} />
    // </View>
  );
};

export default App;
