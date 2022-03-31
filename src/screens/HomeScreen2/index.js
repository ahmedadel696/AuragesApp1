import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image, Pressable, TouchableOpacity, Modal, Button, TextInput, Alert, ScrollView, BackHandler } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { CheckBox, ListItem, Radio } from 'native-base';
import {
    Text,
} from 'native-base';
import SettingModal from '../SettingModal';
import SyncModal from '../SyncModal';
import ActiveModal from '../ActiveModal';
import UpdateModal from '../UpdateModal';

export default class HomeScreen2 extends Component {

    constructor() {
        super();
        this.state = {
            modalUpdateVisible: false,
            modalActiveVisible: false,
            modalSyncVisible: false,
            modalType: '',
            updatedFlag: false,
            ActiveFlag: false,
            modalSettingsVisible: false,

        }
    }
    
    backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit the App?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        //   { text: "YES", onPress: () => this.props.navigation.goBack(null) }
    
        ]);
        
      };

    handelPressView = (pressType) => {
        this.setState({ modalType: pressType })

        if (pressType == 'Update') {
            this.setState({ modalUpdateVisible: true })
        } else if (pressType == 'Active') {
            this.setState({ modalActiveVisible: true })
        } else if (pressType == 'Sync') {
            this.setState({ modalSyncVisible: true })
        } else if (pressType == 'settings') {
            //this.props.navigation.navigate('set');
            this.setState({ modalSettingsVisible: true })
        } else if (pressType == 'pos') {
            this.props.navigation.navigate('pos');
        }
    }

    showModal = (modalType) => {
        console.log("Modal Type : ", modalType)
        if (modalType == 'Update') {
            return (
                <UpdateModal modalUpdateVisible={this.state.modalUpdateVisible} setUpdateViewFalse={() => this.setState({ modalUpdateVisible: false })} updateF={this.state.updatedFlag} setUpdateFlagTrue={() => this.setState({ updatedFlag: true })} />

            )
        } else if (modalType == 'Active') {
            console.log("ActiveFlag : ", this.state.ActiveFlag)
            return (
                <ActiveModal activeF={this.state.ActiveFlag} setActiveViewFalse={() => this.setState({ modalActiveVisible: false })} setActiveFlagTrue={() => this.setState({ ActiveFlag: true })} modalActiveVisible={this.state.modalActiveVisible} />
            )
        }
        else if (modalType == 'Sync') {
            return (
                <SyncModal modalSyncsVisible={this.state.modalSyncVisible} setSyncViewFalse={() => this.setState({ modalSyncVisible: false })} />
            )
        } else if (modalType == 'settings') {
            return (
                <SettingModal modalSettingsVisible={this.state.modalSettingsVisible} setSettingViewFalse={() => this.setState({ modalSettingsVisible: false })} />
            )
        } else {
            return null;
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={require("./assets/bgHome.png")} resizeMode="cover" >
                    {this.showModal(this.state.modalType)}
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <ImageBackground style={styles.imageNameContainer} source={require("./assets/maskGroup2.png")} resizeMode="cover" >
                                <Image style={styles.imageName} source={require("./assets/logo.png")} />
                            </ImageBackground>
                            {/* <Image style={styles.imageTimeSide} source={require("./assets/rectangle3.png")} /> */}
                            <View style={styles.imageTimeSide} >
                                <Text style={styles.sideTextStyleFirst}>الجمعه</Text>
                                <Text style={styles.sideTextStyle}>00</Text>
                                <Text style={styles.sideTextStyle}>حزيران </Text>
                                <Text style={styles.sideTextStyle}>2021 </Text>
                                <Text style={styles.sideTextStyleTime}>9:41</Text>

                            </View>
                            {/* <Image style={styles.imageTimeSide} source={require("./assets/rectangle3.png")} /> */}
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <View style={styles.Rowcontainer}>
                                <TouchableOpacity
                                    style={styles.cardStyle}
                                    onPress={() => this.handelPressView('pos')}
                                >
                                    <Text >
                                        <IconAntDesign name="pluscircleo" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        نقطه البيع
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.cardStyle}>
                                    <Text >
                                        <IconFontAwesome name="language" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        اللغه
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.cardStyle}
                                    onPress={() => this.handelPressView('Sync')}
                                >
                                    <Text >
                                        <IconAntDesign name="sync" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        مزامنه
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.cardStyle}
                                    onPress={() => this.handelPressView('Update')}
                                >
                                    <Text >
                                        <IconMaterialIcons name="system-update-alt" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        تحديث
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.Rowcontainer}>
                                <TouchableOpacity
                                    style={styles.cardStyle}
                                    onPress={() => this.handelPressView('settings')}
                                >
                                    <Text >
                                        <IconFeather name="settings" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        الأعدادات
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.cardStyle}>
                                    <Text >
                                        <IconAntDesign name="infocirlceo" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        حول
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.cardStyle}
                                    onPress={() => this.handelPressView('Active')}
                                >
                                    <Text >
                                        <IconMaterialCommunityIcons name="cursor-default-click-outline" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        تفعيل
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.cardStyle}
                                    onPress={() => this.backAction()}
                                >
                                    <Text >
                                        <IconIonicons name="exit-outline" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        خروج
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    Rowcontainer: {
        // flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',

    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",


    },
    imageName: {
        // flex: 1,
        width: 90,
        height: 80,
        alignSelf: "center"
    },
    imageNameContainer: {
        width: 160,
        height: 150,
        padding: 20,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
    }, imageTimeSide: {
        height: "87%",
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#2B83A0",
        // justifyContent:"center",
        borderTopRightRadius: 60,
        borderRightColor: "#FFAD54",
        borderRightWidth: 16,
        width: 110

    }, sideTextStyleFirst: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Arial",
        marginBottom: '25%',
        marginTop: 80
    }, sideTextStyle: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Arial",
        marginBottom: '25%'
    }, sideTextStyleTime: {
        color: "#ffffff",
        fontSize: 27,
        textAlign: "center",
        fontFamily: "Arial",
        marginTop: 80

    }, cardStyle: {
        width: '18%',
        height: '80%',
        alignItems: "center",
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginLeft: 15,
        marginRight: 15,
        padding: 10,
        margin: 10,
        opacity: 1,

    },
    cardItemStyle: {
        alignItems: "center",
        textAlign: 'center'
    },
    cardTxtStyle: {
        textAlign: 'center',
        fontSize: 27,
        padding: 10,
        color: '#2B83A0',
        fontWeight: 'bold'
    }
});


