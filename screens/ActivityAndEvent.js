import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, Image, TextInput } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { ACTIVITIES } from "../data/dummy-data";
import { LinearGradient } from "expo-linear-gradient";

function infoItem(itemData) {
  return (
    <View style={styles.infoContainer}>
      <View>
        <Image
          source={itemData.item.image}
          resizeMode="stretch"
          style={styles.imageItem}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{itemData.item.category}</Text>
        <Text style={[styles.textInfo, {color: 'gray'}]}>{itemData.item.date}</Text>
        <Text style={[styles.textInfo, {fontWeight: 'bold'}]}>{itemData.item.title}</Text>
        <View style={styles.iconAndTextContainer}>
          <Ionicons name="location" size={20} color="gray" />
          <Text style={styles.locationAndSlotText}>{itemData.item.location}</Text>
        </View>
        <View style={styles.iconAndTextContainer}>
          <MaterialCommunityIcons name="account" size={20} color="gray" />
          <Text style={styles.locationAndSlotText}>{itemData.item.slot}</Text>
        </View>
      </View>
    </View>
  );
}

function ActivityAndEvent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategory = ACTIVITIES.filter((item) => 
    item.category.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <LinearGradient
      colors={["rgb(348,169,81)", "rgb(348,169,81)", "rgb(160,202,253)", "rgb(160,202,253)"]}
      locations={[0, 0.15, 0.15, 1]}
      style={styles.gradient}
    >
      <ImageBackground
        source={require("../assets/images/element_curve_blue.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.image}
      >
        <TextInput
          style={styles.inputContainer}
          placeholder="Search activities & events"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <FlatList
          data={filteredCategory}
          keyExtractor={(item) => item.id}
          renderItem={infoItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ImageBackground>
    </LinearGradient>
  );
}

export default ActivityAndEvent;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    marginTop: 50,
    height: 100,
    width: "100%",
  },
  gradient: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 4,
  },
  infoContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 4,
  },
  imageItem: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 12,
    padding: 4,
    marginBottom: 4,
    backgroundColor: "rgb(206, 95, 250)",
    color: "white",
    fontWeight: "bold",
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  textInfo: {
    fontSize: 12,
    paddingBottom: 2,
  },
  locationAndSlotText: {
    fontSize: 12,
    marginLeft: 4,
    color: "gray",
    fontWeight: "bold",
  },
  iconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});