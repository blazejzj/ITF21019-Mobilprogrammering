import { type Product } from "./types";
import ProductList from "./components/ProductList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
import { Text } from "react-native";

const product: Product = {
    id: "1",
    name: "My new product",
    price: 29.99,
    description: "This is a sample product description.",
};

export default function App() {
    return (
        <SafeAreaProvider>
            <Text className="text-xl font-bold text-blue-500" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                <ProductList />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
