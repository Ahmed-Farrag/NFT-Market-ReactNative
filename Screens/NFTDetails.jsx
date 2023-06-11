import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import NFTImage from "../Components/NFTImage";
import { COLORS, FONTS, SIZES } from "../Constants";
import NFTAvatars from "../Components/NFTAvatars";
import NFTTitle from "../Components/NFTTitle";
import NFTInfo from "../Components/NFTInfo";
import NFTMoreInfo from "../Components/NFTMoreInfo";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../Components/Button";

const NFTDetails = ({ route, navigation }) => {
  const { NFTData } = route.params;
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const moveAnimationHandler = () => {
    Animated.spring(moveAnimation, {
      toValue: 1,
      friction: 6,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };
  const fadeAnimationHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveAnimationHandler();
    fadeAnimationHandler();
  }, [moveAnimationHandler, fadeAnimationHandler]);

  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          marginTop: -15,
          transform: [
            {
              translateY: moveAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <NFTImage
          image={NFTData.image}
          imageStyles={styles.imageStyles}
          love
          arrow
          pressHandler={pressHandler}
        />
        <View style={{ paddingHorizontal: SIZES.xLarge }}>
          <View style={{ marginTop: -SIZES.mediam }}>
            <NFTAvatars avatars={NFTData.avatars} />
          </View>
          <View style={{ marginVertical: SIZES.mediam }}>
            <NFTTitle
              _name={NFTData.name}
              creator={NFTData.creator}
              date={NFTData.date}
            />
          </View>
          <View style={{ marginVertical: SIZES.mediam }}>
            <NFTInfo
              price={NFTData.price}
              views={NFTData.views}
              comments={NFTData.comments}
            />
            <View style={{ marginVertical: SIZES.mediam }}>
              <NFTMoreInfo
                address={NFTData.address}
                tokenId={NFTData.tokenId}
                tokenSt={NFTData.tokenSt}
                blockchain={NFTData.blockchain}
              />
            </View>
          </View>
        </View>
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: fadeAnimation,
            },
          ]}
        >
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.text}>Tob bid</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  padding: SIZES.small - 4,
                }}
              >
                <FontAwesome name="dollar" size={15} color="white" />
                <Text style={styles.text}>{NFTData.topBid}</Text>
              </View>
            </View>
            <Button
              title="place a bid"
              stylesButton={styles.button}
              stylesText={styles.textButton}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    width: "100%",
    marginTop: -20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
  text: { color: COLORS.white, fontFamily: FONTS.semiBold, fontSize: 16 },
});

export default NFTDetails;
