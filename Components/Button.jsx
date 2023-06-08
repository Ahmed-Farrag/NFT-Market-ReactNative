import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ pressHandler, Icon, stylesText, title, stylesButton }) => {
  /**
   * @desc we have two choices
   * (1) : the button contains text
   * (2): the button contains icon
   * this fn show content u need
   *
   * @render text or icon
   *  */
  const RenderContentIconOrText = () => {
    if (!Icon) {
      return <Text style={stylesText}>{title && title}</Text>;
    } else {
      return Icon;
    }
  };
  return (
    <TouchableOpacity
      style={stylesButton}
      onPress={pressHandler && pressHandler}
    >
      <RenderContentIconOrText />
    </TouchableOpacity>
  );
};

export default Button;
