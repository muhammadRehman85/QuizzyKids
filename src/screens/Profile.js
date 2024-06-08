import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

function Profile({ navigation }) {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userPhotoURL, setUserPhotoURL] = useState("");
  const [userProgress, setUserProgress] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading state
  const firestore = getFirestore();

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUserDisplayName(currentUser.displayName || "No Display Name");
      setUserPhotoURL(currentUser.photoURL || "");

      const fetchProgress = async () => {
        try {
          const q = query(
            collection(firestore, "Progress"),
            where("userEmail", "==", currentUser.email)
          );
          const querySnapshot = await getDocs(q);
          const progressData = querySnapshot.docs.map((doc) => doc.data());
          setUserProgress(progressData);
          setIsLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
          console.error("Error fetching progress:", error);
          setIsLoading(false); // Set loading state to false in case of error
        }
      };

      fetchProgress();
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      navigation.navigate("login"); // Navigate to login screen after logout
    } catch (error) {
      console.log("Error logging out:", error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        width: "95%",
        minHeight: "10%",
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#8e44ad",
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 100, height: 100, marginTop: "8%", marginLeft: "3%" }}
        source={require("../../assets/Passed.png")}
      />
      <View style={{ marginLeft: 10, padding: 10 }}>
        <Text style={{ color: "#8e44ad", fontWeight: "bold", marginTop: 5 }}>
          Quiz Titile:
        </Text>
        <Text>{item.title}</Text>
        <Text style={{ color: "#8e44ad", fontWeight: "bold", marginTop: 5 }}>
          Total Marks:
        </Text>
        <Text>10</Text>
        <Text style={{ color: "#8e44ad", fontWeight: "bold", marginTop: 5 }}>
          Obtained Marks:
        </Text>
        <Text>{item.score}</Text>
      </View>
    </View>
  );

  // Render loading indicator while data is being fetched
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: "#341f97",fontWeight:'bold' }}>loading</Text>
        <ActivityIndicator size="large" color="#8e44ad" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          width: "100%",
          height: "30%",
          backgroundColor: "#8e44ad",
          padding: 40,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleLogout}
          style={{ position: "absolute", top: 30, left: 15 }}
        >
          <Image
            source={require("../../assets/logout.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        {userPhotoURL ? (
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={{ uri: userPhotoURL }}
          />
        ) : (
          <Image
            source={require("../../assets/user.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
        )}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 5,
            textAlign: "center",
          }}
        >
          {userDisplayName}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        {userProgress.length > 0 ? (
          <FlatList
            data={userProgress}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>No progress data available</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
