import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import styles from "./styles";
import { Link, usePathname } from "expo-router";
import colors from "../../../constants/colors";
import transitions from "../../../constants/transitions";

export default function TabBar() {
  const pathname = usePathname();

  const colorAnim1 = useRef(new Animated.Value(0)).current;
  const colorAnim2 = useRef(new Animated.Value(0)).current;
  const colorAnim3 = useRef(new Animated.Value(0)).current;

  const animateColor = (colorAnim, isActive) => {
    Animated.timing(colorAnim, {
      toValue: isActive ? 1 : 0,
      duration: transitions.default,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateColor(colorAnim1, pathname === "/");
    animateColor(colorAnim2, pathname === "/profile");
    animateColor(colorAnim3, pathname === "/search");
  }, [pathname]);

  const textColor1 = colorAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.textPrimaryTransparent, colors.text],
  });

  const textColor2 = colorAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.textPrimaryTransparent, colors.text],
  });

  const textColor3 = colorAnim3.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.textPrimaryTransparent, colors.text],
  });

  return (
    <View style={styles.tabBar}>
      <Link style={styles.tabbarButton} href="/">
        <Animated.Text style={{ color: textColor1 }}>
          Blogs
        </Animated.Text>
      </Link>
      <Link style={styles.tabbarButton} href="/profile">
        <Animated.Text style={{ color: textColor2 }}>
          Create post
        </Animated.Text>
      </Link>
      <Link style={styles.tabbarButton} href="/search">
        <Animated.Text style={{ color: textColor3 }}>
          My profile
        </Animated.Text>
      </Link>
    </View>
  );
}