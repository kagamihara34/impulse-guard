import { useContext, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useWantList } from '../hooks/useWantList';
import AddModal from '../components/AddModal';
import { RootStackParamList } from '../App';
import { WantListContext } from '../contexts/WantListContext';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'WantList'>;


export default function WantListScreen() {
    const context = useContext(WantListContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ウォントリスト</Text>
            <Button title="追加" onPress={() => setIsModalVisible(true)} />
            <AddModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onAdd={(url, name, price, reason, imageUrl) => context?.addItem(url, name, price, reason, imageUrl)}
            />
            <FlatList
                data={context?.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(`Detail`, { id: item.id })}>
                        <Text style={styles.item}>
                            {item.name} - {context?.getRemainingTime(item.createdAt) === 0 ? '購入OK!' : `残り${context?.getRemainingTime(item.createdAt)}時間`}
                            <Button title="削除" onPress={() => context?.deleteItem(item.id)} />
                        </Text>
                    </TouchableOpacity>
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
