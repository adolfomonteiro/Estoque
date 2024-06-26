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
        marginTop:40,
        height:380,
        backgroundColor:"#fff",
        padding:60,
        width:450,
        shadowColor:"#ccc",
        shadowOffset:{width:0,height:0},
        shadowOpacity:1,
        shadowRadius:2,
        elevation:5,
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
        padding:8,
        borderRadius:5,
        width:300,
        marginTop:10,
        backgroundColor:"#d3d3d369",
        color:"#c5c5c5",
        fontWeight:"600",
    
    },
    form:{
        marginTop:10,
    },
    textEmail:{
        fontWeight:"600",
        color:"#434343",
    },
    textPassword:{
        fontWeight:"600",
        color:"#434343",
        marginTop:10,
    },
    checkbox:{
        marginLeft:-280,
        marginTop:15,
    },
    textCheck:{
        marginTop:-18,
        marginLeft:20,
        fontSize:12,
    },
    forgot:{
        marginTop:-16,
        marginLeft:206,
        fontSize:12,
        color:"darkcyan",
    },
    button:{
        backgroundColor:"darkcyan",
        marginTop:20,
        padding:6,
        borderRadius:5,
    },
    buttonText:{
        textAlign:"center",
        color:"#fff",
    },
    span:{
        display:"flex",
        justifyContent:"space-around",
        margin:"auto",
    },
    member:{
        display:"flex",
        justifyContent:"space-between",
        marginLeft:-10,
        marginTop:5,
        fontSize:12,
    },
    register:{
        marginTop:-16,
        marginLeft:95,
        fontWeight:"600",
        color:"darkcyan",
        fontSize:12,
    }
}
)