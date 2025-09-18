import { Pressable, StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import { useEffect, useState, useRef } from "react";

export default function PressableCard({ product }: { product: Product }) {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [holdingCounter, setHoldingCounter] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const incrementCounter = () => {
        setHoldingCounter((prev) => prev + 1);
    };

    useEffect(() => {
        if (isPressed) {
            intervalRef.current = setInterval(incrementCounter, 10);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setHoldingCounter(0);
            }
        };
    }, [isPressed]);

    const onPress = () => {
        console.log(`Product with id: ${product.id} has been pressed!`);
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            style={({ pressed }) => [pressed && styles.buttonPressed]}
        >
            <ProductCard product={product} />
            {isPressed && (
                <View style={[{ flexDirection: "row" }, { gap: 20 }, ,]}>
                    <Text style={[{ marginLeft: 50 }, { fontSize: 30 }]}>
                        ${holdingCounter}
                    </Text>
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        opacity: 0.8,
    },
});
