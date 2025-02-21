import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

import {WhatifRectangle} from "./WhatIfRectangle";

export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.jpg")}></Image>
                    <Text style={styles.titulo}>SON GOKU: What if?</Text>
                </View>


                <WhatifRectangle url={"piccolo"} title={"Codo con codo"} description={"Tienes que tomar una decisión de diálogo cuando tengas las ocasión elige la opción “Luchar en solitario”, asi pasaras a la fase “Raditz contra la Escuela Tortuga”.\n" +
                    "En tu combate contra Raditz tendrás que ..."}/>
                <WhatifRectangle url={"piccolo"} title={"Codo con codo"} description={"Tienes que tomar una decisión de diálogo cuando tengas las ocasión elige la opción “Luchar en solitario”, asi pasaras a la fase “Raditz contra la Escuela Tortuga”.\n" +
                    "En tu combate contra Raditz tendrás que ..."}/>
                <WhatifRectangle url={"piccolo"} title={"Codo con codo"} description={"Tienes que tomar una decisión de diálogo cuando tengas las ocasión elige la opción “Luchar en solitario”, asi pasaras a la fase “Raditz contra la Escuela Tortuga”.\n" +
                    "En tu combate contra Raditz tendrás que ..."}/>
                <WhatifRectangle url={"piccolo"} title={"Codo con codo"} description={"Tienes que tomar una decisión de diálogo cuando tengas las ocasión elige la opción “Luchar en solitario”, asi pasaras a la fase “Raditz contra la Escuela Tortuga”.\n" +
                    "En tu combate contra Raditz tendrás que ..."}/>

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
