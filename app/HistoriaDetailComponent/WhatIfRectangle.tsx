import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";


interface Props {
    url: string;
    title: string;
    description: string;
}

const imageSources: { [key: string]: any } = {
    "piccolo": require("../../assets/piccolo.png"),
    "wif": require("../../assets/historia_whatif/goku/wiGoku_1.png"),
};

export const WhatifRectangle = ({ title, description, url }: Props) => {
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.encabezado}>
                <Image style={styles.imagen} source={imageSources[url]} />
                <Text style={styles.titulo}>{title}</Text>
            </View>

            <Text style={styles.texto}>{description}</Text>

        </View>
        </TouchableOpacity>
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
        elevation: 5,
    },
    encabezado: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    imagen: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        textDecorationLine: 'underline',
        flexShrink: 1,
    },
    texto: {
        fontSize: 16,
        textAlign: 'left',
        flexWrap: 'wrap',
        lineHeight: 22,
    },
    imagenContainer: {

    }
});