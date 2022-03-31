import { CheckBox, ListItem, Radio } from 'native-base';
import React, { Component } from 'react';
import {View, StyleSheet, Modal, ScrollView, Text, TextInput, TouchableOpacity, Image, ImageBackground, Button} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
class SettingModal extends Component {
    constructor(props){
        super(props);

        this.state = {
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

    render() {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.modalSettingsVisible}

            onRequestClose={() => {
                // this.setState({ modalSettingsVisible: false })
                this.props.setSettingViewFalse
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
                            {/* <Button onPress={() => this.setState({ modalSettingsVisible: false })} color={"#2B83A0"} title='خروج' /> */}
                            <Button onPress={this.props.setSettingViewFalse } color={"#2B83A0"} title='خروج' />

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
        );
    }
}

const DisStyles = StyleSheet.create({
    container: {
        flex: 1,
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
export default SettingModal;
