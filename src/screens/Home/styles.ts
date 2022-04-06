import { AppState, Platform, StyleSheet } from "react-native";
import AppStyle from "../../config/ColorStyle";
const styles = StyleSheet.create({

    container: {
      
      backgroundColor:AppStyle.color.COLOR_WHITE
  
    },
    
    imgStyle:{
      height: '100%', 
      width: '100%',
      resizeMode : "contain",
    }
  
  });

  export default styles;