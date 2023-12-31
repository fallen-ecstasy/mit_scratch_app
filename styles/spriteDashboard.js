import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    spriteDashboard:{
        width:"95%",
        height:"50%",
    },
    container1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#eee",
        alignItems:"center",
        width:"100%",
        height:"30%",
        padding:10,
        marginVertical:10,
    },
    element:{
        height:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    inputBox:{
        display:"flex",
        height:"60%",
        paddingHorizontal:20,
        marginHorizontal:10,
        borderStyle:"solid",
        borderColor:"#000",
        backgroundColor:"#fff",
        borderWidth:0.5,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    container2:{
        height:"70%",
        width:"100%",
        backgroundColor:"#eee",
        display:"flex",
        flexDirection:"row",
        overflow:"scroll",
        paddingHorizontal:5,
        paddingVertical:10
    },
    spriteCard:{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        width:150,
        backgroundColor:"#fff",
        marginHorizontal:20,
    },
    badge:{
        position:"absolute",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        top:0,
        left:130,
        height:40,
        width:40,
        borderRadius:20,
        backgroundColor:"green",
    },
    spriteView:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"80%"
    },
    addBtn:{
        backgroundColor:"#855CD6",
        width:"100%",
        height:"20%",
        color:"#fff",
        display:"flex",
        fontWeight:"600",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        textAlignVertical:"center",
    },
    addSpriteCard:{
        height:"100%",
        width:150,
        backgroundColor:"#fff",
        marginHorizontal:20,
    },
    modal:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    modalRow:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    btnDash:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        marginTop:10
    }
})

export default styles;