// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import Login from '../screens/loginScreen/index';
// import { Image, Platform ,Text,StyleSheet} from 'react-native';
// // import AccountCreation from '../screens/accountCreation/index';
// import ImagesStore from '../config/Images';
// import SplashScreen from '../screens/splashScreen/index';
// import CameraPage from '../screens/Camera';
// import Profile from '../screens/Profile';

// import Home from '../screens/Home';
// import MapPage from '../screens/MapPage';

// // import StoreScreen from '../screens/storeScreen/index';
// // import StoreDetailScreen from '../screens/storeDetailScreen'
// // import ResultKpiScreen from '../screens/resultKpiScreen';
// // import CaptureScreen from '../screens/CaptureScreen';
// // import CaptureEditScreen from '../screens/CaptureEditScreen';
// // import feedbackScreen from '../screens/feedbackScreen';
// // import RecordVideoScreen from '../screens/RecordVideoScreen';

// const Stack = createNativeStackNavigator();
// const TabStack = createBottomTabNavigator();
// const BottomTab = createBottomTabNavigator();
// const AuthStack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <StackNavigation />
//       {/* <TabNavigation/> */}
//     </NavigationContainer>
//   );
// };


// const TabNavigation = () => {
//   return (
//     <TabStack.Navigator


//     initialRouteName='CameraPage'
//       screenOptions={({ route }) => ({
//         tabBarStyle: {
//           height: Platform.OS === "ios" ? 110 : 80
//         },
//         tabBarIconStyle: {
//           marginTop: 20
//         },
//         tabBarLabelStyle: {
//           marginBottom:0
//         },
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//               ? ImagesStore.Home
//               : ImagesStore.Home;
//           } else if (route.name === 'Profile') {
//             iconName = focused ? ImagesStore.Profile : ImagesStore.Profile;
//           } else if (route.name === 'CameraPage') {
//             iconName = focused ? ImagesStore.Upload : ImagesStore.Upload;
//           }
//           return <Image source={iconName} style = {route.name == 'CameraPage' ? {width : 70,height :40} :  {width : 50,height : 50}}></Image>;
//         },
//         tabBarActiveTintColor: 'black',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <TabStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <TabStack.Screen name="CameraPage" component={CameraPage} options={{ headerShown: false }} />
//       <TabStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

//     </TabStack.Navigator>
//   );
// }


// const AuthNavigator = () => {
//   return (
//     <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="Splash"
//         component={SplashScreen}
//         options={{
//           headerShown: false,
//           gestureEnabled: false,
//         }}
//       />

// <Stack.Screen
//         name="CameraPage"
//         component={CameraPage}
//         options={{
//           headerShown: false,
//           gestureEnabled: false,
//         }}
//       />

//      <Stack.Screen name="MapPage" component={MapPage} options={{ headerShown: false ,gestureEnabled : false}} />

//     </AuthStack.Navigator>
//   );
// };


// const StackNavigation = () => {
//   return (
//     <Stack.Navigator>

// <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false ,gestureEnabled : false}} />

// <Stack.Screen name="MapPage" component={MapPage} options={{ headerShown: false ,gestureEnabled : false}} />
//       <Stack.Screen name="TabBar" component={TabNavigation} options={{ headerShown: false ,gestureEnabled : false}} />

//     </Stack.Navigator>
//   );
// }


// const styles = StyleSheet.create({
//   tabbarStyle: {
//     color: '#6F34FF',
//     fontSize: 11,
//   },
//   unselecttabbarStyle: {
//     color: 'gray',
//     fontSize: 11,
//   },
// });



// export default App;


// Import
import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef } from './NavigationService';
import { StyleSheet, Text, Image, StatusBar, ImageStore, Platform } from "react-native";
import ImagesStore from '../config/Images';
import SplashScreen from '../screens/splashScreen/index';
import CameraPage from '../screens/Camera';
import Profile from '../screens/Profile';

// Screens Import
import Home from 'src/screens/Home';
import MapPage from 'src/screens/MapPage';
import RelatedImages from 'src/screens/RelatedImages';
import images from '../config/Images';


const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />

      <AuthStack.Screen
        name="CameraPage"
        component={CameraPage}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />


      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />

    </AuthStack.Navigator>
  );
};




const MainNavigator = () => (
  <BottomTab.Navigator

    initialRouteName='CameraPage'
    screenOptions={({ route }) => ({
      tabBarStyle: {
        height: Platform.OS === "ios" ? 110 : 80
      },
      headerShown: false,
      tabBarIconStyle: {
        marginTop: 20

      },
      tabBarLabelStyle: {
        marginBottom: 0
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? ImagesStore.Destination
            : ImagesStore.Destination;
        } else if (route.name === 'Profile') {
          iconName = focused ? ImagesStore.Profile : ImagesStore.Profile;
        } else if (route.name === 'CameraPage') {
          iconName = focused ? ImagesStore.Upload : ImagesStore.Upload;
        }
        return <Image source={iconName} style={route.name == 'CameraPage' ? { width: 70, height: 40 } : { width: 50, height: 50 }}></Image>;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}
  >


    <BottomTab.Screen
      name="Home"
      component={Home}

      options={{
        tabBarLabel: ({ focused }) =>
          focused ? <Text style={styles.tabbarStyle}>Home</Text> : <Text style={styles.unselecttabbarStyle}>Home</Text>,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Image source={ImagesStore.Destination} style={{ width: 35, height: 35 }} />
          ) : (
              <Image source={ImagesStore.Destination} style={{ width: 30, height: 30 }} />
            ),
      }}
    />

    <BottomTab.Screen
      name="CameraPage"
      component={CameraPage}
      options={{
        tabBarLabel: ({ focused }) =>
          focused ? <Text style={styles.tabbarStyle}>Camera</Text> : <Text style={styles.unselecttabbarStyle}>Camera</Text>,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Image source={ImagesStore.Upload} style={{ width: 70, height: 40 }} />
          ) : (
              <Image source={ImagesStore.Upload} style={{ width: 70, height: 40 }} />
            ),
      }}
    />

    <BottomTab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: ({ focused }) =>
          focused ? <Text style={styles.tabbarStyle}>Pofile</Text> : <Text style={styles.unselecttabbarStyle}>Profile</Text>,
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Image source={ImagesStore.Profile} style={{ width: 50, height: 50 }} />
          ) : (
              <Image source={ImagesStore.Profile} style={{ width: 50, height: 50 }} />
            ),
      }}
    />

  </BottomTab.Navigator>
);




const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}

      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="MapPage" component={MapPage} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='TabBar' component={MainNavigator} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="RelatedImages" component={RelatedImages} options={{ headerShown: false, gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabbarStyle: {
    color: "#07245B",
    fontSize: 11,
  },
  unselecttabbarStyle: {
    color: "gray",
    fontSize: 11,
  }
});

export default App;
