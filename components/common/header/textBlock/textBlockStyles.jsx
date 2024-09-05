import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    text:{
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: colors.text
    },
    animatedView:{
        flex: 1,
        flexDirection: 'row',
    }
})

export default styles