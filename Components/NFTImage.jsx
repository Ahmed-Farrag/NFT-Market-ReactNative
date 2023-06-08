import { View, StyleSheet, Image } from "react-native";
import React from "react";

const NFTImage = ({ image, imageStyles }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
});

export default NFTImage;
