import { useEffect, useRef } from "react";
import { Animated} from "react-native";
import { BlurView } from "expo-blur";
import { usePathname } from "expo-router";
import styles from "./tabBarStyles";
import transitions from "../../../constants/transitions";
import TabBarItem from "./item/tabBarItem";

const TabBar = () => {
  const pathname = usePathname();
  const colorAnim1 = useRef(new Animated.Value(0)).current;
  const colorAnim2 = useRef(new Animated.Value(0)).current;
  const colorAnim3 = useRef(new Animated.Value(0)).current;

  const animateColor = (colorAnim, isActive) => {
    Animated.timing(colorAnim, {
      toValue: isActive ? 1 : 0,
      duration: transitions.default,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateColor(colorAnim1, pathname === "/");
    animateColor(colorAnim2, pathname === "/profile");
    animateColor(colorAnim3, pathname === "/search");
  }, [pathname]);

  return (
    <BlurView
      intensity={50}
      experimentalBlurMethod="dimezisBlurView"
      style={styles.tabBar}
      tint="systemChromeMaterialDark"
    >
      <TabBarItem path="/" iconName="blogs" text="Blogs" colorAnim={colorAnim1} />
      <TabBarItem path="/profile" iconName="create-post" text="Create post" colorAnim={colorAnim2} />
      <TabBarItem path="/search" iconName="my-profile" text="My profile" colorAnim={colorAnim3} />
    </BlurView>
  );
};

export default TabBar;