
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {HistoriaWhatifRectangle} from "../HistoriaWhatifRectangle";


export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                    <Text style={styles.titulo}>SON GOKU: What if?</Text>
                </View>

                <HistoriaWhatifRectangle
                    url={"goku"}
                    title={"Superando los límites"}
                    description={"El segundo episodio Sparking que está disponible para desbloquear en la historia de Goku es el que recibe el título de \"Superando los límites\", y, como el primero, puedes tener acceso a él durante las fases del Arco de los Saiyans, en el Capítulo 1."}
                    url2={"wigoku3"}
                    description2={"En este caso, en la fase \"¿El dúo más poderoso de la Tierra?!\", tienes que escoger la opción de diálogo que dice \"Colaborar con Piccolo\".\n" + "\n" +
                        "De aquí pasarás a la fase \"Revancha y resultado\", en la que tienes que combatir contra Raditz.\n" + "\n" +
                        "En esta batalla existen dos posibles resultados, pero solo uno de ellos te llevará hacia la ruta del episodio Sparking.\n" +
                        "Como ocurría en el anterior episodio, aquí también tendrás que derrotar a Raditz lo más rápido que puedas.\n" + "\n" +
                        "Ten en cuenta que si tardas demasiado en derrotar a Raditz, el combate llegará a su fin de manera natural y continuarás la historia original. Necesitas jugar en dificultad predeterminada y ser lo suficientemente rápido."}
                url3={"wigoku4"}
                description3={"Puedes usar de referencia una frase de Piccolo, cuando le pregunta a Goku si ha desarrollado alguna nueva técnica de combate. Justo después de esta frase, tendrás aproximadamente un minuto para bajar todo lo que le quede de salud a Raditz y cumplir el requisito secundario.\n" +
                    "\n" +
                    "Si cumples la condición correctamente, pasarás a iniciar el episodio Sparking en cuestión, con una batalla contra Son Gohan niño. De aquí en adelante, solo tienes que ir derrotando a los siguientes contrincantes en la ruta lineal para finalizar el episodio."}/>
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
