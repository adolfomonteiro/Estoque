import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        display:"flex",
    },
    textLogo:{
        marginTop:20,
        fontSize:20,
        margin:10,
    },
    card:{
        alignItems:"center",
       // borderWidth:1,
        marginTop:60,
        height:330,
        backgroundColor:"#fff",
        padding:60,
        width:400,
        shadowColor:"#ccc",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:10,
        margin:"auto",
        borderRadius:20,
        
    },
    welcome:{
        textAlign:"center",
        justifyContent:"center",
        margin:"auto",
        marginTop:5,
        fontWeight:"600",
        fontSize:18,
    },
    inputText:{
        padding:5,
        borderRadius:5,
        width:300,
        marginTop:10,
        backgroundColor:"#d3d3d369",
        color:"#ccc",
        fontWeight:"300"
    },
    form:{

    },
    textEmail:{
        fontWeight:"bold",
    }
}
)