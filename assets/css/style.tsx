import { StyleSheet } from "react-native";
import { colors } from "./color";
export default function createStyle(theme?: "light" | "dark" | undefined) {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: colors[theme || "light"].secondary,
            alignItems: "center",
        },
    });
}