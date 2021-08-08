import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation} from 'react-native-paper';
import HomePage from './src/navigation/HomePage';
import Explore from './src/navigation/Explore';
import Profile from './src/navigation/Profile';
import Post from './src/features/Post';

// Assets
import homeIcon from './assets/home.png'
import exploreIcon from './assets/explore.png'
import profileIcon from './assets/profile.png'

import powerUSGov from './media/powerUSGov/powerUSGov'
import whatIsElectricity from './media/whatIsElectricity/whatIsElectricity'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message


const homePage = (setAppState) => <HomePage setAppState={setAppState}/>;

const App = () => {
  const [index, setIndex] = useState(0);
  const [appState, setAppState] = useState('normal') //normal or reader (when looking at a post)
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: homeIcon },
    { key: 'explore', title: 'Explore', icon: exploreIcon },
    { key: 'profile', title: 'Profile', icon: profileIcon },
  ]);

  useEffect(()=>{
    alert('Welcome to OurWorld! \nThis is a demo app. Not all features have been fully developped yet.')
  }, [])

  const renderScene = BottomNavigation.SceneMap({
    home: ()=>homePage(setAppState),
    explore: Explore,
    profile: Profile,
  });

  if (appState === 'normal'){
    return (
      <BottomNavigation
        barStyle={{backgroundColor: '#4287f5'}}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    )
  }
  else {
    return (
      <View style={{flex: 1}}> 
          <Post item={appState} setAppState={setAppState} itemRecommended={appState.title !== 'How is power divided in the United States government? - Belinda Stutzman'? powerUSGov: whatIsElectricity} style={appState.style}/>
      </View>
    )
  }
};

export default App