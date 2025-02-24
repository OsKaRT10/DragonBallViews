import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {HeaderRectangle} from "./HeaderRectangle";
import {CategoriasRectangle} from "./Bodyrectangle";


export default function App() {
    return (
        <ImageBackground source={require("./assets/fondo_proyecto.jpg")} style={styles.container}>

            <View>
                <Image style={styles.imagenChaoz} source={require("./assets/chaoz.png")}></Image>
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
    imagenChaoz: {
        marginTop: 15,
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 1000,
        borderWidth: 1,
    },
    headerContainer: {
        alignSelf: "center",
        flexDirection: "row",
    },
})