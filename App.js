import HomeScreen from "./screens/HomeScreen";
import GlobalStyle from "./GlobalStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    //<SafeAreaProvider style={GlobalStyle.droidSafeArea}>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaProvider>
  );
}
