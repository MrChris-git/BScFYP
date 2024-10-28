import { StyleSheet } from "react-native";
import { colors } from "./color";
import SPACING from "../config/SPACING";
export default function createHeaderStyle(theme: "light" | "dark" | undefined) {
    return StyleSheet.create({
        header: {
            backgroundColor: colors[theme || "light"].primary,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: SPACING * 5,
            padding: SPACING * 2
        }
    });
}