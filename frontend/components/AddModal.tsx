import { Modal, View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';


type Props = {
    visible: boolean;
    onClose: () => void;
    onAdd: (name: string, reason: string) => void;
};

export default function AddModal({ visible, onClose, onAdd }: Props) {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');

    return (
        <Modal visible={visible}>
            <View>
                <Text>モーダルの中身</Text>
                <Text>商品名:</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="ほしいものを入力"
                />
                <Text>理由:</Text>
                <TextInput
                    value={reason}
                    onChangeText={setReason}
                    placeholder="理由を入力"
                />
                <Button title='追加' onPress={() => {
                    onAdd(name, reason);
                    setName('');
                    setReason('');
                    onClose();
                }}/>
                <Button title='閉じる' onPress={onClose} />
            </View>
        </Modal>
    );
}
