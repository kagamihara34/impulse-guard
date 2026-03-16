import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { WantItem } from '../types';

export default function WantListScreen() {
    const [items, setItems] = useState<WantItem[]>([]);
    const [name, setName] = useState('');

    const addItem = () => {
        if (name.trim() === '') return;
        const newItem: WantItem = {
            id: Date.now().toString(),
            name,
            createdAt: new Date(),
        };
        setItems([...items, newItem]);
        setName('');
    };

    const deleteItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ウォントリスト</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="ほしいものを入力"
            />
            <Button title="追加" onPress={addItem} />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.name}
                        <Button title="削除" onPress={() => deleteItem(item.id)} />
                    </Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    item: {
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
});
