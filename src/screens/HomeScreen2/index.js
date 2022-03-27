import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image, Pressable, TouchableOpacity, Modal, Button, TextInput, Alert, ScrollView } from 'react-native';
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
            //edit here 16/3
            modalSettingsVisible: false,
            navType: 'conn',
            displayType: 1,
            view1Press: true,
            view2Press: false,
            view3Press: false,
            view4Press: false,

            settings1Press: true,
            settings2Press: false,
            settings3Press: false,
            settings4Press: false,
            settings5Press: false,

        }
    }

    //edut here 16/3
    handelDisplayPressView = (pressType) => {
        this.setState({ navType: pressType });
        if (pressType == 'conn') {
            this.setState({ settings1Press: true })
            this.setState({ settings2Press: false })
            this.setState({ settings3Press: false })
            this.setState({ settings4Press: false })
            this.setState({ settings5Press: false })
        } else if (pressType == 'err') {
            this.setState({ settings1Press: false })
            this.setState({ settings2Press: true })
            this.setState({ settings3Press: false })
            this.setState({ settings4Press: false })
            this.setState({ settings5Press: false })
        } else if (pressType == 'display') {
            this.setState({ settings1Press: false })
            this.setState({ settings2Press: false })
            this.setState({ settings3Press: true })
            this.setState({ settings4Press: false })
            this.setState({ settings5Press: false })
        } else if (pressType == 'orders') {
            this.setState({ settings1Press: false })
            this.setState({ settings2Press: false })
            this.setState({ settings3Press: false })
            this.setState({ settings4Press: true })
            this.setState({ settings5Press: false })
        } else if (pressType == 'network') {
            this.setState({ settings1Press: false })
            this.setState({ settings2Press: false })
            this.setState({ settings3Press: false })
            this.setState({ settings4Press: false })
            this.setState({ settings5Press: true })
        }
    }
    handelDisplayPressSections = (pressDisplayType) => {
        if (pressDisplayType == 1) {
            this.setState({ view1Press: true })
            this.setState({ view2Press: false })
            this.setState({ view3Press: false })
            this.setState({ view4Press: false })
        } else if (pressDisplayType == 2) {
            this.setState({ view1Press: false })
            this.setState({ view2Press: true })
            this.setState({ view3Press: false })
            this.setState({ view4Press: false })
        } else if (pressDisplayType == 3) {
            this.setState({ view1Press: false })
            this.setState({ view2Press: false })
            this.setState({ view3Press: true })
            this.setState({ view4Press: false })
        } else if (pressDisplayType == 4) {
            this.setState({ view1Press: false })
            this.setState({ view2Press: false })
            this.setState({ view3Press: false })
            this.setState({ view4Press: true })
        }


        this.setState({ displayType: pressDisplayType })
    }

    renderConnectionView() {
        return (
            <ScrollView style={DisStyles.cardStyle}>
                <View style={DisStyles.cardTitleViewStyle}>
                    <Text style={DisStyles.cardTitleTxtStyle}>اعدادات الاتصال</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >المخدم</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='192.168.0.190' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >قاعده البيانات</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='AuragesDb01' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >المستخدم</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='Admin' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >كلمه السر</Text>
                    <TextInput secureTextEntry style={DisStyles.inputStyle} placeholder='*******' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >البرابه</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='1433' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >اتصال دائم</Text>
                    <CheckBox />
                </View>
            </ScrollView>
        );
    }
    renderErrorView() {
        return (
            <ScrollView style={DisStyles.cardErrStyle}>
                <View style={DisStyles.cardTitleViewStyle}>
                    <Text style={DisStyles.cardTitleTxtStyle}> تقرير الأخطاء</Text>
                </View>
                <View style={{ padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} > هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</Text>
                </View>

            </ScrollView>
        );
    }
    renderDisplayView() {
        return (
            <ScrollView style={DisStyles.cardDisplayStyle}>
                <View style={DisStyles.cardTitleViewStyle}>
                    <Text style={DisStyles.cardTitleTxtStyle}>أعدادات الخيارات</Text>
                </View>
                <View style={DisStyles.displayContainerStyle}>
                    <TouchableOpacity onPress={() => this.handelDisplayPressSections(1)} style={this.state.view1Press ? DisStyles.DisContainerStyleActive : DisStyles.DisContainerStyleInactive}>
                        <Text style={this.state.view1Press ? DisStyles.displayTextStyleActive : DisStyles.displayTextStyleInactive}>1</Text>
                    </TouchableOpacity>
                    <View style={DisStyles.DisContainerStyleImg}>
                        <Image style={DisStyles.imgStyleDis} source={require('./assets/rectangleDis.png')} />

                    </View>
                    <TouchableOpacity onPress={() => this.handelDisplayPressSections(2)} style={this.state.view2Press ? DisStyles.DisContainerStyleActive : DisStyles.DisContainerStyleInactive}>
                        <Text style={this.state.view2Press ? DisStyles.displayTextStyleActive : DisStyles.displayTextStyleInactive}>2</Text>
                    </TouchableOpacity>
                    <View style={DisStyles.DisContainerStyleImg}>
                        <Image style={DisStyles.imgStyleDis} source={require('./assets/rectangleDis.png')} />
                    </View>

                    <TouchableOpacity onPress={() => this.handelDisplayPressSections(3)} style={this.state.view3Press ? DisStyles.DisContainerStyleActive : DisStyles.DisContainerStyleInactive}>
                        <Text style={this.state.view3Press ? DisStyles.displayTextStyleActive : DisStyles.displayTextStyleInactive}>3</Text>
                    </TouchableOpacity>
                    <View style={DisStyles.DisContainerStyleImg}>
                        <Image style={DisStyles.imgStyleDis} source={require('./assets/rectangleDis.png')} />
                    </View>

                    <TouchableOpacity onPress={() => this.handelDisplayPressSections(4)} style={this.state.view4Press ? DisStyles.DisContainerStyleActive : DisStyles.DisContainerStyleInactive}>
                        <Text style={this.state.view4Press ? DisStyles.displayTextStyleActive : DisStyles.displayTextStyleInactive}>4</Text>
                    </TouchableOpacity>
                </View>
                <View style={DisStyles.viewDisplayCardContainer}>
                    {this.state.displayType == 1 ? this.renderDisplayView1()
                        : this.state.displayType == 2 ? this.renderDisplayView2()
                            : this.state.displayType == 3 ? this.renderDisplayView3()
                                : this.state.displayType == 4 ? this.renderDisplayView4() : null}
                </View>

            </ScrollView>);
    }
    renderOrdersView() {
        return (
            <ScrollView style={DisStyles.cardStyle}>
                <View style={DisStyles.cardTitleViewStyle}>
                    <Text style={DisStyles.cardTitleTxtStyle}>الطلبات</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >اسم الشركه</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='192.168.0.190' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >نسبه الضريبه</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='AuragesDb01' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >نسبة الضريبة2</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='Admin' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >نسبة الخدمة</Text>
                    <TextInput secureTextEntry style={DisStyles.inputStyle} placeholder='*******' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >إضافة مجموعة</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='(اختياري)' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >طريقة الطباعة</Text>
                    <View style={DisStyles.PrinterContentStyle}>
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                key={1}
                                onPress={() => this.setState({ printerItemSelected: 1 })}
                                selected={this.state.printerItemSelected == 1}
                            />
                            <Text style={DisStyles.inputTitleStyle}>datecs printer</Text>
                        </ListItem >
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                key={1}
                                onPress={() => this.setState({ printerItemSelected: 2 })}
                                selected={this.state.printerItemSelected == 2}
                            />
                            <Text style={DisStyles.inputTitleStyle}>Qts printer</Text>
                        </ListItem>
                    </View>
                </View>
            </ScrollView>
        );
    }
    renderNetworkView() {
        return (
            <ScrollView style={DisStyles.cardStyle}>
                <View style={DisStyles.cardTitleViewStyle}>
                    <Text style={DisStyles.cardTitleTxtStyle}>صلاحيات المستخدم</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > ادخال كلمة سر المضيف عند الحفظ</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > إظهار الطاولات المضيف فقط</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >سعر المادة</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='0' />
                </View>
            </ScrollView>
        );
    }

    renderDisplayView1() {
        return (
            <View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={{ marginLeft: 3 }}>
                        <IconAntDesign name="caretleft" size={20} color='#F79122' />
                    </Text>
                    <Text style={{ color: "#F79122", fontSize: 16, fontWeight: "bold" }} >خيارات العرض</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > اظهار المجموعات فى نافذه</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > اظهار صور المجموعات</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > اظهار صور الملاحظات</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > اظهار حاله الطاولات</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > اظهار الطاولات المحجوزه</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > اظهار لوحه المفاتيح</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>

            </View>
        );
    }
    renderDisplayView2() {
        return (
            <View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={{ marginLeft: 3 }}>
                        <IconAntDesign name="caretleft" size={20} color='#F79122' />
                    </Text>
                    <Text style={{ color: "#F79122", fontSize: 16, fontWeight: "bold" }} >أزرار الواجهة</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >إحضار فاتورة</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >نقل طاولة</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > الستديد</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >العروض</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >إحضار فاتورة</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > حجز طاولة</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >خروج</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
            </View>
        );
    }
    renderDisplayView3() {
        return (
            <View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={{ marginLeft: 3 }}>
                        <IconAntDesign name="caretleft" size={20} color='#F79122' />
                    </Text>
                    <Text style={{ color: "#F79122", fontSize: 16, fontWeight: "bold" }} >أزرار واجهة احضار فاتورة</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >طباعة بلوتوث</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >طباعة كاشير</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} > طباعة حسب الموقع</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >اغلاق الطلب</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8, justifyContent: "space-between" }}>
                    <Text style={DisStyles.inputTitleStyle} >الغاء الامر</Text>
                    <CheckBox style={{ marginLeft: 15 }} />
                </View>
            </View>
        );
    }
    renderDisplayView4() {
        return (
            <View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={{ marginLeft: 3 }}>
                        <IconAntDesign name="caretleft" size={20} color='#F79122' />
                    </Text>
                    <Text style={{ color: "#F79122", fontSize: 15, fontWeight: "bold" }} >اعدادات العرض</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >خلايا الطاولات</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='0' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >خلايا المجموعات</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='0' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >خلايا المواد</Text>
                    <TextInput style={DisStyles.inputStyle} placeholder='0' />
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >خلايا الملاحظات</Text>
                    <TextInput secureTextEntry style={DisStyles.inputStyle} placeholder='0' />
                </View>

                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >نمط العرض</Text>
                    <View style={DisStyles.RadioContentStyle}>
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                key={2}
                                onPress={() => this.setState({ DisplayPattern: 1 })}
                                selected={this.state.DisplayPattern == 1}
                            />
                            <Text style={DisStyles.inputTitleStyle}>كلاسيكي</Text>
                        </ListItem >
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                key={2}
                                onPress={() => this.setState({ DisplayPattern: 2 })}
                                selected={this.state.DisplayPattern == 2}
                            />
                            <Text style={DisStyles.inputTitleStyle}>Tab</Text>
                        </ListItem>

                    </View>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >حجم الخط</Text>
                    <View style={DisStyles.RadioContentStyle}>
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                key={3}
                                onPress={() => this.setState({ fontSizeType: 1 })}
                                selected={this.state.fontSizeType == 1}
                            />
                            <Text style={DisStyles.inputTitleStyle}>عادي</Text>
                        </ListItem >
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                key={3}
                                onPress={() => this.setState({ fontSizeType: 2 })}
                                selected={this.state.fontSizeType == 2}
                            />
                            <Text style={DisStyles.inputTitleStyle}>متوسط</Text>
                        </ListItem>
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                key={3}
                                onPress={() => this.setState({ fontSizeType: 3 })}
                                selected={this.state.fontSizeType == 3}
                            />
                            <Text style={DisStyles.inputTitleStyle}>كبير</Text>
                        </ListItem>
                    </View>
                </View>
                <View style={{ flexDirection: 'row-reverse', padding: 8 }}>
                    <Text style={DisStyles.inputTitleStyle} >حجم خط المواد</Text>
                    <View style={DisStyles.RadioContentStyle}>
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio

                                onPress={() => this.setState({ fontSizeResourcesType: 1 })}
                                selected={this.state.fontSizeResourcesType == 1}
                            />
                            <Text style={DisStyles.inputTitleStyle}>عادي</Text>
                        </ListItem >
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                onPress={() => this.setState({ fontSizeResourcesType: 2 })}
                                selected={this.state.fontSizeResourcesType == 2}
                            />
                            <Text style={DisStyles.inputTitleStyle}>متوسط</Text>
                        </ListItem>
                        <ListItem style={DisStyles.printerItemStyle}>
                            <Radio
                                onPress={() => this.setState({ fontSizeResourcesType: 3 })}
                                selected={this.state.fontSizeType == 3}
                            />
                            <Text style={DisStyles.fontSizeResourcesType}>كبير</Text>
                        </ListItem>
                    </View>
                </View>
            </View>
        );
    }

    //--------------------

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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalUpdateVisible}
                    onRequestClose={() => {
                        this.setState({ modalUpdateVisible: false })
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image data-layer="30ed3ea5-6369-4ee6-a6de-374e73eb5424" source={require('./assets/rectangle453.png')} style={styles.ipadPro105in18_rectangle453} />
                            <Image data-layer="43a7024e-294d-4837-b21f-6795805e95eb" source={require('./assets/rectangle454.png')} style={styles.ipadPro105in18_rectangle454} />
                            <Text data-layer="32cd0d06-6e7b-4514-8340-8b24c429de43" style={styles.ipadPro105in18_xdc33918e}>تحديث</Text>
                            <Svg data-layer="b05976c4-965e-461d-a6e7-903117cb239c" style={styles.ipadPro105in18_ellipse96} preserveAspectRatio="none" viewBox="0 0 84 84" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z" /></Svg>
                            <Image data-layer="11e66d1f-dc08-41e1-8aa4-00a242010d1b" source={require('./assets/refresh.png')} style={styles.ipadPro105in18_refresh} />

                            {this.state.updatedFlag == true ?
                                <>
                                    <TouchableOpacity onPress={() => this.setState({ modalUpdateVisible: false })} style={styles.ipadPro105in18_group3306}>
                                        <Text style={styles.updateBtnText}>اغلاق</Text>

                                    </TouchableOpacity>
                                    <Text style={styles.ipadPro105in18_x}>النسخه المتوفره حاليا محدثه بالفعل</Text>
                                </>
                                :
                                <>
                                    <TouchableOpacity onPress={() => this.update_func()} style={styles.ipadPro105in18_group3306}>
                                        <Text style={styles.updateBtnText}>أستمرار</Text>


                                    </TouchableOpacity>
                                    <Text style={styles.ipadPro105in18_x}>لتنزيل اخر نسخة من البرنامج اضغط على استمرار لبدء التنزيل</Text>
                                </>
                            }



                            <Svg data-layer="3305a24d-4038-454d-885a-ae73b7f564db" style={styles.ipadPro105in18_iconMetroCancel} preserveAspectRatio="none" viewBox="2.5707006454467773 1.928033471107483 22.656097412109375 22.65576171875" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 13.89875411987305 1.928033471107483 C 7.642438888549805 1.928033471107483 2.570700645446777 6.999771118164062 2.570700645446777 13.2560863494873 C 2.570700645446777 19.51240158081055 7.642437934875488 24.58414077758789 13.89875411987305 24.58414077758789 C 20.15506935119629 24.58414077758789 25.226806640625 19.51240158081055 25.226806640625 13.25608825683594 C 25.226806640625 6.999773025512695 20.15506935119629 1.928034424781799 13.89875411987305 1.928034424781799 Z M 13.89875411987305 22.46013259887695 C 8.815510749816895 22.46013259887695 4.694710731506348 18.33933258056641 4.694710731506348 13.25608825683594 C 4.694710731506348 8.172844886779785 8.815510749816895 4.052043914794922 13.89875411987305 4.052043914794922 C 18.98199653625488 4.052043914794922 23.10279846191406 8.172844886779785 23.10279846191406 13.25608825683594 C 23.10279846191406 18.33933258056641 18.98199844360352 22.46013259887695 13.89875411987305 22.46013259887695 Z M 17.43877029418945 7.592060089111328 L 13.89875411987305 11.13207721710205 L 10.35873699188232 7.592060089111328 L 8.23472785949707 9.716070175170898 L 11.77474403381348 13.2560863494873 L 8.23472785949707 16.79610443115234 L 10.35873699188232 18.92011260986328 L 13.89875411987305 15.38009643554688 L 17.43877029418945 18.92011260986328 L 19.56278038024902 16.79610443115234 L 16.02276420593262 13.2560863494873 L 19.56278038024902 9.716070175170898 L 17.43877029418945 7.592060089111328 Z"
                                onPress={() => this.setState({ modalUpdateVisible: false })}
                            />
                            </Svg>
                        </View>
                    </View>
                </Modal>
            )
        } else if (modalType == 'Active') {
            return (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalActiveVisible}
                    onRequestClose={() => {
                        this.setState({ modalActiveVisible: false })
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>


                            {this.state.ActiveFlag == true ?
                                <>
                                    <Image data-layer="bb04e015-10f9-461a-847d-8f60bb70c382" source={require('./assets/rectangle453.png')} style={styles.ipadPro105in20_rectangle453} />
                                    <Image data-layer="ead9a313-cbbf-4788-9394-f2ff9f1c2c16" source={require('./assets/rectangle454.png')} style={styles.ipadPro105in20_rectangle454} />
                                    <Text data-layer="a689d059-0524-461f-a8ad-ceeade8ec2cb" style={styles.ipadPro105in20_x4aa6068a}>تفعيل</Text>
                                    <Svg data-layer="510cfd2c-09be-47f7-96af-6a49f19429e4" style={styles.ipadPro105in20_ellipse96} preserveAspectRatio="none" viewBox="0 0 84 84" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z" /></Svg>
                                    <Image data-layer="11e66d1f-dc08-41e1-8aa4-00a242010d1b" source={require('./assets/tap.png')} style={styles.ipadPro105in20_tap} />
                                    <TouchableOpacity onPress={() => this.setState({ modalActiveVisible: false })} style={styles.ipadPro105in18_group3306}>
                                        <Text style={styles.updateBtnText}>اغلاق</Text>

                                    </TouchableOpacity>
                                    <Text style={styles.ipadPro105in18_x}>النسخه المتوفره حاليا تم تفعيلها بالفعل</Text>
                                </>
                                :
                                <>
                                    <Image data-layer="0e77276f-8a30-4427-ba5d-2519d932aabd" source={require('./assets/rectangle453.png')} style={styles.ipadPro105in21_rectangle453} />
                                    <Image data-layer="83ead119-1e6b-444d-a221-b03ec3d19b86" source={require('./assets/rectangle454.png')} style={styles.ipadPro105in21_rectangle454} />
                                    <Text data-layer="edc0dedf-5ca6-47b0-ae03-2e092b116a56" style={styles.ipadPro105in21_x40637d03}>قم بإدخال  البيانات الخاصة بحسابك</Text>
                                    <Image data-layer="9ae350a6-e462-4b37-aee4-69115bf61c03" source={require('./assets/rectangle456.png')} style={styles.ipadPro105in21_rectangle456} />
                                    <Image data-layer="b0178a66-bd58-47bf-83a4-def643dba2d6" source={require('./assets/rectangle531.png')} style={styles.ipadPro105in21_rectangle531} />
                                    <Image data-layer="da394061-4e03-412d-b798-c9bcf8a2781c" source={require('./assets/rectangle532.png')} style={styles.ipadPro105in21_rectangle532} />
                                    <Image data-layer="7f2d03f6-8123-4be8-9947-942dd5105632" source={require('./assets/rectangle533.png')} style={styles.ipadPro105in21_rectangle533} />
                                    <Image data-layer="007a2dde-7b4e-4999-958f-2fd1f7ffd64f" source={require('./assets/rectangle535.png')} style={styles.ipadPro105in21_rectangle535} />
                                    <Image data-layer="f7b942e9-f212-4ee0-a7ec-dafb551b6585" source={require('./assets/rectangle534.png')} style={styles.ipadPro105in21_rectangle534} />
                                    <TextInput style={styles.ipadPro105in21_x33afbb33}>الاسم</TextInput>
                                    <TextInput data-layer="fd11d28e-8f1f-41ed-b9ae-641c9dc08202" style={styles.ipadPro105in21_x166bbf66}>الهاتف</TextInput>
                                    <TextInput data-layer="9dcbf03b-1a49-4a09-97eb-1e004a177e3d" style={styles.ipadPro105in21_xacd131ba}>البريد الالكتروني</TextInput>
                                    <TextInput data-layer="521534f8-75af-4b60-9ae7-221f7656576b" style={styles.ipadPro105in21_xa812adb7}>المدينة</TextInput>
                                    <TextInput data-layer="dc26b95a-5a71-4d47-9ea9-9eaa9b08b937" style={styles.ipadPro105in21_x683bdcd8}>الدولة</TextInput>
                                    <TextInput data-layer="8a031994-9f6e-476c-be16-9829120c104b" style={styles.ipadPro105in21_xdf423a02}>ملاحظة</TextInput>
                                    <TextInput data-layer="b5630921-bfe6-44cd-a5bc-39e2ca718964" style={styles.ipadPro105in21_x92815930}>تفعيل</TextInput>
                                    <Svg data-layer="673849fc-061c-4abc-8735-f37a6694528d" style={styles.ipadPro105in21_ellipse96} preserveAspectRatio="none" viewBox="0 0 84 84" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z" /></Svg>
                                    <Image data-layer="1d6d1a98-ece9-4759-8606-cb9f9cd0a108" source={require('./assets/tap.png')} style={styles.ipadPro105in21_tap} />
                                    <Image data-layer="eff1a4df-4bbd-45bf-8b03-94387243f2ec" source={require('./assets/group3306.png')} style={styles.ipadPro105in21_group3306} />
                                    <TouchableOpacity onPress={() => this.active_func()} style={styles.ipadPro105in21_group3306}>
                                        <Text style={styles.updateBtnText}>تفعيل النسخه</Text>

                                    </TouchableOpacity>
                                </>
                            }



                            <Svg data-layer="3305a24d-4038-454d-885a-ae73b7f564db" style={styles.ipadPro105in21_iconMetroCancel} preserveAspectRatio="none" viewBox="2.5707006454467773 1.928033471107483 22.656097412109375 22.65576171875" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 13.89875411987305 1.928033471107483 C 7.642438888549805 1.928033471107483 2.570700645446777 6.999771118164062 2.570700645446777 13.2560863494873 C 2.570700645446777 19.51240158081055 7.642437934875488 24.58414077758789 13.89875411987305 24.58414077758789 C 20.15506935119629 24.58414077758789 25.226806640625 19.51240158081055 25.226806640625 13.25608825683594 C 25.226806640625 6.999773025512695 20.15506935119629 1.928034424781799 13.89875411987305 1.928034424781799 Z M 13.89875411987305 22.46013259887695 C 8.815510749816895 22.46013259887695 4.694710731506348 18.33933258056641 4.694710731506348 13.25608825683594 C 4.694710731506348 8.172844886779785 8.815510749816895 4.052043914794922 13.89875411987305 4.052043914794922 C 18.98199653625488 4.052043914794922 23.10279846191406 8.172844886779785 23.10279846191406 13.25608825683594 C 23.10279846191406 18.33933258056641 18.98199844360352 22.46013259887695 13.89875411987305 22.46013259887695 Z M 17.43877029418945 7.592060089111328 L 13.89875411987305 11.13207721710205 L 10.35873699188232 7.592060089111328 L 8.23472785949707 9.716070175170898 L 11.77474403381348 13.2560863494873 L 8.23472785949707 16.79610443115234 L 10.35873699188232 18.92011260986328 L 13.89875411987305 15.38009643554688 L 17.43877029418945 18.92011260986328 L 19.56278038024902 16.79610443115234 L 16.02276420593262 13.2560863494873 L 19.56278038024902 9.716070175170898 L 17.43877029418945 7.592060089111328 Z"
                                onPress={() => this.setState({ modalActiveVisible: false })}
                            />
                            </Svg>
                        </View>
                    </View>
                </Modal>
            )
        }
        else if (modalType == 'Sync') {
            return (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalSyncVisible}
                    onRequestClose={() => {
                        this.setState({ modalSyncVisible: false })
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image data-layer="029b4e0c-8f4b-46df-a0c4-45271e818f6b" source={require('./assets/rectangle453.png')} style={styles.ipadPro105in17_rectangle453} />
                            <Image data-layer="71e3b41b-b4d0-4e8a-a8de-b4821e959034" source={require('./assets/rectangle454.png')} style={styles.ipadPro105in17_rectangle454} />
                            <Text data-layer="bcde36ac-e0f3-4052-8f3d-d4ae2d1cc529" style={styles.ipadPro105in17_xacf5d19e}>مزامنة البيانات</Text>
                            <Svg data-layer="4af971b0-55f0-4778-8890-94a1f2270899" style={styles.ipadPro105in17_ellipse96} preserveAspectRatio="none" viewBox="0 0 84 84" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z" /></Svg>
                            <Text data-layer="30e87bde-866e-456d-bb83-a98e3d1b9240" style={styles.ipadPro105in17_x}>قم بإدخال الباسورد الخاص بحسابك</Text>
                            <TextInput data-layer="0f4d6bd7-9602-4f38-8436-64d198a509db" style={styles.ipadPro105in17_rectangle456} />
                            {/* <Image data-layer="13f4134c-4db2-450c-a6cf-92c19b9d2d81" source={require('./assets/group3344.png')} style={styles.ipadPro105in17_group3344} /> */}
                            <Image data-layer="6559f302-6ab7-450a-85d2-e2c2a4656569" source={require('./assets/update.png')} style={styles.ipadPro105in17_update} />
                            <View style={styles.ipadPro105in17_group3344}>
                                <TouchableOpacity style={styles.ipadPro105in17_group3344_btn_ok}>
                                    <Text style={styles.updateBtnText}>تم</Text>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ modalSyncVisible: false })} style={styles.ipadPro105in17_group3344_btn_cancel}>
                                    <Text style={styles.updateBtnText}>الغاء</Text>

                                </TouchableOpacity>
                            </View>
                            <Svg data-layer="3305a24d-4038-454d-885a-ae73b7f564db" style={styles.ipadPro105in18_iconMetroCancel} preserveAspectRatio="none" viewBox="2.5707006454467773 1.928033471107483 22.656097412109375 22.65576171875" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 13.89875411987305 1.928033471107483 C 7.642438888549805 1.928033471107483 2.570700645446777 6.999771118164062 2.570700645446777 13.2560863494873 C 2.570700645446777 19.51240158081055 7.642437934875488 24.58414077758789 13.89875411987305 24.58414077758789 C 20.15506935119629 24.58414077758789 25.226806640625 19.51240158081055 25.226806640625 13.25608825683594 C 25.226806640625 6.999773025512695 20.15506935119629 1.928034424781799 13.89875411987305 1.928034424781799 Z M 13.89875411987305 22.46013259887695 C 8.815510749816895 22.46013259887695 4.694710731506348 18.33933258056641 4.694710731506348 13.25608825683594 C 4.694710731506348 8.172844886779785 8.815510749816895 4.052043914794922 13.89875411987305 4.052043914794922 C 18.98199653625488 4.052043914794922 23.10279846191406 8.172844886779785 23.10279846191406 13.25608825683594 C 23.10279846191406 18.33933258056641 18.98199844360352 22.46013259887695 13.89875411987305 22.46013259887695 Z M 17.43877029418945 7.592060089111328 L 13.89875411987305 11.13207721710205 L 10.35873699188232 7.592060089111328 L 8.23472785949707 9.716070175170898 L 11.77474403381348 13.2560863494873 L 8.23472785949707 16.79610443115234 L 10.35873699188232 18.92011260986328 L 13.89875411987305 15.38009643554688 L 17.43877029418945 18.92011260986328 L 19.56278038024902 16.79610443115234 L 16.02276420593262 13.2560863494873 L 19.56278038024902 9.716070175170898 L 17.43877029418945 7.592060089111328 Z"
                                onPress={() => this.setState({ modalSyncVisible: false })}
                            />
                            </Svg>
                        </View>
                    </View>
                </Modal>
            )
        } else if (modalType == 'settings') {
            return (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalSettingsVisible}
                    onRequestClose={() => {
                        this.setState({ modalSettingsVisible: false })
                    }}
                >
                    <View style={DisStyles.container}>
                        <View elevation={3} style={DisStyles.viewContainer}>
                            {this.state.navType == 'conn' ? this.renderConnectionView()
                                : this.state.navType == 'err' ? this.renderErrorView()
                                    : this.state.navType == 'orders' ? this.renderOrdersView()
                                        : this.state.navType == 'display' ? this.renderDisplayView()
                                            : this.state.navType == 'network' ? this.renderNetworkView() : null}
                            <View style={DisStyles.viewContainerBtn}>
                                <View style={{ marginLeft: "5%", marginRight: "5%", width: 100 }}>
                                    <Button color={"#2B83A0"} title='حفظ' />
                                </View>
                                <View style={{ marginLeft: "5%", marginRight: "5%", width: 100 }}>
                                    <Button onPress={() => this.setState({ modalSettingsVisible: false })} color={"#2B83A0"} title='خروج' />
                                </View>

                            </View>
                        </View>


                        <View style={DisStyles.navStyle}>
                            <View>
                                <Text style={DisStyles.styleText}>الاعدادات</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.handelDisplayPressView('conn')}>
                                <ImageBackground style={DisStyles.imgStyleBG} source={this.state.settings1Press == true? require('./assets/nav_active.png') : require('./assets/nav_inactive.png')} >
                                    <Image style={DisStyles.iconStyle} source={this.state.settings1Press == true? require('./assets/conn_active.png') : require('./assets/conn_active.png')} />
                                </ImageBackground>
                            </TouchableOpacity>


                            <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />
                            <TouchableOpacity onPress={() => this.handelDisplayPressView('err')}>
                                <ImageBackground style={DisStyles.imgStyleBG} source={this.state.settings2Press == true? require('./assets/nav_active.png') : require('./assets/nav_inactive.png')} >
                                    <Image style={DisStyles.iconStyle} source={this.state.settings2Press == true? require('./assets/error_active.png') : require('./assets/error_inactive.png')} />
                                </ImageBackground>
                            </TouchableOpacity>

                            <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />

                            <TouchableOpacity onPress={() => this.handelDisplayPressView('display')}>
                                <ImageBackground style={DisStyles.imgStyleBG} source={this.state.settings3Press == true? require('./assets/nav_active.png') : require('./assets/nav_inactive.png')} >
                                    <Image style={DisStyles.iconStyle} source={this.state.settings3Press == true? require('./assets/display_active.png') : require('./assets/display_inactive.png')} />
                                </ImageBackground>
                            </TouchableOpacity>


                            <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />

                            <TouchableOpacity onPress={() => this.handelDisplayPressView('orders')}>
                                <ImageBackground style={DisStyles.imgStyleBG} source={this.state.settings4Press == true? require('./assets/nav_active.png') : require('./assets/nav_inactive.png')} >
                                    <Image style={DisStyles.iconStyle} source={this.state.settings4Press == true? require('./assets/order_active.png') : require('./assets/order_inactive.png')} />
                                </ImageBackground>
                            </TouchableOpacity>

                            <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />

                            <TouchableOpacity onPress={() => this.handelDisplayPressView('network')}>
                                <ImageBackground style={DisStyles.imgStyleBG} source={this.state.settings5Press == true? require('./assets/nav_active.png') : require('./assets/nav_inactive.png')} >
                                    <Image style={DisStyles.iconStyle} source={this.state.settings5Press == true? require('./assets/network_active.png') : require('./assets/network_inactive.png')} />
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            )
        } else {
            return null;
        }

    }

    active_func = () => {
        Alert.alert("Activated Successfully!");
        this.setState({ ActiveFlag: true })
    }

    update_func = () => {
        Alert.alert("Updates Successfully!");
        this.setState({ updatedFlag: true })

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
                                <View style={styles.cardStyle}>
                                    <Text >
                                        <IconIonicons name="exit-outline" size={50} color='#2B83A0' />
                                    </Text>
                                    <Text style={styles.cardTxtStyle}>
                                        خروج
                                    </Text>
                                </View>
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
    },
    "ipadPro105in18": {
        "opacity": 1,
        "position": "relative",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 1112,
        "height": 708,
        "left": 0,
        "top": 0
    },
    "ipadPro105in18_rectangle454": {
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
    "ipadPro105in18_ellipse96": {
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
    "ipadPro105in18_refresh": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 47.78,
        "height": 41.48,
        "left": 533.5,
        "top": 220.5
    },
    "ipadPro105in18_group3306": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 180,
        "height": 40,
        "left": 458,
        "top": 422,
        justifyContent: 'center',
        alignItems: 'center',
        "backgroundColor": "rgba(18, 120, 153, 1)",
        borderRadius: 10

    },
    updateBtnText: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
    },
    "ipadPro105in18_x": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(98, 100, 101, 1)",
        "fontSize": 20,
        "fontWeight": "400",
        "fontStyle": "normal",
        "fontFamily": "Cairo",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 165.5,
        "height": 53,
        "left": 473.75,
        "top": 341
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
    "ipadPro105in20": {
        "opacity": 1,
        "position": "relative",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 1112,
        "height": 708,
        "left": 0,
        "top": 0
    },
    "ipadPro105in20_rectangle453": {
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
    "ipadPro105in20_rectangle454": {
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
    "ipadPro105in20_x4aa6068a": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(18, 120, 153, 1)",
        "fontSize": 13,
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
        "width": 36,
        "height": 26,
        "left": 538,
        "top": 296
    },
    "ipadPro105in20_ellipse96": {
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
    "ipadPro105in20_group3306": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 197,
        "height": 51,
        "left": 458,
        "top": 422
    },
    "ipadPro105in20_x": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(98, 100, 101, 1)",
        "fontSize": 12,
        "fontWeight": "400",
        "fontStyle": "normal",
        "fontFamily": "Cairo",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 165.5,
        "height": 53,
        "left": 473.75,
        "top": 341
    },
    "ipadPro105in20_tap": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 32.64,
        "height": 45.31,
        "left": 539.66,
        "top": 218.34
    },
    "ipadPro105in21": {
        "opacity": 1,
        "position": "relative",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 1112,
        "height": 708,
        "left": 0,
        "top": 0
    },
    "ipadPro105in21_rectangle453": {
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
    "ipadPro105in21_rectangle454": {
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
        "height": 543,
        "left": 387,
        "top": 89
    },
    "ipadPro105in21_x40637d03": {
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
        "left": 471.25,
        "top": 173.5
    },
    "ipadPro105in21_rectangle456": {
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
        "left": 422,
        "top": 226
    },
    "ipadPro105in21_rectangle531": {
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
        "left": 422,
        "top": 278
    },
    "ipadPro105in21_rectangle532": {
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
        "left": 421,
        "top": 330
    },
    "ipadPro105in21_rectangle533": {
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
        "width": 129,
        "height": 31,
        "left": 421,
        "top": 382
    },
    "ipadPro105in21_rectangle535": {
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
        "width": 129,
        "height": 31,
        "left": 570,
        "top": 382
    },
    "ipadPro105in21_rectangle534": {
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
        "height": 89,
        "left": 424,
        "top": 434
    },
    "ipadPro105in21_x33afbb33": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(167, 167, 167, 1)",
        "fontSize": 10,
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
        "width": 25.5,
        "height": 20,
        "left": 658.5,
        "top": 232
    },
    "ipadPro105in21_x166bbf66": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(167, 167, 167, 1)",
        "fontSize": 10,
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
        "width": 29.5,
        "height": 20,
        "left": 654.5,
        "top": 284
    },
    "ipadPro105in21_xacd131ba": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(167, 167, 167, 1)",
        "fontSize": 10,
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
        "width": 64.5,
        "height": 20,
        "left": 618.5,
        "top": 336
    },
    "ipadPro105in21_xa812adb7": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(167, 167, 167, 1)",
        "fontSize": 10,
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
        "width": 32.25,
        "height": 20,
        "left": 502.42,
        "top": 388
    },
    "ipadPro105in21_x683bdcd8": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(167, 167, 167, 1)",
        "fontSize": 10,
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
        "width": 32.25,
        "height": 20,
        "left": 651.42,
        "top": 388
    },
    "ipadPro105in21_xdf423a02": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(167, 167, 167, 1)",
        "fontSize": 10,
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
        "width": 35.25,
        "height": 20,
        "left": 650.75,
        "top": 440
    },
    "ipadPro105in21_x92815930": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(18, 120, 153, 1)",
        "fontSize": 13,
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
        "width": 36,
        "height": 26,
        "left": 535,
        "top": 138
    },
    "ipadPro105in21_ellipse96": {
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
        "left": 512,
        "top": 41
    },
    "ipadPro105in21_tap": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 32.64,
        "height": 45.31,
        "left": 536.66,
        "top": 60.34
    },
    "ipadPro105in21_group3306": {
        "opacity": 1,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 180,
        "height": 40,
        "left": 465,
        "top": 566,
        justifyContent: 'center',
        alignItems: 'center',
        "backgroundColor": "rgba(18, 120, 153, 1)",
        borderRadius: 10
    },

    "ipadPro105in21_group3306_x": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(255, 255, 255, 1)",
        "fontSize": 12,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Cairo",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 72,
        "height": 23,
        "left": 54,
        "top": 5
    },
    "ipadPro105in21_iconMetroCancel": {
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
        "left": 401.34,
        "top": 105.15
    },
    "ipadPro105in17": {
        "opacity": 1,
        "position": "relative",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 1112,
        "height": 708,
        "left": 0,
        "top": 0
    },
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
    },
    "ipadPro105in17_rectangle456": {
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
    },
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
    "ipadPro105in17_group3344_group3306": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 97,
        "height": 33,
        "left": 146,
        "top": 0
    },
    "ipadPro105in17_group3344_group3306_rectangle444b7362000": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderTopWidth": 1,
        "borderTopColor": "rgba(175, 173, 173, 1)",
        "borderRightWidth": 1,
        "borderRightColor": "rgba(175, 173, 173, 1)",
        "borderBottomWidth": 1,
        "borderBottomColor": "rgba(175, 173, 173, 1)",
        "borderLeftWidth": 1,
        "borderLeftColor": "rgba(175, 173, 173, 1)",
        "borderTopLeftRadius": 6,
        "borderTopRightRadius": 6,
        "borderBottomLeftRadius": 6,
        "borderBottomRightRadius": 6,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.1607843137254902,
        "shadowOffset": {
            "width": 0,
            "height": 3
        },
        "shadowRadius": 6,
        "width": 97,
        "height": 33,
        "left": 0,
        "top": 0
    },
    "ipadPro105in17_group3344_group3306_x6ef63f2b": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(184, 180, 180, 1)",
        "fontSize": 12,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Cairo",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 12,
        "height": 23,
        "left": 43,
        "top": 5
    },
    "ipadPro105in17_group3344_group3296": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 97,
        "height": 33,
        "left": 0,
        "top": 0
    },
    "ipadPro105in17_group3344_group3296_rectangle444": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderTopWidth": 1,
        "borderTopColor": "rgba(175, 173, 173, 1)",
        "borderRightWidth": 1,
        "borderRightColor": "rgba(175, 173, 173, 1)",
        "borderBottomWidth": 1,
        "borderBottomColor": "rgba(175, 173, 173, 1)",
        "borderLeftWidth": 1,
        "borderLeftColor": "rgba(175, 173, 173, 1)",
        "borderTopLeftRadius": 6,
        "borderTopRightRadius": 6,
        "borderBottomLeftRadius": 6,
        "borderBottomRightRadius": 6,
        "shadowColor": "rgb(0,  0,  0)",
        "shadowOpacity": 0.1607843137254902,
        "shadowOffset": {
            "width": 0,
            "height": 3
        },
        "shadowRadius": 6,
        "width": 97,
        "height": 33,
        "left": 0,
        "top": 0
    },
    "ipadPro105in17_group3344_group3296_xc5c0fd38": {
        "opacity": 1,
        "position": "absolute",
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "color": "rgba(184, 180, 180, 1)",
        "fontSize": 12,
        "fontWeight": "700",
        "fontStyle": "normal",
        "fontFamily": "Cairo",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 26,
        "height": 23,
        "left": 36,
        "top": 5
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
    "ipadPro105in17_update_path2241": {
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
        "width": 28.3,
        "height": 28.3,
        "left": 5.82,
        "top": 5.82
    },
    "ipadPro105in17_update_path2242": {
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
        "width": 15.82,
        "height": 15.82,
        "left": 12.06,
        "top": 12.06
    },
    "ipadPro105in17_update_path2243": {
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
        "width": 29.46,
        "height": 35.43,
        "left": 10.98,
        "top": -0.5
    },
    "ipadPro105in17_update_path2244": {
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
        "width": 29.46,
        "height": 35.43,
        "left": -0.5,
        "top": 5.01
    }

});

