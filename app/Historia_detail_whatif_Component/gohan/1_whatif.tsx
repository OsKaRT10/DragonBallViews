
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {HistoriaWhatifRectangle} from "../HistoriaWhatifRectangle";


export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                    <Text style={styles.titulo}>SON GOHAN: What if?</Text>
                </View>

                <HistoriaWhatifRectangle
                    url={"piccolo"}
                    title={"El guerrero mas fuerte"}
                    description={"El primer y único episodio Sparking que puedes desbloquear en la historia de Son Gohan es el que recibe el título de \"El guerrero más fuerte\", al que se puede acceder durante las fases del Arco de Bills, Dios de la Destrucción/resurrección de Freezer, en el Capítulo 5."}
                    url2={"wif"}
                    description2={"Para empezar este episodio, comienza jugando la fase titulada \"¡Defiende la Tierra del ejército de Freezer!\".\n" +
                        "En esta batalla, la condición secundaria te pedirá ponérselo difícil a Freezer.\n" + "\n" +
                        "Esto quiere decir que tienes que derrotar tanto al soldado del ejército de Freezer como a Freezer lo más rápido que puedas y sin recibir mucho daño.\n" + "\n" +
                        "Si lo haces bien, lograrás completar la batalla antes de que Son Gohan admita que su poder es demasiado bajo porque no entrenó lo suficiente.\n" + "\n" +
                        "Si tardas mucho o recibes demasiado daño, la historia continuará automáticamente hacia el camino canónico, cosa que no te interesa en este caso.\n" + "\n"}
                    url3={"wif"}
                    description3={"Una buena manera de cumplir el requisito mencionado es utilizando el truco que te desvelamos en nuestra guía para vencer enemigos difíciles, ya que el mismo también se puede aplicar para derrotar contrincantes en poco tiempo.\n" +
                        "\n" +
                        "Cuando logres superar la batalla como te hemos dicho, accederás al recorrido de este episodio Sparking que comienza en la fase \"Hijo de Son Goku\". En general, el episodio no tiene ningún misterio, ya que es una senda lineal sin otras alternativas, aunque bastante larga y por momentos exigente."}/>
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
