import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";

interface Props {
    url: string;
    text: string;
}

const imageSources: { [key: string]: any } = {
    "goku": require("../../assets/hexagon_goku.png"),
};

export const PersonajesDesign = ({ text, url }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.imagen} source={imageSources[url]} />
            </TouchableOpacity>
                <Text style={styles.texto}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        marginHorizontal: 40,
        marginVertical: 12,
    },
    imagen: {
        width: 88,
        height: 100,
        marginTop: 20,
    },
    texto: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginTop: 5,
    },
});
