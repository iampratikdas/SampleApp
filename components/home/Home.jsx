import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import Posts from "./Posts";
import { ScrollView } from 'react-native-virtualized-view';
const { width: screenWidth } = Dimensions.get('window');

const data = [
    { id: 1, text: 'Slide 1' },
    { id: 2, text: 'Slide 2' },
    { id: 3, text: 'Slide 3' },
    // Add more slides as needed
];

const Home = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <ScrollView contentContainerStyle={styles.root}>
            <View style={styles.container}>
                <Carousel
                    width={screenWidth - 20}
                    height={200}
                    autoPlay={true}
                    data={data}
                    autoPlayInterval={6000}
                    scrollAnimationDuration={3000}
                    parallaxScrollingOffset={50}
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}
                    parallaxScrollingScale={2}
                    renderItem={({ item }) => (
                        <View style={styles.slide}>
                            <Text style={styles.slideText}>{item.text}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.postContainer}>
                <Posts />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        marginVertical: 10,
        marginHorizontal: 10,
        height: 200,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slideText: {
        fontSize: 24,
        color: '#fff',
    },
    postContainer: {
        width: '100%',
        flex: 1,
    }
});

export default Home;
