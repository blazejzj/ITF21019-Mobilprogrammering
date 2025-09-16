import { Image } from "expo-image";
import MyImage from "../assets/goodboi.webp";
import { styles } from "../Styles";

export default function CustomImage() {
    return <Image style={styles.imageStyle} source={MyImage} />;
}
