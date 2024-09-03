import { Animated} from "react-native";
import transitions from "../constants/transitions"

const animateColor = (colorAnim, isActive) => {
    Animated.timing(colorAnim, {
      toValue: isActive ? 1 : 0,
      duration: transitions.default,
      useNativeDriver: true,
    }).start();
  };

export default animateColor