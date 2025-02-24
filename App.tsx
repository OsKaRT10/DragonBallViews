import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

import {NoticiasRectangle} from "./app/noticiasComponent/NoticiaRectangle";

export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.jpg")}></Image>
                    <Text style={styles.titulo}>NOTICIAS</Text>
                </View>

                <NoticiasRectangle url={"video"} title={"Actualización de DRAGON BALL: Sparking! ZERO: cambios y " +
                    "ajustes en las funciones y los sistemas de combate"} description={""}/>

                <NoticiasRectangle url={"video"} title={"Actualización de DRAGON BALL: Sparking! ZERO: cambios y " +
                    "ajustes en las funciones y los sistemas de combate"} description={""}/>

                <NoticiasRectangle url={"video"} title={"Actualización de DRAGON BALL: Sparking! ZERO: cambios y " +
                    "ajustes en las funciones y los sistemas de combate"} description={""}/>

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
