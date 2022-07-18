import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screen/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
