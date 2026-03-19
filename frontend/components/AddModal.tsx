import { Modal, View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';


type Props = {
    visible: boolean;
    onClose: () => void;
    onAdd: (url: string, name: string, price: number, reason: string, imageUrl: string) => void;
};

export default function AddModal({ visible, onClose, onAdd }: Props) {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [reason, setReason] = useState('');
    const [imageUrl, setImageUrl] = useState('');

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
                <Text>URL:</Text>
                <TextInput
                    value={url}
                    onChangeText={setUrl}
                    placeholder="URLを入力"
                />
                <Text>価格:</Text>
                <TextInput
                    value={price}
                    onChangeText={setPrice}
                    placeholder="価格を入力"
                />
                <Text>理由:</Text>
                <TextInput
                    value={reason}
                    onChangeText={setReason}
                    placeholder="理由を入力"
                />
                <Text>画像URL</Text>
                <TextInput
                    value={imageUrl}
                    onChangeText={setImageUrl}
                    placeholder="画像URLを入力"
                />
                <Button title='追加' onPress={() => {
                    onAdd(url, name, Number(price), reason, imageUrl);
                    setUrl('');
                    setName('');
                    setPrice('');
                    setReason('');
                    setImageUrl('');
                    onClose();
                }}/>
                <Button title='閉じる' onPress={onClose} />
            </View>
        </Modal>
    );
}
