import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {RectangleDesign} from "./HistoriaRectangle";

export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.jpg")}></Image>
                    <Text style={styles.titulo}>HISTORIA: What if?...</Text>
                </View>

                <RectangleDesign url={"goku"} text={"Goku(super)"}/>
                <RectangleDesign url={"vegeta"} text={"Vegeta(super)"}/>
                <RectangleDesign url={"gohan"} text={"Gohan(super)"}/>
                <RectangleDesign url={"gohan"} text={"Gohan(super)"}/>
                <RectangleDesign url={"goku"} text={"Goku(super)"}/>
                <RectangleDesign url={"goku"} text={"Goku(super)"}/>
                <RectangleDesign url={"goku"} text={"Goku(super)"}/>
                <RectangleDesign url={"goku"} text={"Goku(super)"}/>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenChaoz: {
        marginTop: 15,
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 1000,
        borderWidth: 1,
    },
    titulo: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
    },
    containerScroll: {
        width: "90%",
    }
})
