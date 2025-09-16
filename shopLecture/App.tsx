import { Text, View } from "react-native";
import { styles } from "./Styles";
import CustomImage from "./components/CustomImage";
import CustomButton from "./components/CustomButton";

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Produktnavn</Text>
                <Text style={styles.smallerText}>Produktpris</Text>
            </View>
            <CustomImage />
            <CustomButton />
        </View>
    );
}
