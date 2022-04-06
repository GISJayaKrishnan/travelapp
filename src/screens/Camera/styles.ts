import { StyleSheet } from 'react-native';
import AppStyle from 'src/config/ColorStyle';

import CommonStyles from '../../config/CommonStyles';
const local_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
 
  cameraModalBg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: AppStyle.color.MODAL_BG_WITH_ALPHA,
  },
  cameraModalView: {
    backgroundColor: AppStyle.color.COLOR_WHITE,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
   // marginLeft: 20,
    //marginRight: 20,
  
    paddingHorizontal: 5,
    paddingVertical: 15,
    // height: '50%',
    width: "100%",
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

const styles = { ...CommonStyles, ...local_styles }

export default styles;