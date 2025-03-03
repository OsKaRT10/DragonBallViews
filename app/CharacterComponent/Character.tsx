import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { PersonajesDesign } from "./CharacterDesign";

export default function App() {
    return (
        <ImageBackground source={require('./assets/fondo_proyecto.jpg')} style={styles.container} >
            <ScrollView style={styles.containerScroll}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")} />
                    <Text style={styles.titulo}>PERSONAJES</Text>
                </View>

                <View style={styles.personajesContainer}>
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                    <PersonajesDesign url={"goku"} text={"Goku (Super)"} />
                </View>
            </ScrollView>
        </ImageBackground>
    );
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
    },
    personajesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
    },
});
