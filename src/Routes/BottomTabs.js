import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MusicList from '../Screen/MusicList';
import Player from '../Screen/Player';
import PlayList from '../Screen/PlayList';

const Tab = createBottomTabNavigator();

const MyTabs=()=>{
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Player" component={Player} />
      <Tab.Screen name="List" component={MusicList} />
      <Tab.Screen name="PlayList" component={PlayList} />
    </Tab.Navigator>
  );
}

export default MyTabs;