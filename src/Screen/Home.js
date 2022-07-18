import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MyTabs from '../Routes/BottomTabs';

const StatusBar = getStatusBarHeight()

const Home = () => {
   return (
      <View style={styles.container}>
      <MyTabs/>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: StatusBar,
   }
})

export default Home;
