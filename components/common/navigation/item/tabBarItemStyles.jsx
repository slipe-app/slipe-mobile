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
        width: 40,
        height: 40,
        padding: 4,
    },
    avatar:{
        width: '100%',
        height: '100%',
        borderRadius: 999
    },
    tabbarButtonView:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles