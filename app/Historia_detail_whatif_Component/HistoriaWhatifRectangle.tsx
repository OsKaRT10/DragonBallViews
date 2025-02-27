import { Image, StyleSheet, View, Text } from "react-native";

interface Props {
    url: string;
    url2: string;
    url3: string;
    title: string;
    description: string;
    description2: string;
    description3: string;
}

const imageSources: { [key: string]: any } = {
    "goku": require("../../assets/historia_whatif/goku/daima_ss4.jpg"),
    "wigoku1": require("../../assets/historia_whatif/goku/wiGoku_1.png"),
    "wigoku2": require("../../assets/historia_whatif/goku/wiGoku_2.png"),
    "wigoku3": require("../../assets/historia_whatif/goku/wiGoku_3.png"),
    "wigoku4": require("../../assets/historia_whatif/goku/wiGoku_4.png"),
    "wigoku5": require("../../assets/historia_whatif/goku/wiGoku_5.png"),
    "wigoku6": require("../../assets/historia_whatif/goku/wiGoku_6.png"),
    "vegeta": require("../../assets/historia_whatif/vegeta/daima_vegetassj3.jpg"),
    "wivegeta1": require("../../assets/historia_whatif/vegeta/wiVegeta_1.png"),
    "wivegeta2": require("../../assets/historia_whatif/vegeta/wiVegeta_2.png"),
    "wivegeta3": require("../../assets/historia_whatif/vegeta/wiVegeta_3.png"),
    "wivegeta4": require("../../assets/historia_whatif/vegeta/wiVegeta_4.png"),
    "gohan": require("../../assets/historia_whatif/gohan/gohan.jpg"),
    "wigohan1": require("../../assets/historia_whatif/gohan/wiGohan_1.png"),
    "wigohan2": require("../../assets/historia_whatif/gohan/wiGohan_2.png"),
    "piccolo": require("../../assets/historia_whatif/piccolo/piccolo_daima.jpg"),
    "wipiccolo1": require("../../assets/historia_whatif/piccolo/wiPiccolo_1.png"),
    "wipiccolo2": require("../../assets/historia_whatif/piccolo/wiPiccolo_2.png"),
    "freezer": require("../../assets/historia_whatif/freezer/freezer.jpg"),
    "wifreezer1": require("../../assets/historia_whatif/freezer/freezer.jpg"),
    "wifreezer2": require("../../assets/historia_whatif/freezer/freezer.jpg"),
};

export const HistoriaWhatifRectangle = ({ title, description, description2, description3, url, url2, url3 }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.encabezado}>
                <Image style={styles.imagen} source={imageSources[url]} />
                <Text style={styles.titulo}>{title}</Text>
            </View>

            <Text style={styles.texto}>{description}</Text>

            <Image style={styles.imagenContainer} source={imageSources[url2]} />

            <Text style={styles.description2}>{description2}</Text>

            <Image style={styles.imagenContainer} source={imageSources[url3]} />

            <Text style={styles.description2}>{description3}</Text>
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
        borderColor: 'black',
        borderWidth: 2,
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
