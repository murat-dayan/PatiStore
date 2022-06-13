import React from "react";
import { View , Text, SafeAreaView , StyleSheet , FlatList} from "react-native";
import SearchBar from "./components/SearchBar/SearchBar";
import product_data from './product-data.json'
import CardItem from "./components/CardItem/CardItem";

function storeApp(){

  const render_item= ({item}) => <CardItem product={item}/> 
  return(
    <View style={styles.container}>
      <Text style={styles.header_text}>PATISTORE</Text>
      <SearchBar />
      <FlatList 
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={render_item}
      />
    </View>
  )

}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:20,
    backgroundColor:'orange'
  },

  header_text:{
    fontSize:50,
    color:'purple',
    textAlign:'center',
    borderRadius:10,
    fontStyle:"italic"
  }
})
  


export default storeApp