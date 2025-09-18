import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ProductCookieClicker() {
    const [cookies, setCookies] = useState(0);
    const [cookiesPerClick, setCookiesPerClick] = useState(1);
    const [autoClickers, setAutoClickers] = useState(0);
    const [autoClickerCost, setAutoClickerCost] = useState(50);

    const [doubleClickCost, setDoubleClickCost] = useState(100);
    const [hasDoubleClick, setHasDoubleClick] = useState(false);

    const [trippleClickCost, setTrippleClickCost] = useState(2500);
    const [hasTrippleClick, setHasTrippleClick] = useState(false);

    const [quadClickCost, setQuadClickCost] = useState(10000);
    const [hasQuadClick, setHasQuadClick] = useState(false);

    const [fiveMultiplierCost, setFiveMultiplierCost] = useState(100000);
    const [hasFiveMultipier, setHasFiveMultiplier] = useState(false);

    useEffect(() => {
        if (autoClickers > 0) {
            const interval = setInterval(() => {
                setCookies((c) => c + autoClickers * cookiesPerClick);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [autoClickers, cookiesPerClick]);

    const handleCookieClick = () => {
        setCookies((c) => c + cookiesPerClick);
    };

    const buyAutoClicker = () => {
        if (cookies >= autoClickerCost) {
            setCookies((c) => c - autoClickerCost);
            setAutoClickers((a) => a + 1);
            setAutoClickerCost((cost) => Math.floor(cost * 1.5));
        }
    };

    const buyDoubleClick = () => {
        if (!hasDoubleClick && cookies >= doubleClickCost) {
            setCookies((c) => c - doubleClickCost);
            setCookiesPerClick((c) => c * 2);
            setHasDoubleClick(true);
        }
    };

    const buyTrippleClick = () => {
        if (!hasTrippleClick && cookies >= trippleClickCost) {
            setCookies((c) => c - trippleClickCost);
            setCookiesPerClick((c) => c * 3);
            setHasTrippleClick(true);
        }
    };

    const buyQuadrupleClick = () => {
        if (!hasQuadClick && cookies >= quadClickCost) {
            setCookies((c) => c - quadClickCost);
            setCookiesPerClick((c) => c * 4);
            setHasQuadClick(true);
        }
    };

    const buyFiveMultiplierClick = () => {
        if (!hasFiveMultipier && cookies >= fiveMultiplierCost) {
            setCookies((c) => c - fiveMultiplierCost);
            setCookiesPerClick((c) => c * 5);
            setHasFiveMultiplier(true);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🍪 Cookie Clicker</Text>
            <Text style={styles.counter}>{cookies} cookies</Text>
            <Pressable style={styles.cookieButton} onPress={handleCookieClick}>
                <Text style={styles.cookieText}>Tap Cookie!</Text>
            </Pressable>
            <View style={styles.upgrades}>
                <Pressable
                    style={[
                        styles.upgradeButton,
                        cookies < autoClickerCost && styles.disabled,
                    ]}
                    onPress={buyAutoClicker}
                    disabled={cookies < autoClickerCost}
                >
                    <Text style={styles.upgradeText}>
                        Buy Auto Clicker ({autoClickerCost} cookies)
                    </Text>
                    <Text style={styles.upgradeDesc}>
                        +1 cookie/sec (Owned: {autoClickers})
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.upgradeButton,
                        (cookies < doubleClickCost || hasDoubleClick) &&
                            styles.disabled,
                    ]}
                    onPress={buyDoubleClick}
                    disabled={cookies < doubleClickCost || hasDoubleClick}
                >
                    <Text style={styles.upgradeText}>
                        {hasDoubleClick
                            ? "Double Click (Owned)"
                            : `Double Click (${doubleClickCost} cookies)`}
                    </Text>
                    <Text style={styles.upgradeDesc}>
                        Double cookies per tap
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.upgradeButton,
                        (cookies < trippleClickCost || hasTrippleClick) &&
                            styles.disabled,
                    ]}
                    onPress={buyTrippleClick}
                    disabled={cookies < trippleClickCost || hasTrippleClick}
                >
                    <Text style={styles.upgradeText}>
                        {hasTrippleClick
                            ? "Tripple Click (Owned)"
                            : `Tripple Click (${trippleClickCost} cookies)`}
                    </Text>
                    <Text style={styles.upgradeDesc}>
                        Tripple cookies per tap
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.upgradeButton,
                        (cookies < quadClickCost || hasQuadClick) &&
                            styles.disabled,
                    ]}
                    onPress={buyQuadrupleClick}
                    disabled={cookies < quadClickCost || hasQuadClick}
                >
                    <Text style={styles.upgradeText}>
                        {hasQuadClick
                            ? "Quaddruple Click (Owned)"
                            : `Quaddruple Click (${quadClickCost} cookies)`}
                    </Text>
                    <Text style={styles.upgradeDesc}>
                        Quaddruple cookies per tap
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.upgradeButton,
                        (cookies < fiveMultiplierCost || hasFiveMultipier) &&
                            styles.disabled,
                    ]}
                    onPress={buyFiveMultiplierClick}
                    disabled={cookies < fiveMultiplierCost || hasFiveMultipier}
                >
                    <Text style={styles.upgradeText}>
                        {hasFiveMultipier
                            ? "Five Multiplie Click (Owned)"
                            : `Five Multiplier Click (${fiveMultiplierCost} cookies)`}
                    </Text>
                    <Text style={styles.upgradeDesc}>
                        Five Multiplier cookies per tap
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8e5c2",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#a0522d",
    },
    counter: {
        fontSize: 28,
        marginBottom: 30,
        color: "#6b3e26",
    },
    cookieButton: {
        backgroundColor: "#fff",
        borderColor: "#deb887",
        borderWidth: 4,
        borderRadius: 100,
        width: 200,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        shadowColor: "#a0522d",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    cookieText: {
        fontSize: 22,
        color: "#a0522d",
        fontWeight: "bold",
    },
    upgrades: {
        width: "100%",
        marginTop: 10,
    },
    upgradeButton: {
        backgroundColor: "#ffe4b5",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#deb887",
    },
    upgradeText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#8b5c2a",
    },
    upgradeDesc: {
        fontSize: 14,
        color: "#6b3e26",
        marginTop: 4,
    },
    disabled: {
        opacity: 0.5,
    },
});
