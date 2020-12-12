import React, { useContext, useEffect, useState } from "react";
import { StyleSheet,FlatList,Dimensions,Image } from "react-native";
import {
  Card,
  Fab,
  Icon,
  Button,
  CardItem,
  Text,
  View,
} from "native-base";

const {width,height} = Dimensions.get('window').width;
// Utilizar el contexto de notas
import { GraficContext } from "../context/GraficContext";


const GraficListScreen = ({ navigation }) => {
  const direccion = 'https://raw.githubusercontent.com/Diegomau182/Statistics/develop/assets/graficas/';  
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
                  <CardItem header bordered style={{alignContent:"center", justifyContent:"center"}}>
                  <Text style={styles.textoCards}>{item.name}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <View style={{flexDirection:"row"}}>
                    
                    <View  style={styles.marco}>
                    <Image source={{uri:`${direccion}${item.nameType}.png`}} style={styles.ImagenLogo}></Image>
                    </View>
                    <View style={styles.marcoDos}>
                      <Text>Lables</Text>
                      <Text>{item.lablesOne},{item.lableTwo},{item.lableThree},{item.lableFour},{item.lableFive}</Text>
                    <Text></Text>
                    <Text>Data</Text>
                      <Text>{item.dataOne},{item.dataTwo},{item.dataThree},{item.dataFour},{item.dataFive}</Text>
                    </View>
                    </View>
                  </CardItem>
                  <CardItem footer bordered style={{flexDirection:"row-reverse"}}>
                    <View >
                    <Text>{item.Creacion}</Text>
                    </View>
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
            position=""
            style={{ backgroundColor: "#00BCD4" }}
            direction="down"
            onPress={() => {navigation.navigate("Create Grafic")}}
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
  textoCards:{
    color: "#000",
    alignContent:"center",
      fontSize:25,
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
  ImagenLogo: {
    flex: 1,
    resizeMode: "stretch",
  },
  marco:{
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#B2EBF2",
    height: 155,
    marginLeft: -10,
    marginTop: -4,
    marginRight: -15,
    alignContent: "center",
    justifyContent: "center",
  },
  marcoDos:{
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#B2EBF2",
    height: 155,
    marginLeft: 1,
    marginTop: -4,
    marginRight: -15,
    alignContent: "center",
    justifyContent: "center",
  },

});

export default GraficListScreen;