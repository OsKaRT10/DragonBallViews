
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
                    title={"El futuro cambiante"}
                    description={"El tercer y último episodio Sparking que puedes desbloquear en la historia de Goku es el que recibe el título de \"El futuro cambiante\", al que se puede acceder durante las fases del Arco de los androides y Célula, en el Capítulo 3."}
                    url2={"wigoku5"}
                    description2={"Para empezar la ruta de este episodio, tienes que jugar la fase \"Cámara de Tiempo Hiperbólico\".\n" + "\n" +
                        "En esta fase tienes que elegir cuando tengas ocasión la opción de diálogo que dice \"Ir a ayudar\".\n" + "\n" +
                        "De esta manera, pasarás directamente hacia la fase \"¡Derrota a Célula!\".\n" + "\n" +
                        "En esta batalla tendrás que combatir contra la primera forma de Célula, pero pueden desencadenarse dos caminos distintos según lo que ocurra.\n" + "\n" +
                        "Para cumplir la condición secundaria, debes evitar que durante el combate te alcance el ataque Bengala Solar de Célula.\n"}
                url3={"wigoku6"}
                description3={"En cualquier momento de esta batalla, Célula puede usar su ataque Bengala Solar, en el cual desata una bengala que te deja desorientado algunos segundos (la visión cambiará con colores en blanco y negro).\n" +
                    "\n" +
                    "Lamentablemente, no hay forma de saber cuándo realizará Célula este ataque, pero si lo atacas sin descanso y no le das tiempo para reaccionar, es muy probable que no utilice la habilidad. Derrotarlo deprisa es una buena manera de reducir las probabilidades de que use el ataque.\n" +
                    "\n" +
                    "En cualquier caso, recuerda que si usa Bengala Solar pero estás lejos de él y la habilidad no te afecta directamente, aún puedes derrotarlo para cumplir con la condición y desbloquear el episodio Sparking. Tras activarlo, solo tienes que seguir una ruta lineal sin más cambios posibles hasta llegar al final."}/>
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
