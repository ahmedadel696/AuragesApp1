import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';

class SyncModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalSyncsVisible}
                onRequestClose={() => {
                    this.props.setSyncViewFalse
                }}
            >
                <View>
                    <View>
                        <Image source={require('./assets/rectangle453.png')} style={styles.ipadPro105in17_rectangle453} />
                        <Image source={require('./assets/rectangle454.png')} style={styles.ipadPro105in17_rectangle454} />
                        <Text style={styles.ipadPro105in17_xacf5d19e}>مزامنة البيانات</Text>
                        <Svg style={styles.ipadPro105in17_ellipse96} preserveAspectRatio="none" viewBox="0 0 84 84" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z" /></Svg>
                        <Text style={styles.ipadPro105in17_x}>قم بإدخال الباسورد الخاص بحسابك</Text>
                        <TextInput style={styles.ipadPro105in17_rectangle456} />
                        <Image source={require('./assets/update.png')} style={styles.ipadPro105in17_update} />
                        <View style={styles.ipadPro105in17_group3344}>
                            <TouchableOpacity style={styles.ipadPro105in17_group3344_btn_ok}>
                                <Text style={styles.updateBtnText}>تم</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.props.setSyncViewFalse} style={styles.ipadPro105in17_group3344_btn_cancel}>
                                <Text style={styles.updateBtnText}>الغاء</Text>

                            </TouchableOpacity>
                        </View>
                        <Svg data-layer="3305a24d-4038-454d-885a-ae73b7f564db" style={styles.ipadPro105in18_iconMetroCancel} preserveAspectRatio="none" viewBox="2.5707006454467773 1.928033471107483 22.656097412109375 22.65576171875" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 13.89875411987305 1.928033471107483 C 7.642438888549805 1.928033471107483 2.570700645446777 6.999771118164062 2.570700645446777 13.2560863494873 C 2.570700645446777 19.51240158081055 7.642437934875488 24.58414077758789 13.89875411987305 24.58414077758789 C 20.15506935119629 24.58414077758789 25.226806640625 19.51240158081055 25.226806640625 13.25608825683594 C 25.226806640625 6.999773025512695 20.15506935119629 1.928034424781799 13.89875411987305 1.928034424781799 Z M 13.89875411987305 22.46013259887695 C 8.815510749816895 22.46013259887695 4.694710731506348 18.33933258056641 4.694710731506348 13.25608825683594 C 4.694710731506348 8.172844886779785 8.815510749816895 4.052043914794922 13.89875411987305 4.052043914794922 C 18.98199653625488 4.052043914794922 23.10279846191406 8.172844886779785 23.10279846191406 13.25608825683594 C 23.10279846191406 18.33933258056641 18.98199844360352 22.46013259887695 13.89875411987305 22.46013259887695 Z M 17.43877029418945 7.592060089111328 L 13.89875411987305 11.13207721710205 L 10.35873699188232 7.592060089111328 L 8.23472785949707 9.716070175170898 L 11.77474403381348 13.2560863494873 L 8.23472785949707 16.79610443115234 L 10.35873699188232 18.92011260986328 L 13.89875411987305 15.38009643554688 L 17.43877029418945 18.92011260986328 L 19.56278038024902 16.79610443115234 L 16.02276420593262 13.2560863494873 L 19.56278038024902 9.716070175170898 L 17.43877029418945 7.592060089111328 Z"
                            onPress={this.props.setSyncViewFalse}
                        />
                        </Svg>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    "ipadPro105in17_rectangle453": {
        "opacity": 0.1599999964237213,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "borderBottomRightRadius": 0,
        "width": 708,
        "height": 1112,
        "left": 202,
        "top": -202
    },
    "ipadPro105in17_rectangle454": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderTopLeftRadius": 5,
        "borderTopRightRadius": 5,
        "borderBottomLeftRadius": 5,
        "borderBottomRightRadius": 5,
        "width": 339,
        "height": 255,
        "left": 387,
        "top": 240
    },
    "ipadPro105in17_xacf5d19e": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(18, 120, 153, 1)",
        "fontSize": 20,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Cairo",
        "textAlign": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 81,
        "height": 26,
        "left": 518,
        "top": 296
    },
    "ipadPro105in17_ellipse96": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.1607843137254902,
        "shadowOffset": {
            "width": 0,
            "height": 3
        },
        "shadowRadius": 6,
        "width": 84,
        "height": 84,
        "left": 515,
        "top": 199
    },
    "ipadPro105in17_x": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(98, 100, 101, 1)",
        "fontSize": 20,
        "fontWeight": "400",
        "fontStyle": "normal",
        "fontFamily": "Cairo",
        "textAlign": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 165.5,
        "height": 26,
        "left": 474,
        "top": 326.5
    }, "ipadPro105in17_rectangle456": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderTopLeftRadius": 4,
        "borderTopRightRadius": 4,
        "borderBottomLeftRadius": 4,
        "borderBottomRightRadius": 4,
        "width": 278,
        "height": 31,
        "left": 417,
        "top": 363
    },
    "ipadPro105in17_update": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 40.44,
        "height": 40.44,
        "left": 536.75,
        "top": 220.75
    },
    "ipadPro105in17_group3344": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        // "width": 261,
        // "height": 51,
        "left": 426,
        "top": 419,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: "row-reverse"
    }
    ,
    "ipadPro105in17_group3344_btn_ok": {
        "backgroundColor": "rgba(18, 120, 153, 1)",
        borderRadius: 10,
        justifyContent: 'center',
        "width": 70,
        "height": 50,
        textAlign: 'center',
        marginLeft: '12%'

    },
    "ipadPro105in17_group3344_btn_cancel": {
        "backgroundColor": "rgba(18, 120, 153, 1)",
        borderRadius: 10,
        justifyContent: 'center',
        "width": 70,
        "height": 50,
        textAlign: 'center'
    },
    "ipadPro105in18_iconMetroCancel": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 22.66,
        "height": 22.66,
        "left": 401.67,
        "top": 254.17
    },
    updateBtnText: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
    }
})

export default SyncModal;
