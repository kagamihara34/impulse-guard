import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WantListScreen from './screens/WantListScreen';
import DetailScreen from './screens/DetailScreen';
import { WantListProvider } from './contexts/WantListContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  WantList: undefined;
  Detail: { id: string };
};

export default function App() {

  return (
    <NavigationContainer>
      <WantListProvider>
        <Stack.Navigator>
          <Stack.Screen name="WantList" component={WantListScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </WantListProvider>
    </NavigationContainer>
  );
}
