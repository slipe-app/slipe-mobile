import { BlurView } from "expo-blur";
import { View } from "react-native";
import styles from "./headerStyles";

const Header = () =>{
    return(
        <BlurView
        intensity={100}
        experimentalBlurMethod="dimezisBlurView"
        style={styles.header}
        tint="systemChromeMaterialDark"
      >
        <View style={{width: 300, height: 80}}/>
        </BlurView>
    )
}

export default Header