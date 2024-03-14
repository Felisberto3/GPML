import React, { useContext } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import { AuthContext } from "../context/AuthContext"; 
import Profile from "../screens/home/profile";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const Stack = createNativeStackNavigator();

export default function Navigation({navigation}) {
  const { userInfo } = useContext(AuthContext);
    console.log(userInfo.token);
    const a = true
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false,
        }}
      >
        {userInfo.token ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
