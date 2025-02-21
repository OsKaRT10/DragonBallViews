import { Image, StyleSheet, View, Text } from "react-native";

interface Props {
    url: string;
    url2: string;
    title: string;
    description: string;
    description2: string;
}

const imageSources: { [key: string]: any } = {
    "piccolo": require("../../assets/piccolo.png"),
    "wif": require("../../assets/whatif.png"),
};

export const HistoriaWhatifRectangle = ({ title, description, description2, url, url2 }: Props) => {
    return (
        <View style={styles.container}>
            {/* Encabezado con imagen y título */}
            <View style={styles.encabezado}>
                <Image style={styles.imagen} source={imageSources[url]} />
                <Text style={styles.titulo}>{title}</Text>
            </View>

            <Text style={styles.texto}>{description}</Text>

            <Image style={styles.imagenContainer} source={imageSources[url2]} />


            <Text style={styles.description2}>{description2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        textDecorationLine: 'underline',
    },
    imagenContainer: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginVertical: 10,
    },
    texto: {
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 22,
    },
    description2: {
        fontSize: 16,
        padding: 10,
        marginTop: 10,
        textAlign: 'left',
    },
});
