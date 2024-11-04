import React, { useState, useEffect } from "react";
import * as ScreenCapture from "expo-screen-capture";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { StyleSheet, Text, View, Dimensions, Button, Linking, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import Login from "@/components/Login";
let image = {
  uri: "https://i.pinimg.com/enabled/564x/3c/69/e0/3c69e0b3273e13dfd7f50e014ca3027e.jpg",
};

function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.profileContainer}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.profContent}>
            <View style={styles.container}>
              <Image style={styles.imageStyle} source={require("@/assets/images/partial-react-logo.png")} />
              <Text style={{ fontSize: 20, marginTop: 10, color: "white" }}>Panchmeshali</Text>
              <Text style={{ fontSize: 12, color: "white" }}> @electrical</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="About" onPress={() => Linking.openURL("https://google.com")} />
      </DrawerContentScrollView>
      <View style={styles.bottomContent}>
        <Text style={{ fontSize: 16, margin: 10 }}>This is owned by Panchmeshali</Text>
      </View>
    </View>
  );
}

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   // Prevent screenshots
  //   const preventScreenshot = async () => {
  //     await ScreenCapture.preventScreenCaptureAsync();
  //   };

  //   preventScreenshot();

  //   // Allow screenshots again when the component is unmounted
  //   return () => {
  //     ScreenCapture.allowScreenCaptureAsync();
  //   };
  // }, []);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          swipeEdgeWidth: 0,
          drawerStyle: {
            width: "70%",
          },
          drawerPosition: "left",
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            title: "Panchmeshali",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#9DD6EB",
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  profContent: {
    width: "calc(100% - 20px)",
    height: "100%",
    margin: 20,
    flex: 1,
  },
  slideText: {
    fontSize: 24,
    color: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  drawerContainer: {
    flex: 1,
    height: "100%",
    // borderWidth: 2,
    position: "absolute",
    width: "100%",
  },
  bottomContent: {
    position: "relative",
    bottom: 0,
    top: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  profileContainer: {
    width: "100%",
    height: 200,
    color: "white",
    borderRadius: 100,
    shadowColor: "black",
    elevation: 10,
    marginBottom: 10,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
