import { View, Text } from "react-native";
import createHeaderStyle from "../assets/css/header";


export default function Header(props: any) {
    const { theme, children }: { theme: "light" | "dark" | undefined; children?: React.ReactNode } = props;

    const style = createHeaderStyle(theme);

    return (
        <View style={style.header}>
            {children}
        </View>
    );
}

