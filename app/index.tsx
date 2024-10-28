import { Image, Text, useColorScheme, View } from "react-native";
import createStyle from "../assets/css/style";
import Header from "../components/header";

export default function Page() {
  const colorSheme = useColorScheme();

  const style = createStyle();
  return (
    <View style={style.container}>
      <Header theme={colorSheme}>
        <Image source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=female" }} style={{ width: 40, height: 40 }} />
      </Header>
    </View>
  );
}