import { CheckBox } from 'native-base';
import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { ListItem, Container, Content, Header, Text, Radio } from 'native-base';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
class PosScreen extends Component {
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
      <View style={styles.cardStyle}>
        <View style={styles.cardTitleViewStyle}>
          <Text style={styles.cardTitleTxtStyle}>اعدادات الاتصال</Text>
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={styles.inputTitleStyle} >المخدم</Text>
          <TextInput style={styles.inputStyle} placeholder='192.168.0.190' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={styles.inputTitleStyle} >قاعده البيانات</Text>
          <TextInput style={styles.inputStyle} placeholder='AuragesDb01' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={styles.inputTitleStyle} >المستخدم</Text>
          <TextInput style={styles.inputStyle} placeholder='Admin' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={styles.inputTitleStyle} >كلمه السر</Text>
          <TextInput secureTextEntry style={styles.inputStyle} placeholder='*******' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={styles.inputTitleStyle} >البرابه</Text>
          <TextInput style={styles.inputStyle} placeholder='1433' />
        </View>
        <View style={{ flexDirection: 'row-reverse', padding: 15 }}>
          <Text style={styles.inputTitleStyle} >اتصال دائم</Text>
          <CheckBox />
        </View>
        <View style={{ width: 110, marginLeft: "9%", borderRadius: 10 }}>
          <Button color={"#2B83A0"} title='حفظ' />
        </View>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.posNavStyle}>
            <View style={styles.navIconBgContainer}>
              <Image style={{ width: 83, height: 83 }} resizeMode={'contain'} source={require('./assets/logo.png')} />
            </View>
            <ScrollView style={styles.posNavItemsContainer}>
              <TouchableOpacity
                onPress={() => console.log("test")}
                style={styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/add_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("test")}
                style={styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/bill_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("test")}
                style={styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/transfer_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("test")}
                style={styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/lang_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("test")}
                style={styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/settings_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("test")}
                style={styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/out_icon.png')} />
              </TouchableOpacity>
            </ScrollView>

          </View>
          <View style={styles.posMainView}>

          </View>
          <View style={styles.posListView}>

          </View>
        </View>
        <ScrollView horizontal style={styles.bottomContainer}>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>المشروبات</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>الحلويات</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>المقبلات</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>الدجاج</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>الارز</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>اللحوم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>المخللات</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>الطواجن</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>المشروبات</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>الوجبات الخفيفه</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>الوجبات السريعه</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>وجبات الافطار</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.posBottomViewItemStyle}>
            <Text style={styles.posBottomViewItemTextStyle}>العروض</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4F1FF",

  },topContainer:{
    flexDirection: "row",
    height: "83%"
  },bottomContainer:{
    flexDirection: "row",
    backgroundColor: "#ffffff",
    height:"17%",

  },posBottomViewItemStyle:{
    backgroundColor:"#E4F1FF",
    margin:3,
    justifyContent:"center",
    padding:10,
    borderRadius:10

  },posBottomViewItemTextStyle:{
    textAlign:"center",
    fontWeight:"bold",
    color:"#2B83A0",
    fontSize:18,

  }, posNavStyle: {
    backgroundColor: "#ffffff",
    width: "13%"

  }, navIconBgContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "15%",
    alignItems: "center"
  },
  posNavItemsContainer: {
    height: "80%"
  },
  posNavItemStyle: {
    height: 80,
    width: "100%",
    backgroundColor: "#2B83A0",
    marginBottom: 1,
    justifyContent: "center"
  },
  posNavIconStyle: {
    alignSelf: "center",
    width: 30,
    height: 30
  }

})

export default PosScreen;
