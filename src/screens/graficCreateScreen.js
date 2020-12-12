import React, { useState,useContext,useEffect } from "react";
import {StyleSheet,FlatList} from "react-native";
import {Button,
    Container,
    Content,
    H1,
    Text,
    Card,
    ListItem,
    Input,
    Spinner,
    View,
    Body,} from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { GraficContext } from "../context/GraficContext";
import {TypeContext} from "../context/typeContext";
import * as Font from "expo-font";

const graficCreateScreen = ({ navigation }) => {
    const [idTipo, setIdTipo] = useState("");
    const [Name, setName] = useState("");
    const [LablesOne, setLablesOne] = useState("");
    const [DataOne,setDataOne] = useState("");
    const [LableTwo, setLableTwo] = useState("");
    const [DataTwo,setDataTwo] = useState("");
    const [LablesThree, setLableThree] = useState("");
    const [DataThree,setDataThree] = useState("");
    const [LableFour, setLableFour] = useState("");
    const [DataFour,setDataFour] = useState("");
    const [LableFive, setLableFive] = useState("");
    const [DataFive,setDataFive] = useState("");

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [enableSave, setEnableSave] = useState(true);
    const [errorgrafic, setErrorGrafic] = useState(false);
    const typeContext = useContext(TypeContext);
    const graficContext = useContext(GraficContext);
    const { addNewGrafic,refreshGrafic } = graficContext;

    const{type} = typeContext;
     // Cargar la fuente de manera asíncrona
  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }).then(() => {
        setFontsLoaded(true);
      });
    };

    loadFontsAsync();
  }, []);

    const handlerNewGrafic = () => {
        if(idTipo,Name,Lables,Data){
        addNewGrafic(idTipo,Name,LablesOne,DataOne,LableTwo,DataTwo,LablesThree,
                    DataThree,LableFour,DataFour,LableFive,DataFive,refreshGastos);
          navigation.goBack();
        }
        else {
            setErrorGrafic(true);
          } 
        };
    console.log(type);
    if (!fontsLoaded)
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );
    return(
        <Container style={styles.container}>
            <View style={styles.cuerpo}>
            <View style={styles.marco}>
            <Text style={styles.textoCards}>
                Add Name of the Grafic
            </Text>
            <Input style={styles.tamano}
            value={Name}
            onChangeText={setName}
            placeholder="Write the name"/>
           
            </View>
            <View style={styles.marco}>
            <Text style={styles.textoCards}>
             Add Type the Grafic
            </Text>
            <FlatList
        data={type}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
        <Text>Grafic not found</Text>}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity >
            <View> 
                <Card>
                    <Text>{item.nameType}</Text>
                </Card>
            </View>
            </TouchableOpacity>
          )
        }}
        />
            </View>
            </View>
            
            <View style={styles.cuerpoDos}>
            <View style={styles.marcoDos}>
            <ScrollView>
                <Text style={styles.textoCards}>Lable One</Text>
                <Input style={styles.tamanoDos} value={LablesOne} onChangeText={setLablesOne}placeholder="Write the lable one"/>
                <Text style={styles.textoCards}>Data One</Text>
                <Input style={styles.tamanoDos} value={DataOne} onChangeText={setDataOne}placeholder="Write the data one"/>
                <Text style={styles.textoCards}>Lable Two</Text>
                <Input style={styles.tamanoDos} value={LableTwo} onChangeText={setLableTwo}placeholder="Write the lable two"/>
                <Text style={styles.textoCards}>Data Two</Text>
                <Input style={styles.tamanoDos} value={DataTwo} onChangeText={setDataTwo}placeholder="Write the data two"/>
                <Text style={styles.textoCards}>Lable Three</Text>
                <Input style={styles.tamanoDos} value={LablesThree} onChangeText={setLableThree}placeholder="Write the lable three"/>
                <Text style={styles.textoCards}>Data Three</Text>
                <Input style={styles.tamanoDos} value={DataThree} onChangeText={setDataThree}placeholder="Write the data three"/>
                <Text style={styles.textoCards}>Lable Four</Text>
                <Input style={styles.tamanoDos} value={LableFour} onChangeText={setLableFour}placeholder="Write the lable four"/>
                <Text style={styles.textoCards}>Data Four</Text>
                <Input style={styles.tamanoDos} value={DataFour} onChangeText={setDataFour}placeholder="Write the data four"/>
                <Text style={styles.textoCards}>Lable Five</Text>
                <Input style={styles.tamanoDos} value={LableFive} onChangeText={setLableFive}placeholder="Write the lable five"/>
                <Text style={styles.textoCards}>Data Five</Text>
                <Input style={styles.tamanoDos} value={DataFive} onChangeText={setDataFive}placeholder="Write the data five"/>
                </ScrollView>
            </View>
            </View>
            
            
            <View style={styles.pie}>
            <Button style={styles.button}><Text>Add Grafic</Text></Button>
            </View>

        </Container>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
    },
    button: {
        fontSize:23,
        alignContent:"center",
        justifyContent:"center",
        marginTop:40,
        width:250,
        maxHeight:70,
        fontFamily: "Roboto",
        backgroundColor: "#00BCD4"
      },
    cuerpo:{
      flex:2,
      backgroundColor:"#FFFFFF",
      justifyContent:"space-around",
      flexDirection:"row"
    },
    cuerpoDos:{
        flex:3,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        flexDirection:"column"
          },
    textoCards:{
      color: "#000",
      alignContent:"center",
        fontSize:20,
    },
    pie:{
      flex:1,
      flexDirection:"row",
      alignContent:"center",
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
        flexDirection:"column",
        borderRadius: 10,
        backgroundColor: "#B2EBF2",
        height: 200,
        marginLeft: 5,
        marginTop: 5,
        marginRight: 7,
        alignItems:"center",
        alignContent:"flex-start",},
        
    marco:{
      flex: 1,
      flexDirection:"column",
      borderRadius: 10,
      backgroundColor: "#B2EBF2",
      height: 200,
      marginLeft: 5,
      marginTop: 5,
      marginRight: 7,
      alignItems:"center",
      alignContent:"flex-start",
      
    },
    marcoDos:{
        flex: 1,
        flexDirection:"column",
        borderRadius: 10,
        backgroundColor: "#B2EBF2",
        height: 100,
        marginLeft: 7,
        marginTop: -40,
        marginRight: 7,
        alignContent:"flex-start",
    },
    tamano:{
        backgroundColor:"#ffffff",
        marginTop:70,
        marginVertical:70,
        marginStart:0,
        marginLeft:10,
        marginRight:10,
        width:200,
        height:10,
      },
      tamanoDos:{
        backgroundColor:"#ffffff",
        marginTop:1,
        marginLeft:10,
        marginRight:20,
        maxHeight:30,
      },
  
  });
  
  export default graficCreateScreen;