import { Button, getVariableValue, useTheme, View } from "tamagui";
import Icon from "@components/ui/icon";
import useSearchStore from "@stores/searchScreen";
import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  interpolate,
  interpolateColor,
} from "react-native-reanimated";
import { fastSpring } from "@constants/easings";

const AnimatedButton = Animated.createAnimatedComponent(Button);
const AnimatedView = Animated.createAnimatedComponent(View);

const buttonWidth = getVariableValue("$13", "size");

export default function SearchBarButton({ onCancelPressed }) {
  const { primary, color, primaryTransparent, backgroundTransparent } =
    useTheme();
  const { isFocused, query } = useSearchStore();

  const cancelColor = primaryTransparent.get();
  const filterColor = backgroundTransparent.get();
 
  const focusProgress = useSharedValue(0);
  const containerProgress = useSharedValue(0);

  useEffect(() => {
    focusProgress.value = withSpring(isFocused ? 1 : 0, fastSpring);
    containerProgress.value = withSpring(
      isFocused || !!query ? 1 : 0,
      fastSpring
    );
  }, [isFocused, query]);

  const containerStyle = useAnimatedStyle(() => ({
    marginRight: interpolate(
      containerProgress.value,
      [0, 1],
      [-buttonWidth - 16, 0]
    ),
    opacity: containerProgress.value,
    backgroundColor: interpolateColor(
      focusProgress.value,
      [0, 1],
      [filterColor, cancelColor]
    ),
  }));

  const xStyle = useAnimatedStyle(() => ({
    opacity: focusProgress.value,
    transform: [
      { rotate: `${interpolate(focusProgress.value, [0, 1], [90, 0])}deg` },
      { scale: interpolate(focusProgress.value, [0, 1], [0.9, 1]) },
    ],
  }));

  const linesStyle = useAnimatedStyle(() => {
    const opacity = containerProgress.value * (1 - focusProgress.value);
    return {
      opacity,
      transform: [{ scale: interpolate(opacity, [0, 1], [0.9, 1]) }],
    };
  });

  return (
    <AnimatedButton
      w="$13"
      h="$13"
      br="$full"
      alignItems="center"
      justifyContent="center"
      style={containerStyle}
      onPress={() => onCancelPressed("cancel")}
    >
      <AnimatedView position="absolute" style={xStyle}>
        <Icon size={26} icon="x" color={primary.get()} />
      </AnimatedView>
      <AnimatedView position="absolute" style={linesStyle}>
        <Icon size={26} icon="lines.column" color={color.get()} />
      </AnimatedView>
    </AnimatedButton>
  );
}
