import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {HeaderRectangle} from "./app/PrincipalComponent/HeaderRectangle";
import {CategoriasRectangle} from "./app/PrincipalComponent/Bodyrectangle";


export default function App() {
    return (
        <ImageBackground source={require("./assets/fondo_proyecto.jpg")} style={styles.container}>

            <View style={styles.alignContainer}>
                    <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
                    <Image style={styles.inicioSesion}source={require("./assets/INICIO_SESION.png")}></Image>
            </View>

            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <HeaderRectangle url={"dlc"} text={"DLC´S"}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <HeaderRectangle url={"new"} text={"NOTICIAS"}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <HeaderRectangle url={"acc"} text={"MI CUENTA"}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <CategoriasRectangle url={"chr"} text={"PERSONAJES"}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <CategoriasRectangle url={"ctr"} text={"CONTROLES"}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <CategoriasRectangle url={"his"} text={"HISTORIA"}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <CategoriasRectangle url={"plt"} text={"PLATINO"}/>
            </TouchableOpacity>

        </ImageBackground>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    alignContainer: {
        flexDirection: "row",
        alignSelf: 'center',
    },
    imagenChaoz: {
        marginTop: 15,
        width: 50,
        height: 50,
        borderRadius: 1000,
        borderWidth: 1,
        position: 'relative',
    },
    inicioSesion: {
        width: 105,
        height: 30,
        marginLeft: 105,
        marginTop: 27,
        position: "absolute",
    },
    headerContainer: {
        alignSelf: "center",
        flexDirection: "row",
    },

})