import { AppState, Platform, StyleSheet } from "react-native";
import AppStyle from "../../config/ColorStyle";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyle.color.COLOR_WHITE,
  },

  imgStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  flatlistData: {
    height: 200,
    width: "47%",
    backgroundColor: "#2CDFE3",
    // justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 8,
    margin: 5,
  },
});

export default styles;
