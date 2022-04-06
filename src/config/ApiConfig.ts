import {Platform} from 'react-native';

/* App config for apis
 */

const ENV = {
  ISPRODCTION: false,
};
const ApiConfig = {
  BASEURL: 'http://20.81.54.48/api/v1/',
  IMAGE_URL: 'https://pepsico',
  STORE_LIST: 'store/',
  VISIT_UPDATE: 'visit/',
  IMAGE_UPLOAD: 'device/image_upload',
  TRIGGER_EVENT: 'device/trigger_event',
  VISIDATES: 'store/visit_dates/',
  RACK_RAW_MEDIA: 'raw-input-media?visit_id=',
  eventMessages: '/pepsico-eventhub/messages',
};
export default ApiConfig;
