
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {HistoriaWhatifRectangle} from "./HistoriaWhatifRectangle";


export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                    <Text style={styles.titulo}>SON GOKU: What if?</Text>
                </View>

                <HistoriaWhatifRectangle
                    url={"piccolo"}
                    title={"Codo con codo"}
                    description={"Tienes que tomar una decisión de diálogo cuando tengas las ocasión elige la opción " +
                        "“Luchar en solitario”, asi pasaras a la fase Raditz contra la Escuela Tortuga”"}
                    url2={"wif"}
                    description2={"En tu combate contra Raditz tendrás que cumplir con la misión secundaria para poder " +
                        "tener acceso a la historia alternativa que se hace derrotando a Raditz lo ,elige la opción " +
                        "“Luchar en solitario”, asi pasaras a la fase “Raditz contra la Escuela Tortuga”... " +
                        "elige la opción “Luchar en solitario”, asi pasaras a la fase “Raditz contra la Escuela Tortuga”..."}/>

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
