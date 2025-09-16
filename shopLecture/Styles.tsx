import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        gap: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "darkblue",
    },
    smallerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    buttonStyle: {
        backgroundColor: "teal",
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    buttonTextStyle: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },
    spamButton: {
        fontWeight: "bold",
        fontSize: 20,
    },
    counterStyle: {
        color: "red",
        fontWeight: "bold",
    },
    imageStyle: {
        width: width * 0.5,
        height: height * 0.25,
        borderWidth: 2,
        borderColor: "blue",
    },
});
