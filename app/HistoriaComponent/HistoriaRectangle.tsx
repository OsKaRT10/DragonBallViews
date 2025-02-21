import {Image, StyleSheet, View, Text} from "react-native";


interface Props {
    url: string;
    text: string;
}

const imageSources: { [key: string]: any } = {
    "goku": require("../../assets/hexagon_goku.png"),
    "vegeta": require("../../assets/vegeta.jpg"),
    "gohan": require("../../assets/gohan.jpg"),
};

export const RectangleDesign = ({ text, url }: Props) => {
    return (
        <View style={styles.container}>
                <Image style={styles.imagen} source={imageSources[url]} />
            <Text style={styles.texto}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        marginVertical: 5,
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
    },
    imagen: {
        marginBottom: 5,
        marginLeft: 15,
    },
    texto: {
        fontSize: 30,
        marginLeft: 35,

    },
});