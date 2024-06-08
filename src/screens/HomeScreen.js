import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { db } from "../../App";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [AIData, setAIData] = useState([]);
  const [EnglishData, setEnglishData] = useState([]);
  const [bioData, setBioData] = useState([]);
  const [chemistryData, setChemistryData] = useState([]);
  const [csData, setCsData] = useState([]);
  const [mathData, setMathData] = useState([]);
  const [gkData, setGkData] = useState([]);

  const firestore = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const islamicSnapshot = await getDocs(collection(db, "IslmicCategores"));
        const islamicData = islamicSnapshot.docs.map((doc) => doc.data());
        setData(islamicData);

        const aiSnapshot = await getDocs(collection(db, "AICategories"));
        const aiData = aiSnapshot.docs.map((doc) => doc.data());
        setAIData(aiData);

        const englishSnapshot = await getDocs(collection(db, "EnglishCategories"));
        const englishData = englishSnapshot.docs.map((doc) => doc.data());
        setEnglishData(englishData);

        const csSnapshot = await getDocs(collection(db, "ComputerCategories"));
        const csData = csSnapshot.docs.map((doc) => doc.data());
        setCsData(csData);

        const gkSnapshot = await getDocs(collection(db, "GKCategories"));
        const gkData = gkSnapshot.docs.map((doc) => doc.data());
        setGkData(gkData);

        const mathSnapshot = await getDocs(collection(db, "MathsCategories"));
        const mathData = mathSnapshot.docs.map((doc) => doc.data());
        setMathData(mathData);

        const chemistrySnapshot = await getDocs(collection(db, "ChemistyCategories"));
        const chemistryData = chemistrySnapshot.docs.map((doc) => doc.data());
        setChemistryData(chemistryData);

        const bioSnapshot = await getDocs(collection(db, "BioCategories"));
        const bioData = bioSnapshot.docs.map((doc) => doc.data());
        setBioData(bioData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const categories = [
    {
      title: "Islamic Knowledge",
      route: "CategoriesScreen",
      image: require("../../assets/Home/Islamic.png"),
      categories: data,
    },
    {
      title: "English Knowledge",
      route: "CategoriesScreen",
      image: require("../../assets/Home/english.png"),
      categories: EnglishData,
    },
    {
      title: "Computer Science",
      route: "CategoriesScreen",
      image: require("../../assets/Home/cs.png"),
      categories: csData,
    },
    {
      title: "General Knowledge",
      route: "CategoriesScreen",
      image: require("../../assets/Home/gk.png"),
      categories: gkData,
    },
    {
      title: "Artificial Intelligence",
      route: "CategoriesScreen",
      image: require("../../assets/Home/Ai.png"),
      categories: AIData,
    },
    {
      title: "Mathematics Knowledge",
      route: "CategoriesScreen",
      image: require("../../assets/Home/maths.png"),
      categories: mathData,
    },
    {
      title: "Chemistry Knowledge",
      route: "CategoriesScreen",
      image: require("../../assets/Home/chemistry.png"),
      categories: chemistryData,
    },
    {
      title: "Biology Knowledge",
      route: "CategoriesScreen",
      image: require("../../assets/Home/bio.png"),
      categories: bioData,
    },
  ];

  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / 2 - 20;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(item.route, {
          categories: item.categories,
          image: item.image,
        })
      }
      style={[styles.itemContainer, { width: itemWidth, height: itemWidth }]}
    >
      <View style={{ paddingLeft: 10 }}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.wrapper}>
        <Pressable
          onPress={() => navigation.navigate("Profile")}
          style={styles.profile}
        >
          <Text style={styles.profileText}>Profile</Text>
        </Pressable>
        <View style={styles.upperContainer}>
          <View style={styles.upperContainerImg}>
            <Image
              source={require("../../assets/Home/QuizzyKids.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
          numColumns={2}
          style={{ backgroundColor: "#8e44ad" }}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8e44ad",
  },
  profile: {
    backgroundColor: "#8e44ad",
    paddingTop: 35,
    paddingLeft: 10,
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  upperContainer: {
    height: 190,
    backgroundColor: "#8e44ad",
    alignItems: "center",
    justifyContent: "center",
  },
  upperContainerImg: {
    width: "40%",
    height: "80%",
  },
  itemContainer: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  itemImage: {
    width: 90,
    height: 90,
  },
  itemText: {
    color: "grey",
    fontWeight: "bold",
    marginTop: 10,
  },
});
