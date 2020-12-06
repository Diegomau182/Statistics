import {StatusBar} from "expo-status-bar"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplahScreen from "expo-splash-screen";
import {GraficContextProvider} from "./src/context/GraficContext"
import useDatabase from "./src/Hooks/useDataBase";

export default function App() {
  // Prevenir que la pantalla de splash se oculte
  SplahScreen.preventAutoHideAsync();

  const isloadingComplement = useDatabase();

  if (isloadingComplement) SplahScreen.hideAsync();
  return (
    <View style={styles.container}>
      <GraficContextProvider>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </GraficContextProvider>
    </View>
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
