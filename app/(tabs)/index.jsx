import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from "react-native";
import { Stack, useNavigation } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import { PaperProvider, MD3LightTheme as DefaultTheme, Button, Dialog, Portal, Provider } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";

const { width: screenWidth } = Dimensions.get("window");

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

const carouselItems = [
  { title: "Slide 1", description: "This is the first slide.", image: { uri: "https://images.unsplash.com/photo-1580893207371-9ae163385856?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } },
  { title: "Slide 2", description: "This is the second slide.", image: { uri: "https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } },
  { title: "Slide 3", description: "This is the third slide.", image: { uri: "https://images.unsplash.com/photo-1581094481644-f2ab64522498?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } },
];

const Index = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  console.log("status====>", visible);
  return (
    <PaperProvider theme={theme}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Carousel
          loop
          width={screenWidth}
          height={200}
          autoPlay={true}
          data={carouselItems}
          scrollAnimationDuration={2000}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
            </View>
          )}
        />

        {/* eBook Card */}
        <View style={styles.ebookCard}>
          <Text style={styles.newTag}>NEW</Text>
          <Image source={require("../../assets/images/final_cover.jpg")} style={styles.ebookImage} />
          <Text style={styles.ebookTitle}>পঞ্চবাণ</Text>
          <Text style={styles.ebookPrice}>Rs 40 /$5</Text>
          <Button mode="contained" onPress={showDialog}>
            Open eBook
          </Button>
        </View>
        {/* <View style={styles.ebookCard}>
          <Text style={styles.newTag}>NEW</Text>
          <Image source={{ uri: "https://example.com/ebook-image.jpg" }} style={styles.ebookImage} />
          <Text style={styles.ebookTitle}>E-Book Title</Text>
          <Text style={styles.ebookPrice}>$9.99</Text>
          <Button mode="contained" onPress={showDialog}>
            Open eBook
          </Button>
        </View> */}

        {/* Dialog Box */}
        {/* <Provider> */}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Open eBook</Dialog.Title>
            <Dialog.Content>
              <Text>Enter name to proceed:</Text>
              {/* Add TextInput for name here */}
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        {/* </Provider> */}
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  carouselItem: {
    width: screenWidth,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
    gap: 10,
  },
  carouselImage: {
    width: screenWidth,
    height: 200,
    borderRadius: 10,
  },
  ebookCard: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    // height: "100%",
  },
  newTag: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  ebookImage: {
    width: "100%",
    height: 400,
    borderRadius: 8,
    marginBottom: 10,
  },
  ebookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  ebookPrice: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
});

export default Index;
