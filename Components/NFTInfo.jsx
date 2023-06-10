import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../Constants";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "./Button";

const NFTInfo = ({ comments, views, price, love }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Feather name="eye" size={24} color={COLORS.white} />
        <Text style={styles.text}>{views}</Text>
      </View>
      <View style={styles.wrapper}>
        <FontAwesome name="comments" size={24} color={COLORS.white} />
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <FontAwesome5 name="ethereum" size={24} color={COLORS.white} />
        <Text style={styles.text}>{price}</Text>
      </View>
      {love && (
        <View>
          <Button
            Icon={<AntDesign name="heart" size={18} color={COLORS.second} />}
            style={styles.buttonHeart}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: SIZES.xLarge,
    paddingVertical: 5,
    gap: 4,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.mediam,
    color: COLORS.white,
  },
  buttonHeart: {
    backgroundColor: COLORS.bg,
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.second,
  },
});

export default NFTInfo;
