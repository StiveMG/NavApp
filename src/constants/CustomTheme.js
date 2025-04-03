import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors";

const CustomTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background: colors.variantep1,
        card: colors.variantep2,
        text: colors.default,
        border: colors.variantepc,
        notification: colors.variantep3,
    }
}

export default CustomTheme;