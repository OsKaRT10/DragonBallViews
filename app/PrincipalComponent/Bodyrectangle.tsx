import {StyleSheet, View, Text, ImageBackground} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

interface Props {
    url: string;
    text: string;
}

const imageSources: { [key: string]: any } = {
    "chr": require("../../assets/personajesdb.png"),
    "ctr": require("../../assets/controles.png"),
    "his": require("../../assets/bolasdragon.png"),
    "plt": require("../../assets/platino.png"),
};

export const CategoriasRectangle = ({ text, url }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    style={styles.imagen}
                    source={imageSources[url]}
                    imageStyle={{borderRadius: 10}}>

                    <Text style={styles.text}>{text}</Text>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 45,

    },
    imageContainer: {
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        marginHorizontal: 15,
    },
    imagen: {
        width: "100%",
        height: 120,
    },
    text: {
        fontSize: 20,
        color: "white",
        alignSelf: "center",
        marginTop: 40,
    },

});
