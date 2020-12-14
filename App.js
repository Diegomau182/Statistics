import {StatusBar} from "expo-status-bar"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplahScreen from "expo-splash-screen";
import {GraficContextProvider} from "./src/context/GraficContext";
import {TypeContextProvider} from "./src/context/typeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import graficListScreen from "./src/screens/graficListScreen";
import graficCreateScreen from "./src/screens/graficCreateScreen";
import useDatabase from "./src/Hooks/useDataBase";
import graficModifyScreen from "./src/screens/graficModifyScreen";

const Stack = createStackNavigator();
export default function App() {
  // Prevenir que la pantalla de splash se oculte
  SplahScreen.preventAutoHideAsync();

  const isloadingComplement = useDatabase();

  if (isloadingComplement) SplahScreen.hideAsync();
  return (
      <GraficContextProvider>
      <TypeContextProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="grafic List">
            <Stack.Screen name="grafic List" component={graficListScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Create Grafic" component={graficCreateScreen}/>
            <Stack.Screen name="Modify Grafic" component={graficModifyScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
      </TypeContextProvider>
      </GraficContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
