import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface Props {
    url: string;
    title: string;
    description?: string;
}

const imageSources: { [key: string]: any } = {
    "video": require("../../assets/b0a4c26777707c9e3121e735faa3b71c.jpg"),
};

export const NoticiasRectangle = ({ title, description, url }: Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imagen} source={imageSources[url]} />

            <Text style={styles.titulo}>{title}</Text>
            <Text style={styles.texto}>{description}</Text>

            <TouchableOpacity style={styles.sabermas}>
                <Text style={styles.sabermasTexto}>Saber más...</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
        shadowColor: 'black',
    },
    imagen: {
        width: "90%",
        height: 150,
        resizeMode: "cover",
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 16,
        textAlign: 'left',
        marginTop: 10,
        marginHorizontal: 15,
    },
    texto: {
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 22,
        marginTop: 5,
    },
    sabermas: {
        width: 80,
        height: 28,
        alignSelf: 'flex-end',

        padding: 8,
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderColor: 'black',
    },
    sabermasTexto: {
        fontSize: 8,
        fontWeight: "bold",
        color: "black",
        alignSelf: 'center',
    }
});
