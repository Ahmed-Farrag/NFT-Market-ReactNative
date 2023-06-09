import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../Constants";
import avatar from "../assets/images/avatars/avatar03.jpg";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={avatar}
            resizeMode="contain"
            style={{ width: 44, height: 44, borderRadius: 30 }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Text style={styles.userText}>Addy</Text>
          <MaterialCommunityIcons
            name="check-decagram"
            size={24}
            color="white"
          />
        </View>
        <View>
          <Text style={{ color: COLORS.white }}>Creator</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 10,
  },
  userText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.cardBg,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 30,
  },
});
export default HomeHeader;
