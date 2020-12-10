import React, { useContext, useEffect } from "react";
import { StyleSheet,FlatList } from "react-native";
import {
  Card,
  Fab,
  Icon,
  Body,
  CardItem,
  Text,
  View,
} from "native-base";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
} from "react-native-chart-kit";
// Utilizar el contexto de notas
import { GraficContext } from "../context/GraficContext";


const GraficListScreen = ({ navigation }) => {
  const { grafic } = useContext(GraficContext);
  useEffect(() => {
    // Efecto secundario realizar la petición a la API
    grafic;
  }, []);
  console.log(grafic);
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.texto}>Statistic</Text>
      </View>
      <View style={styles.cuerpo}>
        <FlatList
        data={grafic}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
        <Text>Grafic not found</Text>}
        renderItem={({ item }) => {
          return (
            <View> 
                <Card>
                  <CardItem header bordered>
                  <Text>{item.name}</Text>
                  </CardItem>
                  <CardItem bordered>
                  </CardItem>
                  <CardItem footer bordered>
                    <Text>{item.Creacion}</Text>
                  </CardItem>
                </Card>
            </View>
          )
        }}
        />
      </View>
      <View style={styles.pie}>
          <Fab
            active={true}
            position="bottomRight"
            style={{ backgroundColor: "#00BCD4" }}
            direction="down"
          >
          <Icon name="plus" type="FontAwesome" />
          </Fab>
        </View>
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
  },
  encabezado:{
    flex:1,
    backgroundColor:"#0097A7",
    justifyContent:"center",
  },
  cuerpo:{
    flex:4,
    backgroundColor:"#FFFFFF",
    justifyContent:"center",
  },
  pie:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    backgroundColor:"#0097A7"
  },
  texto:{
    color:"#B2EBF2",
    textAlign:"center", 
    fontSize:46
  },

});

export default GraficListScreen;