import { Component } from "react";
import { View,TextInput, StyleSheet } from "react-native";

class SearchComponent extends Component {
    render() {
        return (
            <View>
                <TextInput  style={styles.searchInput} placeholder="Ara..."/>
            </View>

        );
    }
}
const styles= StyleSheet.create({
    searchInput:{
        borderRadius:10,
        padding:10,
        backgroundColor:"#ECEFF1",
        margin:10,
        marginTop:1,
        marginBottom:5
    }
})
export default SearchComponent;