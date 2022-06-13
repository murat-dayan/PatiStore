import React from "react";
import { Text , View , TextInput, StyleSheet, SafeAreaView } from "react-native";



const SearchBar = () => {
    return(
        <View style={styles.search_area}>
            <View style={styles.container}>
                <TextInput style={styles.text_ınput} placeholder="Ara..." />
            </View>
        </View>
    )

}

const styles= StyleSheet.create({
    search_area:{
        margin:10
    },
    container:{
        backgroundColor:'black',
        margin:10,
    },
    text_ınput:{
        backgroundColor:'white',
        fontSize:15,
    }
})

export default SearchBar