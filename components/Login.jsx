import React, { useState , useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import * as ScreenCapture from 'expo-screen-capture';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    if (username === "testuser" && password === "1234") {
      alert("Login Successful!");
      console.log("login====>", onLogin);
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/enabled/564x/ef/70/ea/ef70ea9a8ad50bf75659128de3846d2c.jpg" }} // Put your background image URL here
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity> */}
        <Text style={styles.headerText}>Welcome Back!</Text>
        <Text style={styles.subHeaderText}>Enter Your Username</Text>

        <TextInput style={styles.input} placeholder="testuser" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="1234" value={password} onChangeText={setPassword} secureTextEntry={true} />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Forgot password logic here")}>
          <Text style={styles.forgotText}>Forgotten Password? Or Create a New Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background to make text visible
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#000", // Color should contrast with background image
  },
  subHeaderText: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    color: "#000",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  loginButton: {
    height: 50,
    backgroundColor: "#76c900",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotText: {
    color: "#999",
    marginTop: 20,
    textAlign: "center",
  },
});

export default Login;
