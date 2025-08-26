import Animated, {
  useAnimatedStyle,
  interpolate,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { YStack, XStack, Text, View } from "tamagui";
import { useEffect, useState } from "react";
import useSearchStore from "@stores/searchScreen";
import SearchBar from "./searchBar/searchBar";
import { fastSpring } from "@constants/easings";
import { Dimensions } from "react-native";
import useInsets from "@hooks/ui/useInsets";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

const AnimatedXStack = Animated.createAnimatedComponent(XStack);
const AnimatedYStack = Animated.createAnimatedComponent(YStack);

export const SearchHeader = () => {
  const insets = useInsets();
  const { t } = useTranslation();
  const { isFocused, setHeaderHeight, headerHeight, scrollY } = useSearchStore();
  const isFocusedShared = useSharedValue(isFocused);
  const [titleHeight, setTitleHeight] = useState(0);

  const animatedParams = useDerivedValue(() => {
    const t = scrollY?.value;
    const focus = isFocusedShared.value;

	const maxScroll = headerHeight - titleHeight - 44;

    const interpolatedOpacity = interpolate(t, [0, maxScroll], [1, 0], "clamp");
    const interpolatedHeight = interpolate(
      t,
      [0, maxScroll],
      [0, titleHeight],
      "clamp"
    );

    const opacity = interpolate( 
      focus,
      [0, 1],
      [interpolatedOpacity, 0],
      "clamp"
    );
    const height = interpolate(
      focus,
      [0, 1],
      [interpolatedHeight, titleHeight],
      "clamp"
    );

    return { opacity, height };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return { opacity: animatedParams.value.opacity };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -animatedParams.value.height }],
    };
  });

  useEffect(() => {
    isFocusedShared.value = withSpring(isFocused ? 1 : 0, fastSpring);
  }, [isFocused, isFocusedShared]);

  return (
    <AnimatedYStack
      onLayout={(e) => {
        const h = e.nativeEvent.layout.height;
        setHeaderHeight(h);
      }}
      style={headerAnimatedStyle}
      ph="$6"
      w={width}
      position="absolute"
      zIndex="$2"
      pb="$6"
	  backgroundColor="$bg"
      pt={insets.top}
    >
      <AnimatedXStack
        pb="$6"
        style={titleAnimatedStyle}
        onLayout={(e) => setTitleHeight(e.nativeEvent.layout.height)}
      >
        <View h="$12" justifyContent="center">
          <Text color="$color" lh="$9" fw="$3" fz="$9">
            {t("search.title")}
          </Text>
        </View>
      </AnimatedXStack>
      <SearchBar />
    </AnimatedYStack>
  );
};
