import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        height:"100%",
        backgroundColor:"#ddd"
    },
    codeContainer:{
        width:"50%",
        height:"100%",
        borderRightWidth:0.5,
        borderRightColor:"#000",
        borderStyle:"solid"
    },
    codeHeading:{
        backgroundColor:"#855CD6",
        color:"#fff",
        fontWeight:"600",
    },
    codeBox:{
        margin:5,
        backgroundColor:"#c6aaff",
        padding:10
    },
    actionsContainer:{
        display:"flex",
        flexDirection:"column",
        width:"50%",
    },
    actionSelect:{
        padding:10,
        borderBottomWidth:0.5,
        borderColor:"#000",
        borderStyle:"solid"
    },
    actionBtnGroup:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between"
    },
    actionHeading:{
        backgroundColor:"#855CD6",
        color:"#fff",
        fontWeight:"600",
    },
    actionContainer:{},
})

export default styles