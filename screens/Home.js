import { View, Text, Image, StyleSheet, Dimensions, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Home({ navigation }) {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["rgb(348,169,81)", "rgb(255, 255, 255)"]}
    >
      <Image
        source={require("../assets/images/Agmo-Logo.png")}
        resizeMode="center"
        style={styles.image}
      />
      <Pressable
        onPress={() => navigation.navigate("Activities & Events")}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.buttonPressed]
            : styles.buttonContainer
        }
      >
        <Text style={styles.buttonText}>Activities & Events</Text>
      </Pressable>
    </LinearGradient>
  );
}

export default Home;

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'rgb(109, 174, 255)',
    marginTop: height * 0.4,
    borderWidth: 4,
    // borderColor: 'white',
    borderRadius: 4,
  },
  buttonContainer: {
    backgroundColor: 'rgb(62, 149, 255)',
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});