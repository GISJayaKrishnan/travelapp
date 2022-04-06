
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiConfig from "../config/ApiConfig";

export const getImageUrl = (imageName : string) => {
  let imageUrl = ApiConfig.IMAGE_URL + imageName;
  return { uri: imageUrl };
};

export const getData = async (key : any, json : any) => {
  const value = await AsyncStorage.getItem(key);
  // console.log("getData-value: ",value)
  return json ? JSON.parse(value) : value;
};

export const storeData = async (key : any, value : any) => {
  if (value && typeof value !== "string") {
    value = JSON.stringify(value);
  }
  console.log("store value", value)
  await AsyncStorage.setItem(key, value);
};

export const dayAndTimeDifferenceCalculation = (createDate : any) => {
  let today = new Date();
  let postDate = new Date(createDate);
  let difference = Math.abs(today - postDate) / 1000;
  let days = Math.floor(difference / 86400);
  let hours = Math.floor(difference / 3600) % 24;
  var minutes = Math.floor(difference / 60) % 60;
  var seconds = Math.floor(difference % 60);

  if (seconds != 0 && minutes == 0 && hours == 0 && days == 0) {
    if (seconds > 1) {
      return seconds + " secs ago ";
    } else {
      return seconds + " sec ago ";
    }
  } else if (minutes != 0 && hours == 0 && days == 0) {
    if (minutes > 1) {
      return minutes + " mins ago ";
    } else {
      return minutes + " min ago ";
    }
  } else if (hours != 0 && days == 0) {
    if (hours > 1) {
      return hours + " hours ago ";
    } else {
      return hours + " hour ago ";
    }
  } else if (days != 0) {
    if (days > 1) {
      return days + " days ago ";
    } else {
      return days + " day ago ";
    }
  }
};
