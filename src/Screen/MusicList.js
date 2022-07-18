import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MusicList = () => {
   return (
      <View style={styles.musicListContainer}>
         <Text>MusicList</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   musicListContainer: {
      flex: 1,
      justifyContent: 'center'
   }
})

export default MusicList;
