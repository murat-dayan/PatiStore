import { StyleSheet , Dimensions} from "react-native"


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        padding:10,
        margin:10
    },

    image:{
        height: Dimensions.get('window').height/4,
        width:'100%',
        borderRadius:10,
        resizeMode:'contain'
    },
    innerContainer:{
        margin:10
    },

    title:{
        fontSize:12,
        fontWeight:'bold'
    },
    price:{
        fontSize:10
    },
    inStock:{
        color:'red',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:12
    }



})