const DisStyles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#E4F1FF",
        width: "75%",
        position: "absolute",
        top: "10%",
        left: "20%",
        right: "20%",
        height: "70%",
        borderRadius: 20

    },
    viewContainer: {
        flex: 1,
        marginTop: "1%",
        alignItems: 'center',
        marginRight: "10%",
        height: "95%",
        width: "100%",

    },
    viewContainerBtn: {
        padding: 5,
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
    },
    viewDisplayCardContainer: {
        // justifyContent: "center",
        width: "100%",

    },
    navStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "flex-end",
        position: 'absolute',
        right: "0%",
        height: "100%",
        width: "25%",
        backgroundColor: "#E4F1FF",
        borderRadius: 20


    },
    imgStyleBG: {
        width: 85,
        height: 85,
        zIndex: 1,
    },

    imgStyle: {
        height: 40,
        marginBottom: -20,
        marginTop: -20,
    },
    imgStyleDis: {
        height: 7,
        width: 50,
        justifyContent: "center",

    },
    DisContainerStyleInactive: {
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 3,
        padding: 2,
        width: 35,
        height: 35,
        borderColor: "#2B83A0",
        alignItems: "center"
    },
    DisContainerStyleActive: {
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 3,
        padding: 2,
        width: 35,
        height: 35,
        borderColor: "#ffffff",
        alignItems: "center",
        backgroundColor: "#F79122"
    },
    displayContainerStyle: {
        flex: 1,
        flexDirection: "row-reverse",
        width: "100%",
        justifyContent: "center",
        marginBottom: 10
    },
    displayTextStyleActive: {
        color: "#FFFFFF"
    },
    displayTextStyleInactive: {
        color: "#2B83A0"
    },
    DisContainerStyleImg: {
        marginTop: 12
    },
    iconStyle: {
        width: 30,
        height: 30,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 25
    },
    styleText: {
        color: '#333',
        fontSize: 20,
        fontWeight: "bold"
    },
    cardStyle: {
        backgroundColor: "#ffffff",
        width: "65%",
        height: "30%",
        shadowColor: '#E4F1FF',
        shadowRadius: 5,
        borderRadius: 20,
        shadowOpacity: 1,
        borderColor: "#E4F1FF",
        borderWidth: 5

    }, cardErrStyle: {
        backgroundColor: "#ffffff",
        width: "65%",
        height: "45%",
        shadowColor: '#E4F1FF',
        shadowRadius: 5,
        borderRadius: 20,
        shadowOpacity: 1,
        borderColor: "#E4F1FF",
        borderWidth: 5
    },
    cardDisplayStyle: {
        backgroundColor: "#ffffff",
        width: "85%",
        height: "100%",
        shadowColor: '#E4F1FF',
        borderColor: "#E4F1FF",
        borderWidth: 5
    },
    cardTitleViewStyle: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#2B83A0",
        height: 40,
        marginBottom: 10
    }, DisplayTitleViewStyle: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: "10%",
        marginBottom: 10
    }
    , cardTitleTxtStyle: {
        padding: 5,
        color: "#FFFFFF",
        fontSize: 20,
        marginRight: 10
    },
    cardInputViewStyle: {
        flex: 1,
        flexDirection: "row"
    }, inputTitleStyle: {
        fontSize: 17,
        color: "#A7A7A7",
        fontWeight: "bold"
    },
    inputStyle: {
        // alignSelf:"flex-start",
        position: "absolute",
        left: 150,
        backgroundColor: "#E4F1FF",
        width: "70%",
        textAlign: "center",
        padding: 3,
        borderRadius: 5,
        paddingRight: 8,
    },
    PrinterContentStyle: {
        position: "absolute",
        left: "20%",
        flexDirection: "row",
        alignSelf: "center",


    }, RadioContentStyle: {
        position: "absolute",
        left: "10%",
        flexDirection: "row",
        alignSelf: "center",


    },
    printerItemStyle: {
        width: 150,
        height: 150,
    }


})

