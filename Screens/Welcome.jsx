import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, FONTS, SIZES } from "../Constants";
import nft6 from "../assets/images/nft06.jpg";
import nft7 from "../assets/images/nft07.jpg";
import nft8 from "../assets/images/nft08.jpg";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  // animation for image
  const fadeImageAnimation = useRef(new Animated.Value(0)).current;
  const moveImageAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 0 })
  ).current;

  // image for text
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  // image for button
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;

  /**
   * @desc go to home page
   */
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  /* animations handlers */
  const imageAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImageAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(moveImageAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  /* animation Text handler */
  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration: 500,
      delay: 700,
      useNativeDriver: true,
    }).start();
  };

  /* animation Button handler  */
  const buttonAnimationHandler = () => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction: 4,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    imageAnimationHandler();
    textAnimationHandler();
    buttonAnimationHandler();
  }, [imageAnimationHandler, textAnimationHandler, buttonAnimationHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeImageAnimation,
            transform: moveImageAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft7} />
        </View>
        <View style={[styles.imageCard, { top: SIZES.mediam + 16 }]}>
          <Image style={styles.image} source={nft6} />
        </View>
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft8} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: fadeTextAnimation,
          },
        ]}
      >
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs buy and Sell Your NFTs as Well
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                translateY: moveButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <Button
          title="Get Started"
          pressHandler={pressHandler}
          stylesButton={styles.button}
          stylesText={styles.textButton}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  imageContainer: {
    top: -SIZES.mediam,
    flexDirection: "row",
    gap: SIZES.small,
  },
  imageCard: {
    borderRadius: SIZES.mediam,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: SIZES.mediam,
  },
  textContainer: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xLarge + 6,
  },
  mainText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge + 5,
    textAlign: "center",
    color: Colors.white,
  },
  subText: {
    fontFamily: FONTS.light,
    textAlign: "center",
    marginTop: SIZES.large,
    color: COLORS.gray,
  },
  buttonContainer: {
    position: "absolute",
    bottom: SIZES.xLarge + 10,
    marginVertical: SIZES.xLarge,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.mediam,
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
});

export default Welcome;
