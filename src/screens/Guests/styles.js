import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },

    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    button: {
        borderWidth: 1,
        borderRadius: 15, 
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#676767',
    },

    buttonText: {
       marginHorizontal: 20,
       fontSize: 16,

    },

    buttonInnerText: {
        fontSize: 20,
        color: '#474747'
    },

    guestButton: {
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    },

    guestButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }

})

export default styles