import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';  // Tela de login
import ExpenseScreen from './pages/ExpenseScreen';  // Tela de despesas

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExpenseScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ExpenseScreen" component={ExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}