import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25, 
        lineHeight: 78
    },

    button: {
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    searchButton: {
        backgroundColor: '#fff',
        height: 55,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        elevation: (Platform.OS === 'android') ? 50 : 0,
        width: Dimensions.get('window').width - 20,
        borderRadius: 27,
    },

    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

})

export default styles