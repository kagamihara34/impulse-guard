import { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useWantList } from '../hooks/useWantList';
import AddModal from '../components/AddModal';

export default function WantListScreen() {
    const { items, addItem, deleteItem, getRemainingTime } = useWantList();
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ウォントリスト</Text>
            <Button title="追加" onPress={() => setIsModalVisible(true)} />
            <AddModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onAdd={addItem}
            />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.name} - {getRemainingTime(item.createdAt) === 0 ? '購入OK!' : `残り${getRemainingTime(item.createdAt)}時間`}
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
