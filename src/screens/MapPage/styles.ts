import { AppState, Platform, StyleSheet } from "react-native";
import AppStyle from "../../config/ColorStyle";
const styles = StyleSheet.create({

    container: {
      
        flex : 1,
      backgroundColor:AppStyle.color.COLOR_WHITE
  
    },
    
    imgStyle:{
      height: '100%', 
      width: '100%',
      resizeMode : "contain",
    },
    backBtn:{
        width : 30,
        height : 30,
        zIndex : 1
    },
    backImg:{
        width : 40,
        height : 30,
    }
  
  });

  export default styles;