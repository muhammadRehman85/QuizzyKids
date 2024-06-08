import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth"; // Updated import

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [displayName, setDisplayName] = useState("");
  const handleRegister = async () => {
    // =======================try==========================
    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Send email verification
          sendVerificationEmail(user);
          updateProfile(auth.currentUser, {
            displayName: displayName.trim(),
          });
          console.log(user);
        })

        .catch((error) => {
          console.log("Error:", error);
          // Handle error
        });
    } catch (error) {
      // =========================catch=============================================
      console.log("Error:", error);
    }
  };
  // =============================send verification email function ==================
  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        // Email verification sent
        console.log("Verification email sent");
        // Show alert to inform the user
        setMessage("Verification email sent! Please verify your email.");
        showAlert();
      })
      .catch((error) => {
        // Error occurred while sending email verification
        console.log("Error sending verification email:", error);
      });
  };
  // ===========================Alert of Registration==================================
  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
      navigation.navigate("login"); // Navigate to login screen after sending verification email
    }, 1500);
  };
  // ===========================UI of Registration Screen ==============================
  return (
    <View style={styles.container}>
      <View style={styles.innerConatiner}>
        <Image
          source={require("../../assets/Home/QuizzyKids.png")}
          style={styles.img}
        />
      </View>
      {/* -------------------inputs fields------------------------ */}
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        value={displayName}
        onChangeText={(value) => setDisplayName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      {/* -----------------------------Button-------------- */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      {alertVisible && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{message}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8e44ad",
  },
  innerConatiner: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  img:{ 
    width: "100%",
     height: "100%"
     },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#341f97",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  alertContainer: {
    width: "88%",
    height: 150,
    position: "absolute",
    top: 170,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  alertText: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
