


import React from 'react';
import {
    Platform,
    Image, View, StyleSheet, Modal,
    Dimensions,
    ActivityIndicator
} from 'react-native';

import AppStyle from '../config/ColorStyle';
import metrics from '../config/metrics';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


interface LoaderProps {
    loading?: boolean,
    style: any
}

export default (props: any) => {
    return (
        <>
            <View style={[styles.container, styles.flexCenter, props.style]}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color={AppStyle.color.COLOR_BLACK}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: AppStyle.color.COLOR_LOADER_BG,
    },
    activityIndicatorWrapper: {
        backgroundColor: "#fff",
        height: 100,
        width: 100,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    container: {
        flex: 1,
        position: 'absolute',
        width: metrics.screenWidth,
        height: metrics.screenHeight + 50,
        backgroundColor: AppStyle.color.COLOR_LOADER_BG,
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



