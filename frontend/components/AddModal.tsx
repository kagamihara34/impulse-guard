import { Modal, View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';


type Props = {
    visible: boolean;
    onClose: () => void;
    onAdd: (name: string) => void;
};

export default function AddModal({ visible, onClose, onAdd }: Props) {
    const [name, setName] = useState('');
    return (
        <Modal visible={visible}>
            <View>
                <Text>モーダルの中身</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="ほしいものを入力"
                />
                <Button title='追加' onPress={() => {
                    onAdd(name);
                    setName('');
                    onClose();
                }}/>
                <Button title='閉じる' onPress={onClose} />
            </View>
        </Modal>
    );
}
