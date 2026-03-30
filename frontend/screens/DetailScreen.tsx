import { RouteProp, useRoute } from "@react-navigation/native";
import { Text , View } from "react-native";
import { RootStackParamList } from "../App";
import { useContext } from "react";
import { WantListContext } from "../contexts/WantListContext";

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;


export default function DetailScreen(){
    const context = useContext(WantListContext);
    const route = useRoute<DetailRouteProp>();
    const { id } = route.params;
    const item = context?.items.find(item => item.id === id);

    return (
        <View>
            <Text>詳細画面</Text>
            <Text>{item?.imageUrl}</Text>
            <Text>{item?.name}</Text>
            <Text>{item?.price}</Text>
            <Text>{item?.reason}</Text>
            <Text>{item?.url}</Text>
        </View>
    )
}
