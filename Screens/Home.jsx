import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS, DATA, FONTS, SIZES } from "../Constants";
import NFTCard from "../Components/NFTCard";
import HomeHeader from "../Components/HomeHeader";

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);

  const moveSearchAnimation = useRef(new Animated.Value(0)).current;
  const searchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const searchHandler = (value) => {
    if (value) {
      const filterData = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase())
      );
      setNftsData(filterData);
    } else {
      setNftsData(DATA);
    }
  };

  const NotFoundNFT = () => {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Opps... !</Text>
        <Text style={styles.notFoundText}> Not Found The NFT</Text>
      </View>
    );
  };

  useEffect(() => {
    searchAnimationHandler();
  }, [searchAnimationHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            top: -100,
            transform: [
              {
                translateY: moveSearchAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          }}
        >
          <HomeHeader searchHandler={searchHandler} />
        </Animated.View>
        {!nftsData.length ? (
          <NotFoundNFT />
        ) : (
          <FlatList
            data={nftsData}
            renderItem={({ item }) => <NFTCard NFTData={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
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
