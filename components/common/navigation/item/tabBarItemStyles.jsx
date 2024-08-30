import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    tabbarButton: {
        flex: 1,
        display: 'flex',
        color: colors.text,
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'center',
        alignItems: 'center',
    }
})

export default styles