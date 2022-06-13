import { StyleSheet , Dimensions} from "react-native"


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
        padding:10,
        margin:10,
        borderRadius:10
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
        fontSize:15,
        fontWeight:'bold'
    },
    price:{
        fontSize:15,
        fontWeight:"normal",
        fontStyle:'italic'
    },
    inStock:{
        textAlign:"right",
        alignItems:"baseline",
        color:'red',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:15
    }



})












