import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    tabBar: {
        width: '100%',
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
        backgroundColor: colors.navigationBackground,
    },
})

export default styles