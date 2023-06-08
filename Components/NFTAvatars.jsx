import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const NFTAvatars = ({ avatars }) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar) => {
        return (
          <Image
            key={avatar.id}
            style={styles.avatar}
            source={avatar.image}
            resizeMode="contain"
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    marginLift: -5,
    borderRadius: 40,
  },
});

export default NFTAvatars;
