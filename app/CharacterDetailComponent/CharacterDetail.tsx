import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';
import {ItemBlurText} from "./ItemBlurText";

export default function App() {
    return (
        <ImageBackground
            source={require("./assets/fondo_proyecto.jpg")}
            style={styles.container}
        >
            <View>
                <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                <Text style={styles.titulo}>PERSONAJES</Text>
            </View>
            <ScrollView style={styles.principal} horizontal={false}>
                <View style={styles.adjustContainer}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.goku}>Goku (Super)</Text>
                        <Image style={styles.like} source={require("./assets/Like.png")}></Image>
                    </View>
                    <View style={styles.imagenContainer}>
                        <Image style={styles.imagen} source={require("./assets/goku.jpg")}/>
                    </View>

                    <Text style={styles.habilidadesTitle}>HABILIDADES</Text>
                    <View style={styles.habilidadesContainer}>
                        <ItemBlurText text={'Teletransportación'} habilitate={1}></ItemBlurText>
                        <ItemBlurText text={'A tope'} habilitate={1}></ItemBlurText>
                        <ItemBlurText text={'SuperKameHameha'} habilitate={2}></ItemBlurText>
                        <ItemBlurText text={'Explosión dragón'} habilitate={2}></ItemBlurText>
                        <ItemBlurText text={'SuperGenkidama'} habilitate={3}></ItemBlurText>
                    </View>


                    <View style={styles.transformacionesContainer}>
                        <Text style={styles.habilidadesTitle}>TRANSFORMACIONES</Text>
                        <ScrollView horizontal={true}>
                            <Image style={styles.imagenTrans} source={require("./assets/b0a4c26777707c9e3121e735faa3b71c.jpg")}/>
                            <Image style={styles.imagenTrans} source={require("./assets/b0a4c26777707c9e3121e735faa3b71c.jpg")}/>
                            <Image style={styles.imagenTrans} source={require("./assets/b0a4c26777707c9e3121e735faa3b71c.jpg")}/>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
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
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    principal: {
        width: '100%',
        flex: 1,
        marginVertical: 30
    },
    adjustContainer: {
        width: '95%',
        margin: "auto",
        marginBottom: 40,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: 'rgba(255, 255, 255, 0.39)',
        alignItems:'center',
    },
    goku: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10,
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        alignSelf: 'center',
        position: "relative",
    },
    like: {
        width: 25,
        height: 25,
        marginLeft: 220,
        marginTop: 14,
        position: 'absolute',
    },
    imagenContainer: {
        alignSelf: 'center',
    },
    imagen: {
        marginTop: 10,
        marginBottom: 40,
        width: 150,
        height: 200,
        borderWidth: 2,
        borderColor: "black",
    },
    habilidadesTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
    },
    habilidadesContainer: {
        width: "100%",
        alignItems: "center",
    },
    transformacionesContainer: {
        alignItems: "center",
        marginTop: 30,
    },
    imagenTrans: {
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: 10,
        width: 150,
        height: 200,
        borderWidth: 2,
        borderColor: "black",
    }
});
