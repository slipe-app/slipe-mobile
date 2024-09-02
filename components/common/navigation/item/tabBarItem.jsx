import { Animated, Image, Text, View } from "react-native";
import { Link } from "expo-router";
import Svg, { Path } from "react-native-svg";
import styles from "./tabBarItemStyles";
import colors from "../../../../constants/colors";
const TabBarItem = ({ path, iconName, text, colorAnim, avatar }) => {
  const opacity = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.25, 1],
  });

  return (
    <Link style={styles.tabbarButton} href={path}>
      <Animated.View style={[styles.tabbarButtonView, { opacity: opacity }]}>
        {avatar ? (
          <View style={styles.avatarWrapper}>
            <Image source={{uri: avatar}} style={styles.avatar}/>
          </View>
        ) : (
          <Svg width="40" height="40" viewBox="0 0 24 24">
           <Path fill={colors.text} d={iconName} />
          </Svg>
        )}
        <Text style={{ color: colors.text }}>{text}</Text>
      </Animated.View>
    </Link>
  );
};

export default TabBarItem
