import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import { name as appName } from "../../app.json";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#9DD6EB" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
    </Tabs>
  );
}
