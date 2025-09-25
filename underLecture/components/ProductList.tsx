import { FlatList, StyleSheet } from "react-native";
import type { Product } from "../types";
import PressableCard from "./PressableCard";
import { useState } from "react";
import { initialList } from "./DummyData";
import SearchInput from "./SearchInput";

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>(initialList);

    const onFilterChange = (name: string) => {
        if (!name || name.trim() === "") {
            setProducts(initialList);
        } else {
            setProducts((prev) =>
                prev.filter((item) =>
                    item.name.toLowerCase().includes(name.toLowerCase())
                )
            );
        }
    };

    return (
        // <SafeAreaView style={styles.container}>
        //     <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: 16 }}>
        //         {products.map((product) => (
        //             <ProductCard key={product.id} product={product} />
        //         ))}
        //     </ScrollView>
        // </SafeAreaView>
        <>
            <SearchInput onFilterChange={onFilterChange} />
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PressableCard product={item} />}
                style={styles.list}
                contentContainerStyle={styles.content}
            />
        </>
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
