import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchInputProps = {
    onFilterChange: (id: string) => void;
};

export default function SearchInput({ onFilterChange }: SearchInputProps) {
    const [filter, setFilter] = useState<string>("");

    const onChangeText = (text: string) => {
        setFilter(text);
        onFilterChange(text);
    };

    return (
        <TextInput
            onChangeText={onChangeText}
            value={filter}
            style={styles.input}
            placeholder="Filter items..."
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        margin: 12,
        paddingHorizontal: 5,
    },
});
