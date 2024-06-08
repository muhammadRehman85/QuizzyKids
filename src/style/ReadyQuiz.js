import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    // --------WRAPPER------------
  startWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
//   ---------UPPER SECTION-------
  upperSection: {
    height: "35%",
  },
// ----------LOWER SECTION--------
  lowerSection: {
    // height: "20%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
//   -------UPPER SECTION IMAGE WRAPPER---
  imageWrapper: {
    width: "100%",
    height: 150,
  },
  img: {
    width: "80%",
    height: "100%",
    margin: 60,
  },

  headingSection: { width: "100%", marginTop: 70, marginLeft: 30 },
//   --------------PLAY BUTTON------------
  playbtn: {
    width: "100%",
    height: 55,
    borderRadius: 55,
    backgroundColor: "#004aad",
    background: "linear-gradient(to right, #004aad, #002a5d)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
//   -------------LOWER SECTION IMAGE-----------------
  imageWrapper2: {
    width: "50%",
    height: 100,
   
  },
  img2: {
    width: 120,
    height: 120,
    marginLeft: 20,
  },
//   ---------BACK BUTTON
  backbtn: {
    width: 70,
    height: 30,
    borderColor:'black',
    borderRadius:10,
    marginTop: 40,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
  },
  backtxt: {
    color: "black",
    fontSize: 13,
    fontWeight:'bold'
  },
});
export default styles;
