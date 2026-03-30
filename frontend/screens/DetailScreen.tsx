import { RouteProp, useRoute } from "@react-navigation/native";
import { Button, Text , View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../App";
import { useContext } from "react";
import { WantListContext } from "../contexts/WantListContext";

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;


export default function DetailScreen(){
    const context = useContext(WantListContext);
    const route = useRoute<DetailRouteProp>();
    const { id } = route.params;
    const item = context?.items.find(item => item.id === id);
    const navigation = useNavigation<NavigationProp>();
    

    return (
        <View>
            <Text>詳細画面</Text>
            <Text>{item?.imageUrl}</Text>
            <Text>{item?.name}</Text>
            <Text>{item?.price}</Text>
            <Text>{item?.reason}</Text>
            <Text>{item?.url}</Text>
            <Button title="削除" onPress={() => {
                if (item) context?.deleteItem(item?.id);
                navigation.navigate(`WantList`);
            }}/>
        </View>
    )
}
