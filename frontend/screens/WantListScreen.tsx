import { View, Text, StyleSheet } from 'react-native';
import { WantItem } from '../types';

export default function WantListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
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
});
