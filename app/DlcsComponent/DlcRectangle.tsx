import {Image, StyleSheet, Text, View} from "react-native";


interface Props {
    url: string;
    dlc: string;
    description: string;
}

const imageSources: { [key: string]: any } = {
    "superhero": require("../../assets/DLC_superhero 1.png"),
    "seasonpass": require("../../assets/seasonpass.png"),
};

export const DlcRectangle = ({url, dlc, description }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.encabezado}>
                <Image style={styles.imagen} source={imageSources[url]} />
                <Text style={styles.titulo}>{dlc}</Text>
            </View>

            <Text style={styles.texto}>{description}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 20,
        elevation: 5,
    },
    encabezado: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    imagen: {
        width: 150,
        height: 150,
        marginRight: 10,
    },
    titulo: {
        fontSize: 20,
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
    }
})