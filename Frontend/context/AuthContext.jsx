import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = (firstName,surname,email,genero,status,password) => {
    setIsLoading(true);

    axios.post(`${BASE_URL}usuario/create`, 
    {
        firstName,
        surname,
        email,
        genero,
        status,
        password
    })
      .then((res) => {
        const newUserInfo = res.data;
        setUserInfo(newUserInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(newUserInfo));
        setIsLoading(false);
        navigation.navigate("Home", { userInfo: newUserInfo });
      })
      .catch((err) => {
        console.log(`Error ao Registrar este Usuario ${err}`);
        setIsLoading(false);
      });
  };

  const login = async ( email, password ) => {
    console.log(navigation);
    try {
      setIsLoading(true);
  
      const response = await axios.post(`${BASE_URL}usuario/auth`, { email, password });
      
      const newUserInfo = response.data;
      console.log(newUserInfo);
  
      setUserInfo(newUserInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(newUserInfo)); 
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um código de status diferente de 2xx
        Alert.alert(`Login Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        console.error('No response received from the server.');
      } else {
        // Algo aconteceu na configuração da solicitação que causou o erro
        console.error('Error setting up the request:', error.message);
      }
      setIsLoading(false);
    }
  };
  
  const signOut = async () =>{
    try {
      setUserInfo(null)
      await AsyncStorage.removeItem('token')
      navigation.navigate('Login')
    } catch (error) {
      console.log('Erro ao fazer logout:', error);
    }
  }
  return (
    <AuthContext.Provider value={{
      isLoading,
      userInfo,
      register,
      login,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};
