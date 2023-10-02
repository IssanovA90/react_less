import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from './components/SignInScreen';
import { SignUpScreen } from './components/SignUpScreen'
import { ToDoApp } from "./components/ToDoApp";
import { AuthorizationScreen} from'./components/AuthorizationScreen';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthorizationScreen">
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: 'Регистрация' }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: 'Вход' }}
        />
        <Stack.Screen
          name="AuthorizationScreen"
          component={AuthorizationScreen}
          options={{ title: 'Авторизация' }}
        />
        <Stack.Screen
          name="ToDoScreen"
          component={ToDoApp}
          options={{ title: 'Задачи' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
