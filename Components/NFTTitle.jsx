import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../Constants";
import NFTDate from "./NFTDate";

const NFTTitle = ({ _name, creator, date }) => {
  return (
    <View>
      <View>
        <Text style={styles.textName}>{_name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: SIZES.small,
          }}
        >
          <Text style={styles.textCreator}>{creator}</Text>
          <Text>Icon</Text>
        </View>
        <NFTDate date={date} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textName: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  textCreator: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
});

export default NFTTitle;
