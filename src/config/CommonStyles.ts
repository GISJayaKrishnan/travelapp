import { AppState, Platform, StyleSheet, Dimensions } from "react-native";
import AppStyle from './ColorStyle'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: AppStyle.color.COLOR_WHITE,
  },

  navigationHeaderTxt:{
    marginTop: 20,
    fontFamily: AppStyle.fonts.ROBOTO_BOLD,
    color: AppStyle.color.TEXT_COLOR,
    fontSize: 18,
    marginLeft: 10,
  },
  titleTxt:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    fontFamily: AppStyle.fonts.ROBOTO_BOLD,
    fontSize: 16,
    color:AppStyle.color.TEXT_COLOR,
  },

  viewTitleTxt:{
    marginTop: 20,
    fontFamily: AppStyle.fonts.ROBOTO_BOLD,
    color: AppStyle.color.TEXT_COLOR,
    fontSize: 12,
    marginLeft: 10,
    marginBottom : 10,
  },
  labelTitleTxt:{
    fontFamily: AppStyle.fonts.ROBOTO_MEDIUM,
    color: AppStyle.color.TEXT_COLOR,
    fontSize: 14,
    paddingVertical: 5,
  },
  lablSubTitleTxt:{
    fontFamily: AppStyle.fonts.ROBOTO_REGULAR,
    color: AppStyle.color.SUB_TEXT_COLOR,
    fontSize: 12,
    paddingVertical: 5,
  },
  lablSubTitleTxt_14:{
    fontFamily: AppStyle.fonts.ROBOTO_REGULAR,
    color: AppStyle.color.TEXT_COLOR,
    fontSize: 14,
    paddingVertical: 5,
  },
  addressTxt:{
    fontFamily: AppStyle.fonts.ROBOTO_MEDIUM,
    color: AppStyle.color.TEXT_COLOR,
    fontSize: 12,
  },
 
  commonHeaderView: {
    width: '100%',
    height: 50,
    paddingTop: 10,
    backgroundColor: AppStyle.color.COLOR_WHITE,
},

imageCommonStyle :{
    width :15,
    height : 15,
},
flexDirectionRowView:{
    flexDirection : 'row',
},
equalWidthView:{
     width: '100%', height: '100%' 
},

flexDirectionColumnView:{
    flexDirection : 'column',
    marginTop : 10,
    marginLeft : 10,
    marginRight : 10,
},
flexRowWithJustifyContent :{
    flexDirection : 'row',
    justifyContent :'space-between'
},

modalBg: {
  flex: 1,
  justifyContent: 'center',
  alignItems: "center",
  backgroundColor: AppStyle.color.MODAL_BG_WITH_ALPHA,
},
toasterModalBg: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: "center",
  marginTop : 100,
  backgroundColor: AppStyle.color.MODAL_BG_WITH_ALPHA
},
modalView: {
  backgroundColor: AppStyle.color.COLOR_WHITE,
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  marginLeft: 20,
  marginRight: 20,

  paddingHorizontal: 5,
  paddingVertical: 15,
  // height: '50%',
  width: "90%",
  // height: "40%",
  shadowColor: AppStyle.color.SHADOW_COLOR,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

toasterModalView: {
  backgroundColor: AppStyle.color.POPUP_BG_COLOR,
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  marginLeft: 20,
  marginRight: 20,

  paddingHorizontal: 5,
  paddingVertical: 15,
  // height: Platform.OS == 'ios' ? '25%' : '30%',
  width: "50%",
  height : 35,
  // height: "40%",
  shadowColor: AppStyle.color.SHADOW_COLOR,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},


});

export default styles;