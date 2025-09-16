import { FlatList, StyleSheet } from "react-native";
import type { Product } from "../types";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: Product[] }) {
    return (
        // <SafeAreaView style={styles.container}>
        //     <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: 16 }}>
        //         {products.map((product) => (
        //             <ProductCard key={product.id} product={product} />
        //         ))}
        //     </ScrollView>
        // </SafeAreaView>
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard product={item} />}
            style={styles.list}
            contentContainerStyle={styles.content}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: "100%",
    },
    content: {
        padding: 20,
        alignItems: "center",
        gap: 50,
    },
});
