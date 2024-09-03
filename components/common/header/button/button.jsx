import { Animated, Image, Text, View } from "react-native";
import { Link } from "expo-router";
import Svg, { Path } from "react-native-svg";
import styles from "./buttonStyles";
import colors from "../../../../constants/colors";
import { useEffect, useRef } from "react";
import animateColor from "../../../../utils/animateColor";

const HeaderButton = ({ path, iconName, currentPath }) => {
    const colorAnim = useRef(new Animated.Value(0)).current;
    const backgroundColor = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.buttonInactiveBackground, colors.text],
    });

    useEffect(() =>{
        animateColor(colorAnim, currentPath === path)
    }, [currentPath])

  return (
    <Link href={path}>
      <Animated.View style={[styles.headerButton, { backgroundColor: backgroundColor }]}>
          <Svg width="30" height="30" viewBox="0 0 24 24">
           <Path fill={currentPath === path ? colors.background : colors.text} d={iconName} />
          </Svg>
      </Animated.View>
    </Link>
  );
};

export default HeaderButton
