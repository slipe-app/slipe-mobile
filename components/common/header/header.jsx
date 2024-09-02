import { BlurView } from "expo-blur";
import { View } from "react-native";
import styles from "./headerStyles";
import colors from "../../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const insets = useSafeAreaInsets()
    return(
        <BlurView
        intensity={100}
        experimentalBlurMethod="dimezisBlurView"
        style={[styles.header, {paddingTop: insets.top + 16 }]}
        tint="systemChromeMaterialDark"
      >
        <View style={{width: 300, height: 80, backgroundColor: colors.text}}/>
        </BlurView>
    )
}

export default Header