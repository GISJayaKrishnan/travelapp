import moment from 'moment';

export const utcToLocal = (dateString : any) => {
  var offset = moment().utcOffset();
  var localTime = moment
    .utc(dateString)
    .utcOffset(offset)
    .format('YYYY-MMM-DD h:mm A');
  return localTime;
};

export const localToUtc = (localTime) => {
  var utcTime = moment.utc(moment(localTime)).format();
  return utcTime;
};

export const formatDateByType = (localTime : any,formatType: any) => {
  if(localTime == '')
  {
    var formattedDate = moment().format(formatType); 
    return formattedDate;
  }
  else{
    var formattedDate = moment(localTime).format(formatType);
    return formattedDate;
  }
 
  
};

export const formatDateUTCByType = (localTime : any,formatType : any ,utcFormat : any) => {

  if(localTime == '')
  {
    var formattedDate = moment().utcOffset(utcFormat).format(formatType); 
    return formattedDate;
  }
  else{
    var formattedDate = moment(localTime).utcOffset(utcFormat).format(formatType);
    return formattedDate;
  }
 
  
};