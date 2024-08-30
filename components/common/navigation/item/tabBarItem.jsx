import { Animated, Text } from "react-native";
import { Link } from "expo-router";
import Svg, { Path } from "react-native-svg";
import styles from "./tabBarItemStyles";
import colors from "../../../constants/colors";

const TabBarItem = ({ path, iconName, text, colorAnim }) => {
  const opacity = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.25, 1],
  });

  return (
    <Link style={styles.tabbarButton} href={path}>
      <Animated.View style={{ opacity }}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path fill={colors.text} d="M12 2 L2 22 H22 Z" />
        </Svg>
        <Text style={{ color: 'white', marginLeft: 8 }}>{text}</Text>
      </Animated.View>
    </Link>
  );
};

export default TabBarItem
