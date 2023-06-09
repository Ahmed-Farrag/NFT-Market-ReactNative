import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../Constants";
import NFTImage from "./NFTImage";
import NFTAvatars from "./NFTAvatars";
import NFTTitle from "./NFTTitle";
import NFTInfo from "./NFTInfo";

const NFTCard = ({ NFTData }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <NFTImage image={NFTData.image} imageStyles={styles.imageStyles} />
      </TouchableOpacity>
      <View style={styles.cardTop}>
        <NFTAvatars avatars={NFTData.avatars} />
      </View>
      <View style={styles.cardBottom}>
        <NFTTitle
          _name={NFTData.name}
          creator={NFTData.creator}
          date={NFTData.date}
        />
        <View style={{ marginTop: SIZES.small + 5 }}>
          <NFTInfo
            comments={NFTData.comments}
            views={NFTData.views}
            price={NFTData.price}
            love
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.mediam,
    marginBottom: SIZES.xLarge,
    marginVertical: SIZES.small - 5,
    marginHorizontal: 14,
  },
  cardTop: {
    width: "100%",
    paddingHorizontal: SIZES.mediam,
    marginTop: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: { width: "100%", padding: SIZES.mediam },
  imageStyles: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default NFTCard;
