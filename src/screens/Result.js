import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const Result = ({ navigation, route }) => {
  console.log(route);
  const score = route.params.score;
  const title = route.params.title;
  console.log(title)
  const userEmail = getAuth().currentUser.email;
  const firestore = getFirestore();

  useEffect(() => {
    if (score > 6) {
      // Store progress data in Firestore
      const storeProgress = async () => {
        try {
          const docRef = await addDoc(collection(firestore, "Progress"), {
            userEmail: userEmail,
            title: title,
            score: score,
            timestamp: serverTimestamp(),
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };

      storeProgress();
    }
  }, []);

  let message;

  if (score >= 5) {
    message = "Congratulations!";
  } else {
    message = "Try Again";
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.BackBtn}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text
          style={styles.BackBtnText}
        >
          Go Back
        </Text>
      </Pressable>
      <View style={styles.upperWrp}>
        <Image
          source={require("../../assets/Home/QuizzyKids.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.lowerWrp}>
        {score > 7 ? (
          <>
            <Text
              style={styles.lowerWrpText}
            >
              Status: Passed
            </Text>
            <Image
              source={require("../../assets/Home/PASS4.png")}
              style={styles.resultImage}
            />
          </>
        ) : (
          <>
            <Text
              style={styles.failedText}
            >
              Status: Failed
            </Text>
            <Image
              source={require("../../assets/Home/fail.png")}
              style={styles.resultImage}
            />
          </>
        )}
        <View
          style={styles.resultBoard}
        >
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Total Questions: 10
          </Text>
          <Text style={{ fontSize: 20, color: "green", marginBottom: 10 }}>
            Correct Answers: {score}
          </Text>
          <Text style={{ fontSize: 20, color: "red" }}>
            Wrong Answers : {10 - score}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e44ad",
    justifyContent: "center",
    alignItems: "center",
  },
  BackBtn:{
    width: 70,
    height: 30,
    borderColor: "black",
    borderRadius: 10,
    position: "absolute",
    top: 35,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  BackBtnText:{
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },
  upperWrp: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerWrp: {
    width: "100%",
    height: "70%",
    backgroundColor: "#F2FFF2",
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage:{ 
    width: 100,
     height: 100 },
  lowerWrpText:{
    color: "#8e44ad",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  resultImage:{ 
    width: 200,
     height: 200,
      marginBottom: 60 },
  failedText:{
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  resultBoard:{
    borderWidth: 5,
    borderColor: "#8e44ad",
    borderRadius: 10,
    padding: 15,
  },
  resultText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#8e44ad",
  },
  message: {
    fontSize: 20,
    marginTop: 20,
    color: "blue", // You can change the color as per your preference
  },
});

export default Result;
