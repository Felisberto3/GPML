import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons"; 
import AppTextInput from "../components/AppTextInput"; 
import { useRouter } from "expo-router";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

const RegisterScreen = ({ navigation: { navigate } }) => {

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genero, setGenero] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  const {isLoading, userInfo, register} = useContext(AuthContext)

  return (
    <SafeAreaView>
      <Spinner
        visible={isLoading}
      />
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 1,
              maxWidth:700,
            }}
          >
            Create Stivy account
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can explore all  Models in Stivy App
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing ,
          }}
        >
          <AppTextInput
          placeholder="Primeiro Nome"
          value={firstName}
          onChangeText={(text) => setFirstName(text)} 
          />
          <AppTextInput 
          placeholder="Ultimo Nome" 
          value={surname}
          onChangeText={(text) => setSurname(text)}
          />

          <AppTextInput 
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)} 
          />
          <AppTextInput 
          placeholder="Password" 
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          />
          <AppTextInput 
          placeholder="Status" 
          value={status}
          onChangeText={(text) => setStatus(text)}
          />
          <AppTextInput 
          placeholder="Genero" 
          value={genero}
          onChangeText={(text) => setGenero(text)}
          />
        </View>

        <TouchableOpacity
          style={{
            padding: 2,
            backgroundColor: Colors.primary,
            marginVertical:  3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={()=>{
            register(firstName,surname,email,genero,status,password)
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            padding: 1,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: 2,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
