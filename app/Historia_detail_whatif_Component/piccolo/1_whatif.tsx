
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {HistoriaWhatifRectangle} from "../HistoriaWhatifRectangle";


export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                    <Text style={styles.titulo}>PICCOLO: What if?</Text>
                </View>

                <HistoriaWhatifRectangle
                    url={"piccolo"}
                    title={"La enseñanza de un" + "\n" + "mentor"}
                    description={"El primer y único episodio Sparking que puedes desbloquear en la historia de Piccolo es el que recibe el título de \"La enseñanza de un mentor\", al que se puede acceder durante las fases del Arco de los androides y Célula, en el Capítulo 3.\n" +
                        "\n" +
                        "Realmente, desbloquear este episodio apenas tiene misterio alguno:"}
                    url2={"wif"}
                    description2={"Para comenzar este episodio, solo debes avanzar en la historia de Piccolo hasta que puedas jugar la fase \"Pequeña inquietud\".\n" + "\n" +
                        "En esta fase, tendrás que tomar una elección entre dos decisiones posibles.\n" + "\n" +
                        "Si quieres abrir la ruta alternativa, debes elegir la opción de diálogo \"Ayuda a Son Goku\".\n" + "\n" +
                        "No elijas la opción de \"Seguir observando el combate\", o de lo contrario proseguirás la ruta canónica de la historia.\n"}
                url3={"wif"}
                description3={"Al seguir estos pasos que te hemos dicho, darás inicio al episodio Sparking de Piccolo, que comienza con la misión \"Rescatar a Son Goku\", en la que tienes que combatir contra Androide Nº18.\n" +
                    "\n" +
                    "Sin embargo, ten en cuenta que a partir de aquí la ruta es lineal y no importa si juegas en dificultad reducida. Solo tendrás que continuar completando las siguientes batallas hasta llegar al final del episodio, sin mayor problema.\n"}/>
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
