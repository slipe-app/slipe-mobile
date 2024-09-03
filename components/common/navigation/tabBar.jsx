import { useEffect, useRef } from "react";
import { Animated} from "react-native";
import { BlurView } from "expo-blur";
import { usePathname } from "expo-router";
import styles from "./tabBarStyles";
import animateColor from "../../../utils/animateColor";
import Header from "../header/header";
import TabBarItem from "./item/tabBarItem";
import icons from "../../../constants/icons";
import {Asset} from 'expo-asset';

const TabBar = () => {
  const imageURI = Asset.fromModule(require("../../../assets/F6A1.jpg")).uri;
  const pathname = usePathname();
  const colorAnim1 = useRef(new Animated.Value(0)).current;
  const colorAnim2 = useRef(new Animated.Value(0)).current;
  const colorAnim3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateColor(colorAnim1, pathname === "/");
    animateColor(colorAnim2, pathname === "/add");
    animateColor(colorAnim3, pathname === "/profile");
  }, [pathname]);

  return (
    <>
     <Header/>
    <BlurView
      intensity={80}
      experimentalBlurMethod="dimezisBlurView"
      style={styles.tabBar}
      tint="systemChromeMaterialDark"
    >
      <TabBarItem path="/" iconName={icons['blogs']} text="Blogs" colorAnim={colorAnim1} />
      <TabBarItem path="/add" iconName={icons['plus']} text="Create post" colorAnim={colorAnim2} />
      <TabBarItem path="/profile" text="My profile" avatar={imageURI} colorAnim={colorAnim3} />
    </BlurView></>
  );
};

export default TabBar;