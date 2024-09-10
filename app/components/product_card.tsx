import { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

class ProductCardComponent extends Component<{product:any}> {
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri:this.props.product.imgURL}} style={styles.image} /> 
                <Text style={styles.title}>{this.props.product.title}</Text>  
                <Text style={styles.price}>{this.props.product.price}</Text>
                {
                    !this.props.product.inStock && <Text style={styles.inStock} >STOKTA YOK</Text>
                    
                }   
            </View>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        width:(Dimensions.get("window").width/2),
        maxWidth:(Dimensions.get("window").width/2)-20,
        height:"auto",
        padding:10,
        margin:5,
        marginLeft:10,
        flexDirection:"column",
        backgroundColor:"#ECEFF1",
        borderRadius:10
        
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
        color:"black"
    },
    price:{
        fontSize:16,
        fontWeight:"bold",
        color:"gray",
        marginTop:"auto"
    },
    inStock:{
        fontSize:16,
        fontWeight:"bold",
        color:"red"
    },
    image:{
        alignSelf:"center",
        width:"100%",
        height:150,
        resizeMode:"contain",
        backgroundColor:"white",
        borderRadius:8
    }
})

export default ProductCardComponent;