import { View, Text, Image, ImageBackground,TouchableOpacity,StatusBar  } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import styles from "../style/QuestionStyle";
import { ProgressBar } from "react-native-paper";
// import "react-native-gesture-handler";

const Quiz_Questions = ({ navigation, route }) => {
  const data = route.params.QuizQuesData;
  const title = route.params.title;
  const [progress, setProgress] = useState(0);
  const progressBarColor = "#341f97";
  const allQuestion = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctOption, setCorrectOption] = useState(null);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
  const [isDisabledOption, setisDisabledOption] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextBtn, setshowNextBtn] = useState(false);
  const [timer, setTimer] = useState(60); // 2 minutes and 3 seconds in seconds

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        handleNext();
      }
    }, 1000); // update timer every second

    return () => clearTimeout(timerId); // cleanup on unmount
  }, [timer]);

  const validateAnswer = (selectedOption) => {
    const correct_option = allQuestion[currentQuestionIndex].correct_option;
    setCurrentSelectedOption(selectedOption);
    setCorrectOption(correct_option);
    setisDisabledOption(true);
    setshowNextBtn(true);

    if (selectedOption === correct_option) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setProgress(progress + 0.1);

    if (currentQuestionIndex === allQuestion.length - 1) {
      setCurrentQuestionIndex(0);
      setCorrectOption(null);
      setCurrentSelectedOption(null);
      setisDisabledOption(false);
      setshowNextBtn(false);
      navigation.navigate("Result", { score: score,title:title });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCorrectOption(null);
      setshowNextBtn(false);
      setisDisabledOption(false);
      setTimer(40); // Reset timer to 2 minutes and 3 seconds
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} s`;
  };

  return (
    <>
      <StatusBar backgroundColor="#8e44ad" barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: "#8e44ad" }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            borderWidth: 5,
            borderColor: "#341f97",
            backgroundColor: "white",
            position: "absolute",
            top: 110,
            left: 150,
            zIndex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{fontSize:10,color:'grey'}}>{formatTime(timer)}</Text>
        </View>
        <View style={styles.Wrapper}></View>
        <View style={{ alignItems: "center", paddingBottom: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            {title}
          </Text>
        </View>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
          color={progressBarColor}
          style={{ width: "90%", height: 15, marginLeft: 10, borderRadius: 10 }}
        />
        <View style={{ paddingTop: 10, paddingLeft: 5 }}>
          <Text style={{ fontSize: 12 }}>
            {currentQuestionIndex + 1}/{allQuestion.length}
          </Text>
        </View>
        <View style={styles.choices}>
          <View style={styles.questionsWrapper}>
            <Text style={styles.questiontext}>
              {allQuestion[currentQuestionIndex].question}
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            {allQuestion[currentQuestionIndex]?.options.map((option) => (
              <TouchableOpacity
                key={option}
                disabled={isDisabledOption}
                style={{
                  width: "90%",
                  minHeight: 45,
                  borderRadius: 10,
                  marginTop: 20,
                  marginLeft: 15,
                  flexDirection: "row",
                  borderWidth: 2.5,
                  borderColor: "black",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  justifyContent: "space-between",
                  borderColor:
                    option === currentSelectedOption
                      ? option === correctOption
                        ? "green"
                        : "red"
                      : "white",
                  backgroundColor:
                    option === currentSelectedOption
                      ? option === correctOption
                        ? "rgba(0,255,0,0.2)"
                        : "rgba(255,0,0,0.1)"
                      : "#8e44ad",
                }}
                onPress={() => validateAnswer(option)}
              >
                <Text
                  style={{ fontSize: 16, letterSpacing: 2, color: "black" }}
                >
                  {option}
                </Text>
                {option === currentSelectedOption &&
                option === correctOption ? (
                  <View style={{ height: 30 }}><Text>T</Text>
                    {/* <Ionicons name="checkmark-circle" size={32} color="green" /> */}
                  </View>
                ) : option === currentSelectedOption ? (
                  <View><Text>W</Text>
                    {/* <Ionicons name="close-circle" size={32} color="red" /> */}
                  </View>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
          {showNextBtn && (
            <View>
              <TouchableOpacity onPress={handleNext} style={styles.nextbtn}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default Quiz_Questions;
