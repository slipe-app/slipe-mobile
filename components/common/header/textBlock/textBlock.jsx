import React, { useRef, useEffect, useState } from "react";
import { View, Animated, Text } from "react-native";
import styles from "./textBlockStyles";
import colors from "../../../../constants/colors";
import transitions from "../../../../constants/transitions";

const HeaderTexts = ({ path }) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const [currentPath, setCurrentPath] = useState(path);
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: transitions.default,
      useNativeDriver: true,
    }).start(() => {
      setCurrentPath(path);
      Animated.timing(opacity, {
        toValue: 1,
        duration: transitions.default,
        useNativeDriver: true,
      }).start();
    });
  }, [path]);

  const renderElement = () => {
    switch (currentPath) {
      case "/profile":
        return <Text style={styles.text}>My profile</Text>;
      case "/add":
        return <Text style={styles.text}>Create post</Text>;
      case "/search":
        return <Text style={styles.text}>Search</Text>;
      case "/notifs":
        return <Text style={styles.text}>Notifications</Text>;
      default:
        return (
          <>
            <Text style={styles.text}>For you</Text>
            <Text style={[styles.text, { color: colors.textPrimaryTransparent }]}>Followed</Text>
          </>
        );
    }
  };

  return <Animated.View style={[styles.animatedView, { opacity }]}>{renderElement()}</Animated.View>;
};

export default HeaderTexts;
