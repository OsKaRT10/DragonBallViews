import { Image, StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

export default function App() {
    return (
        <ImageBackground
            source={require("./assets/fondo_proyecto.jpg")}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.jpg")} />
                    <Text style={styles.titulo}>PERFIL DE USUARIO</Text>
                    <Text style={styles.username}>@Username</Text>
                    <Text style={styles.persfav}>PERSONAJES FAVORITOS</Text>
                </View>

                <ScrollView horizontal={true} style={styles.scrollContainer}>
                    <Image style={styles.imgfav} source={require("./assets/hexagon_goku.png")} />
                    <Image style={styles.imgfav} source={require("./assets/hexagon_goku.png")} />
                    <Image style={styles.imgfav} source={require("./assets/hexagon_goku.png")} />
                    <Image style={styles.imgfav} source={require("./assets/hexagon_goku.png")} />
                    <Image style={styles.imgfav} source={require("./assets/hexagon_goku.png")} />
                </ScrollView>

                <View style={styles.info}>
                    <Text>
                        Oscar Garcia,{"\n"}{"\n"}
                        Soy una persona seguidora de Dragon Ball y me gusta el juego, soy rango S y mi saga favorita es Z.{"\n"}{"\n"}
                        <Text style={{ fontWeight: "bold" }}>@OscarDB</Text> (instagram) {"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"}
                        <Text style={{ fontWeight: "bold" }}>OscarDB</Text>
                    </Text>
                </View>

                <Text style={styles.persfav}>CLIPS</Text>
                <View style={styles.clips}>
                    <Text style={styles.clipsadd}>ADD FILE...</Text>
                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    innerContainer: {
        justifyContent: "space-between",
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
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
        textAlign: "left",
        marginHorizontal: 10,
    },
    username: {
        color: "white",
        alignSelf: 'flex-start',
        fontSize: 22,
        marginHorizontal: 10,
    },
    persfav: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: { width: 4, height: 0 },
        textShadowRadius: 5,
    },
    scrollContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    imgfav: {
        marginHorizontal: 10,
    },
    info: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 15,
        shadowColor: 'black',
    },
    clips: {
        height: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.39)',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 15,
        shadowColor: 'black',
    },
    clipsadd: {
        alignSelf: 'center',
        marginTop: 50,
    }
});
