import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    container: {
        margin: 20,

    },

    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    prices: {
        fontSize: 18,
        marginVertical: 10
    },

    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },

    newPrice: {
        fontWeight: 'bold',

    },

    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },

    description: {
        fontSize: 18,
        lineHeight: 26,
    },

    bedrooms: {
        marginVertical: 10,
        fontSize: 14,
        color: '#5b5b5b',
    },

})

export default styles