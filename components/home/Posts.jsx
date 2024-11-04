import { useState, memo } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PostItems from "./PostItems";

const DATA = [
  { id: "1", title: "Video 1" },
  { id: "2", title: "Video 2" }
  // Add more items as needed
];

const Posts = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const renderItem = ({ item }) => <PostItems title={item.title} />;

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Your data fetching logic here
    // Once the data is fetched, set isRefreshing to false
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000); // Simulating network request
  };

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} onRefresh={handleRefresh} refreshing={isRefreshing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8
  }
});

export default Posts;
