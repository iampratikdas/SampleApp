import React, { useEffect, useRef, memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
// import { useIsInCenterOfScreen } from "@n1ru4l/react-in-center-of-screen";

const PostItems = ({ title }) => {
  return (
    <View style={styles.item}>
      <View style={styles.mainDiv}>
        <View style={styles.subMainDiv}>
          <Video
            style={styles.video}
            source={require("@/assets/videos/vid1.mp4")}
            resizeMode={ResizeMode.COVER}
            shouldPlay={false}
            onPlaybackStatusUpdate={(status) => {
              console.log(status);
            }}
          />
        </View>
        <View style={styles.subMainDiv}>
          <Text>{title}</Text>
        </View>
      </View>
      <View style={styles.mainDiv}>
        <View style={styles.deTailDiv}>
          <Text>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  mainDiv: {
    flex: 1,
    flexDirection: "row",
  },
  subMainDiv: {
    height: 200,
    width: "50%",
    borderWidth: 2,
    borderColor: "blue",
  },
  deTailDiv: {
    width: "100%",
    height: 150,
    borderWidth: 2,
    borderColor: "blue",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default memo(PostItems);
