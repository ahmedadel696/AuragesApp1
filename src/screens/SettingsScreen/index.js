import { CheckBox } from 'native-base';
import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native';
import { ListItem, Container, Content, Header, Text, Radio } from 'native-base';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      navType: 'conn',
      displayType: 1,
      view1Press: true,
      view2Press: false,
      view3Press: false,
      view4Press: false,
    }
  }
  handelDisplayPressView = (pressType) => {
    this.setState({ navType: pressType })
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
      <View style={DisStyles.cardStyle}>
        <View style={DisStyles.cardTitleViewStyle}>
          <Text style={DisStyles.cardTitleTxtStyle}>اعدادات الاتصال</Text>
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >المخدم</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='192.168.0.190' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >قاعده البيانات</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='AuragesDb01' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >المستخدم</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='Admin' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >كلمه السر</Text>
          <TextInput secureTextEntry style={DisStyles.inputStyle} placeholder='*******' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >البرابه</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='1433' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >اتصال دائم</Text>
          <CheckBox />
        </View>
        <View style={{ width: 110, marginLeft: "9%", borderRadius: 10 }}>
          <Button color={"#2B83A0"} title='حفظ' />
        </View>
      </View>
    );
  }
  renderErrorView() {
    return (
      <View style={DisStyles.cardErrStyle}>
        <View style={DisStyles.cardTitleViewStyle}>
          <Text style={DisStyles.cardTitleTxtStyle}> تقرير الأخطاء</Text>
        </View>
        <View style={{ padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} > هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</Text>
        </View>

        <View style={{ width: 110, marginLeft: "9%", borderRadius: 10 }}>
          <Button color={"#2B83A0"} title='حفظ' />
        </View>
      </View>
    );
  }
  renderDisplayView() {
    return (
      <View style={DisStyles.cardDisplayStyle}>
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
      </View>);
  }
  renderOrdersView() {
    return (
      <View style={DisStyles.cardStyle}>
        <View style={DisStyles.cardTitleViewStyle}>
          <Text style={DisStyles.cardTitleTxtStyle}>الطلبات</Text>
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >اسم الشركه</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='192.168.0.190' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >نسبه الضريبه</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='AuragesDb01' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >نسبة الضريبة2</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='Admin' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >نسبة الخدمة</Text>
          <TextInput secureTextEntry style={DisStyles.inputStyle} placeholder='*******' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >إضافة مجموعة</Text>
          <TextInput style={DisStyles.inputStyle} placeholder='(اختياري)' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={DisStyles.inputTitleStyle} >طريقة الطباعة</Text>
          <View style={DisStyles.PrinterContentStyle}>
            <ListItem style={DisStyles.printerItemStyle}>
              <Radio
                onPress={() => this.setState({ itemSelected: 'one' })}
                selected={this.state.itemSelected == 'one'}
              />
              <Text style={DisStyles.inputTitleStyle}>datecs printer</Text>
            </ListItem >
            <ListItem style={DisStyles.printerItemStyle}>
              <Radio
                onPress={() => this.setState({ itemSelected: 'two' })}
                selected={this.state.itemSelected == 'two'}
              />
              <Text style={DisStyles.inputTitleStyle}>Qts printer</Text>
            </ListItem>
          </View>
        </View>
        <View style={{ width: 110, marginLeft: "9%", borderRadius: 10 }}>
          <Button color={"#2B83A0"} title='حفظ' />
        </View>
      </View>
    );
  }
  renderNetworkView() {
    return (
      <Text>Network View</Text>
    );
  }

  renderDisplayView1() {
    return (
      <View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={{ marginLeft: 3 }}>
            <IconAntDesign name="caretleft" size={25} color='#F79122' />
          </Text>
          <Text style={{ color: "#F79122", fontSize: 18, fontWeight: "bold" }} >خيارات العرض</Text>
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > اظهار المجموعات فى نافذه</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > اظهار صور المجموعات</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > اظهار صور الملاحظات</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > اظهار حاله الطاولات</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > اظهار الطاولات المحجوزه</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > اظهار لوحه المفاتيح</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ width: 110, marginLeft: 15, borderRadius: 10 }}>
          <Button color={"#2B83A0"} title='حفظ' />
        </View>
      </View>
    );
  }
  renderDisplayView2() {
    return (
      <View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={{ marginLeft: 3 }}>
            <IconAntDesign name="caretleft" size={25} color='#F79122' />
          </Text>
          <Text style={{ color: "#F79122", fontSize: 18, fontWeight: "bold" }} >أزرار الواجهة</Text>
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >إحضار فاتورة</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >نقل طاولة</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > الستديد</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >العروض</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >إحضار فاتورة</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > حجز طاولة</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >خروج</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
      </View>
    );
  }
  renderDisplayView3() {
    return (
      <View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={{ marginLeft: 3 }}>
            <IconAntDesign name="caretleft" size={25} color='#F79122' />
          </Text>
          <Text style={{ color: "#F79122", fontSize: 18, fontWeight: "bold" }} >أزرار واجهة احضار فاتورة</Text>
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >طباعة بلوتوث</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >طباعة كاشير</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} > طباعة حسب الموقع</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >اغلاق الطلب</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15, justifyContent: "space-between" }}>
          <Text style={DisStyles.inputTitleStyle} >الغاء الامر</Text>
          <CheckBox style={{ marginLeft: 15 }} />
        </View>
      </View>   
       );
  }
  renderDisplayView4() {
    return (
      <Text style={{ textAlign: "center" }}>Diplay View 4</Text>
    );
  }

  render() {
    return (
      <View style={DisStyles.container}>
        <View elevation={5} style={DisStyles.viewContainer}>
          {this.state.navType == 'conn' ? this.renderConnectionView()
            : this.state.navType == 'err' ? this.renderErrorView()
              : this.state.navType == 'orders' ? this.renderOrdersView()
                : this.state.navType == 'display' ? this.renderDisplayView()
                  : this.state.navType == 'network' ? this.renderNetworkView() : null}
        </View>
        <View style={DisStyles.navStyle}>
          <View>
            <Text style={DisStyles.styleText}>الاعدادات</Text>
          </View>
          <TouchableOpacity onPress={() => this.handelDisplayPressView('conn')}>
            <ImageBackground style={DisStyles.imgStyleBG} source={require('./assets/group3571.png')} >
              <Image style={DisStyles.iconStyle} source={require('./assets/connecting.png')} />
            </ImageBackground>
          </TouchableOpacity>


          <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />
          <TouchableOpacity onPress={() => this.handelDisplayPressView('err')}>
            <ImageBackground style={DisStyles.imgStyleBG} source={require('./assets/group3571.png')} >
              <Image style={DisStyles.iconStyle} source={require('./assets/error.png')} />
            </ImageBackground>
          </TouchableOpacity>

          <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />

          <TouchableOpacity onPress={() => this.handelDisplayPressView('display')}>
            <ImageBackground style={DisStyles.imgStyleBG} source={require('./assets/group3571.png')} >
              <Image style={DisStyles.iconStyle} source={require('./assets/display.png')} />
            </ImageBackground>
          </TouchableOpacity>


          <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />

          <TouchableOpacity onPress={() => this.handelDisplayPressView('orders')}>
            <ImageBackground style={DisStyles.imgStyleBG} source={require('./assets/group3571.png')} >
              <Image style={DisStyles.iconStyle} source={require('./assets/connecting.png')} />
            </ImageBackground>
          </TouchableOpacity>

          <Image style={DisStyles.imgStyle} source={require('./assets/rectangle540.png')} />

          <TouchableOpacity onPress={() => this.handelDisplayPressView('network')}>
            <ImageBackground style={DisStyles.imgStyleBG} source={require('./assets/group3571.png')} >
              <Image style={DisStyles.iconStyle} source={require('./assets/network.png')} />
            </ImageBackground>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const DisStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",

  },
  viewContainer: {
    flex: 1,
    // alignSelf: "flex-start",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: "10%"

  },
  viewDisplayCardContainer: {
    justifyContent: "center",
    width: "100%"
  },
  navStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: "flex-end",
    position: 'absolute',
    right: "0%",
    height: "100%",
    width: "25%",
    backgroundColor: "#E4F1FF",

  },
  imgStyleBG: {
    width: 120,
    height: 120,
  },

  imgStyle: {
    height: 40,
    marginBottom: -20,
    marginTop: -20,
  },
  imgStyleDis: {
    height: 7,
    width: 120,
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
    marginBottom: 20
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
    width: 50,
    height: 50,
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
    height: "63%",
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
    width: "65%",
    height: "73%",
    shadowColor: '#E4F1FF',
    shadowRadius: 5,
    borderRadius: 20,
    shadowOpacity: 1,
    borderColor: "#E4F1FF",
    borderWidth: 5
  },
  cardTitleViewStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#2B83A0",
    height: "10%",
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


  },
  printerItemStyle: {
    width: 150,
    height: 150,
  }


})

export default SettingsScreen;
