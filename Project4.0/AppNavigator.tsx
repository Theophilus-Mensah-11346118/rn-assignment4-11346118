
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Loginpage';
import Homepage from './Homepage';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
