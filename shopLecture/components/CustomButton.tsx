import { Pressable, Text } from "react-native";
import { useState } from "react";
import { styles } from "../Styles";

export default function CustomButton() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <Pressable
                style={styles.buttonStyle}
                onPress={() => setCounter(counter + 1)}
            >
                <Text style={styles.buttonTextStyle}>Kjøp!</Text>
            </Pressable>
            <Text style={styles.spamButton}>
                You spammed kjøp
                <Text style={styles.counterStyle}> {counter} </Text>
                times!
            </Text>
            <Text>
                {counter < 20
                    ? "Doggo is dissapointed"
                    : "You're getting there, be a true spammer!"}
            </Text>
        </>
    );
}
