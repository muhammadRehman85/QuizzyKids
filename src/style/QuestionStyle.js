import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  // --------WRAPPER------------
  Wrapper: {
    flex: 1,
    backgroundColor: "#8e44ad",

    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  questionsWrapper: {
    width: "100%",
    padding: 10,
    minHeight: "20%",
    marginTop: 15,

    borderRadius: 30,
  },
  questiontext: {
    fontSize: 18,
    fontWeight: "bold",
  },

  choices: {
    width: "92%",
    height: "75%",
    padding: 10,
    marginBottom: 50,
    marginLeft: 15,
    backgroundColor: "white",
    // borderTopLeftRadius:60,?
    // borderWidth:1,
    borderRadius: 30,
  },

  nextbtn: {
    width: "90%",
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 15,

    backgroundColor: "#341f97",
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  btnText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
export default styles;
