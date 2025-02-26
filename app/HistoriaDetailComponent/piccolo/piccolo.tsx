import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

import {WhatifRectangle} from "../WhatIfRectangle";

export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                    <Text style={styles.titulo}>PICCOLO: What if?</Text>
                </View>


                <WhatifRectangle url={"piccolo"} title={"La enseñanza de un mentor"} description={"El primer y único episodio Sparking que puedes desbloquear en la historia de Piccolo es el que recibe el título de \"La enseñanza de un mentor\", al que se puede acceder durante las fases del Arco de los androides y Célula..."}/>
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
