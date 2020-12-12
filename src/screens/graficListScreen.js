import React, { useContext, useEffect } from "react";
import { StyleSheet,FlatList,Dimensions,Image } from "react-native";
import {
  Card,
  Fab,
  Icon,
  Body,
  CardItem,
  Text,
  View,
} from "native-base";

const {width,height} = Dimensions.get('window').width;
// Utilizar el contexto de notas
import { GraficContext } from "../context/GraficContext";

const GraficListScreen = ({ navigation }) => {
  const direccion = 'https://raw.githubusercontent.com/Diegomau182/Statistics/develop/assets/logos/';  
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
                    <View>
                    <Text>Lables:{item.lables}</Text>
                    <View style={styles.marco}>
                    <Image source={ require("../../assets/logos/"+item.nameType+".png")} style={styles.ImagenLogo}></Image>
                    </View>
                    <Text>Data:{item.data}</Text>
                    </View>
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
    backgroundColor: "#e8cc57",
    height: 155,
    marginLeft: 0,
    marginTop: -4,
    marginRight: -15,
    alignContent: "center",
    justifyContent: "center",
  },

});

export default GraficListScreen;