import { BlurView } from "expo-blur";
import { View } from "react-native";
import styles from "./headerStyles";
import colors from "../../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePathname } from "expo-router";
import HeaderButton from "./button/button";
import icons from "../../../constants/icons";

const Header = () => {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
    return(
        <BlurView
        intensity={100}
        experimentalBlurMethod="dimezisBlurView"
        style={[styles.header, {paddingTop: insets.top + 12 }]}
        tint="systemChromeMaterialDark"
      >
        <HeaderButton path="/search" iconName={icons['search']} currentPath={pathname}/>
        <View />
        <HeaderButton path="/notifs" iconName={icons['bell']} currentPath={pathname}/>
        </BlurView>
    )
}

export default Header