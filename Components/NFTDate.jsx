import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../Constants";

const NFTDate = ({ date }) => {
  return (
    <View>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textDate: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.mediam,
    color: COLORS.gray,
  },
});
export default NFTDate;
