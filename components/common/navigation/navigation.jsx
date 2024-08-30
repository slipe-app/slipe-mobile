import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { BlurView } from "expo-blur";
import Fireit from "../icons/fireit.svg"
import { Link, usePathname } from "expo-router";
import Svg, { Path } from "react-native-svg";
import styles from "./styles";
import colors from "../../../constants/colors";
import transitions from "../../../constants/transitions";

const TabBar = () => {
  const pathname = usePathname();

  // Создаем анимированные значения и сразу запускаем анимацию при изменении pathname
  const colorAnim1 = useRef(new Animated.Value(0)).current;
  const colorAnim2 = useRef(new Animated.Value(0)).current;
  const colorAnim3 = useRef(new Animated.Value(0)).current;

  // Анимация изменения цвета
  const animateColor = (colorAnim, isActive) => {
    Animated.timing(colorAnim, {
      toValue: isActive ? 1 : 0,
      duration: transitions.default,
      useNativeDriver: false,
    }).start();
  };

  // Обновляем анимации при изменении pathname
  useEffect(() => {
    animateColor(colorAnim1, pathname === "/");
    animateColor(colorAnim2, pathname === "/profile");
    animateColor(colorAnim3, pathname === "/search");
  }, [pathname]);

  // Интерполяция значений для цвета
  const interpolateUtil = (condition, from, to) => {
    return condition.interpolate({
      inputRange: [0, 1],
      outputRange: [from, to],
    });
  };

  return (
    <BlurView
      intensity={50}
      experimentalBlurMethod="dimezisBlurView"
      style={styles.tabBar}
      tint="systemChromeMaterialDark"
    >
      <Link style={styles.tabbarButton} href="/">
        <View style={{ flexDirection: "row", alignItems: "center" }}>
         <Fireit style={{ color: interpolateUtil(
                colorAnim2,
                colors.textPrimaryTransparent,
                colors.text
              )}} width="60" height="60" />
          <Animated.Text
            style={[
              {
                color: interpolateUtil(
                  colorAnim1,
                  colors.textPrimaryTransparent,
                  colors.text
                ),
              },
              { marginLeft: 8 },
            ]}
          >
            Blogs
          </Animated.Text>
        </View>
      </Link>
      <Link style={styles.tabbarButton} href="/profile">
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fireit style={{ color: interpolateUtil(
                colorAnim2,
                colors.textPrimaryTransparent,
                colors.text
              )}} width="60" height="60" />
          <Animated.Text
            style={[
              {
                color: interpolateUtil(
                  colorAnim2,
                  colors.textPrimaryTransparent,
                  colors.text
                ),
              },
              { marginLeft: 8 },
            ]}
          >
            Create post
          </Animated.Text>
        </View>
      </Link>
      <Link style={styles.tabbarButton} href="/search">
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fireit style={{ color: interpolateUtil(
                colorAnim2,
                colors.textPrimaryTransparent,
                colors.text
              )}} width="60" height="60" />
          <Animated.Text
            style={[
              {
                color: interpolateUtil(
                  colorAnim3,
                  colors.textPrimaryTransparent,
                  colors.text
                ),
              },
              { marginLeft: 8 },
            ]}
          >
            My profile
          </Animated.Text>
        </View>
      </Link>
    </BlurView>
  );
};

export default TabBar;