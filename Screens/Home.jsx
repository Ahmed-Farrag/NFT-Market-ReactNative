import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { COLORS, DATA, FONTS, SIZES } from "../Constants";
import NFTCard from "../Components/NFTCard";

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={nftsData}
          renderItem={({ item }) => <NFTCard NFTData={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 10,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});

export default Home;
