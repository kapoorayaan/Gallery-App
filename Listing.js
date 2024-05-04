import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Animated,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import CacheImage from "./CacheImage";
import Icon from "react-native-ico-material-design";

const Listing = () => {
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = dimensions.height;
  var iconHeight = 26;
  var iconWidth = 26;

  const [pro, setpro] = useState([]);
  useEffect(() => {
    getImage();
  }, []);
  async function getImage() {
    const url = "https://fakestoreapi.com/products";
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpro(data);
      });
  }
  return (
    <SafeAreaView>
      <FlatList
        horizontal={true}
        pagingEnabled
        data={pro}
        renderItem={({ item, index }) => (
          <View style={{ height: imageHeight, width: imageWidth }}>
            <StatusBar>
              <Text> Gallery APP</Text>
            </StatusBar>

            <Image
              source={{ uri: item.image }}
              style={[StyleSheet.absoluteFillObject]}
              resizeMode="contain"
            />
          </View>
        )}
      />

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            style={styles.IconB}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="video"
              height={iconHeight}
              width={iconWidth}
              color="#448aff"
            ></Icon>
          </Pressable>

          <Pressable
            style={styles.IconB}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="camera"
              height={iconHeight}
              width={iconWidth}
              color="#1e88e5"
            ></Icon>
          </Pressable>
          <Pressable
            style={styles.IconB}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="favorite-heart-button"
              height={iconHeight}
              width={iconWidth}
              color="#448aff"
            ></Icon>
          </Pressable>
          <Pressable
            style={styles.IconB}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="settings-cogwheel-button"
              height={iconHeight}
              width={iconWidth}
              color="#448aff"
            ></Icon>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Listing;

const styles = StyleSheet.create({
  image: {
    width: "auto",
    height: "auto",
    aspectRatio: 1,
    flex: 1,
  },
  NavContainer: {
    position: "center",
    alignItems: "center",
    bottom: 20,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "grey",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
  },
  IconB: {
    padding: 40,
  },
});
