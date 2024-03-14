import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable, 
  TextInput,
  Button,
} from "react-native";
import React, {  useContext } from "react"; 
import { Ionicons } from "@expo/vector-icons"; 
import { AntDesign } from "@expo/vector-icons"; 
import { useRouter } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay"; 
import { AuthContext } from "../../context/AuthContext";

const HomeScreen = () => { 
  const {userInfo, isLoading, signOut} = useContext(AuthContext)  
  
  
  const router = useRouter();
  

  const handleLogout = async () => {
    try {
      await signOut(navigation);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop:30,
          backgroundColor:'#ccc'
        }}
      >
        <Text>Welcome {userInfo.usuario.firstName}</Text>
        <View>
          <Spinner visible={isLoading}/>
          <Button title="Logout" color="red" onPress={handleLogout}/>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 30,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ marginLeft: 10 }}
            name="search1"
            size={20}
            color="black" 
          />
          <TextInput style={{ 
          }} placeholder="pesquisar" />
        </Pressable>

        <Ionicons 
        onPress={() => navigate("Profile")} 
        name="chatbox-ellipses-outline" size={24} color="black" />
      </View>
 
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
