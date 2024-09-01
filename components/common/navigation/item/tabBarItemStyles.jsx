import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    tabbarButton: {
        flex: 1,
        display: 'flex',
        color: colors.text,
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'center',
        alignItems: 'center',
    },
    avatarWrapper:{
        width: 36,
        height: 36,
        padding: 4,
        overflow: 'hidden',
        borderRadius: 999
    },
    avatar:{
        width: '100%',
        height: '100%',
    }
})

export default styles