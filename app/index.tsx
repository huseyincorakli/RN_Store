import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchComponent from "./components/search";
import ProductCardComponent from "./components/product_card";
import products from "../data.json"

export default function Index() {
  const renderProduct=({item}:any)=>{
    return <ProductCardComponent product={item}/>
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:"white"
      }}
    >
      <Text style={styles.storeHeader}>PATIKASTORE</Text>
      <SearchComponent />
      <FlatList
      data={products}
      renderItem={renderProduct}
      numColumns={2}
      />
      </SafeAreaView>
  );
}
const styles= StyleSheet.create({
  storeHeader:{
    fontSize:30,
    fontWeight:"bold",
    color:"purple",
    padding:10,

  }
})