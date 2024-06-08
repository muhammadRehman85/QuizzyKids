import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image, ActivityIndicator, StyleSheet } from "react-native";

const CategoriesScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const categories = route.params.categories;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / (screenWidth > 600 ? 3 : 2) - 20;

  useEffect(() => {
    // Simulate a network request or any async operation
    setTimeout(() => {
      setLoading(false);
    }, 2000); // You can adjust the timeout as needed
  }, []);

  return (
    <>
      <View style={styles.wrapper}>
        <Image source={route.params.image} style={styles.headerImage} />
        {loading ? (
          <ActivityIndicator size="large" color="#8e44ad" style={styles.loader} />
        ) : (
          <FlatList
            data={categories}
            numColumns={screenWidth > 600 ? 3 : 2}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(item.route, {
                    title: item.title,
                    questions: item.questions,
                  })
                }
                style={[styles.itemContainer, { width: itemWidth, height: itemWidth / 2 }]}
              >
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#8e44ad",
  },
  itemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoriesScreen;
