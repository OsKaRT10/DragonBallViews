import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";


interface Props {
    url: string;
    text: string;
}

const imageSources: { [key: string]: any } = {
    "dlc": require("../../assets/Controller.png"),
    "new": require("../../assets/Layers.png"),
    "acc": require("../../assets/Person.png"),
};

export const HeaderRectangle = ({url, text}: Props) => {
    return (
        <View style={styles.rectangleHeader}>
            <ImageBackground
                style={styles.fondoNaranja}
                source={require("../../assets/fondo_naranja.png")}
                imageStyle={{borderRadius: 5}}>

                <View style={styles.whiteRectangle}>
                    <Image style={styles.imagenHeader} source={imageSources[url]}></Image>
                    <Text style={styles.textHeader}>{text}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangleHeader: {
        marginHorizontal: 6,
        marginTop: 20,
        width: 120,
        height: 70,
        borderColor: "black",
        borderWidth: 1.5,
        borderRadius: 5,
    },
    fondoNaranja: {
        width: "auto",
        height: 67,
    },
    whiteRectangle: {
        width: 100,
        height: 57,
        alignSelf: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        borderRadius: 5,
        marginTop: 5,
    },
    imagenHeader: {
        width: 40,
        height: 33,
        alignSelf: "center",
        marginTop: 3,
    },
    textHeader: {
        color: "black",
        alignSelf: "center",
        marginBottom: 5,
    }
})