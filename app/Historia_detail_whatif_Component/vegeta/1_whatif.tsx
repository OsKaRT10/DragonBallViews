
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {HistoriaWhatifRectangle} from "../HistoriaWhatifRectangle";


export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                    <Text style={styles.titulo}>VEGETA: What if?</Text>
                </View>

                <HistoriaWhatifRectangle
                    url={"piccolo"}
                    title={"Vinculo parental"}
                    description={"El primer episodio Sparking que puedes desbloquear en la historia de Vegeta es el que recibe el título de \"Vínculo parental\", al que se puede acceder durante las fases del Arco de los androides y Célula, en el Capítulo 2."}
                    url2={"wif"}
                    description2={"Para desbloquear esta ruta secundaria, comienza jugando la fase \"Muñeca de cuerda\".\n" + "\n" +
                        "En esta batalla tendrás que derrotar lo más rápido que puedas a Androide Nº18.\n" + "\n" +
                        "Tendrás que ser lo suficientemente rápido, o de lo contrario la lucha contra Androide Nº18 llegará al final automáticamente y continuarás la senda canónica.\n" + "\n" +
                        "Si cumples el requisito mencionado, podrás pasar a la nueva fase alternativa titulada \"Vegeta y Trunks\", en la Cámara del Tiempo Hiperbólico.\n" + "\n" +
                        "Aquí tu objetivo secundario será abrumar a Trunks rápidamente para poder derrotarlo en su forma Súper Trunks.\n"}
                url3={"wif"}
                description3={"Respecto a este último requisito, ten en cuenta que si Trunks no se convierte en Súper Trunks durante la batalla y lo derrotas en su forma normal, regresarás a la línea canónica de Vegeta. Por lo tanto, sí o sí para poder activar el resto del episodio Sparking necesitas vencerlo rápidamente.\n" +
                    "\n" +
                    "Cabe añadir que no es estrictamente necesario derrotarlo rápido, más bien tienes que bajarle rápidamente un gran porcentaje de vida en apenas un par de minutos para que se transforme en Súper Trunks. Para ello, puedes intentar cargar al máximo la barra de Ki lo más rápido posible para entrar en el modo Sparking, golpear un poco a Trunks hasta que te quede más o menos la mitad de la barra y acto seguido usar la habilidad definitiva para quitarle mucha vida de golpe.\n" +
                    "\n" +
                    "Si lo haces bien, y en poco tiempo, Trunks se transformará en Súper Trunks y a partir de entonces solo te quedará vencerlo en ese estado para cumplir con la condición secundaria de la fase. El resto del episodio Sparking continuará por una ruta lineal, sin mayor problema."}/>
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
