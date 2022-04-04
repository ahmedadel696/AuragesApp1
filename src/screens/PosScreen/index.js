import { CheckBox } from 'native-base';
import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, Button, ScrollView, BackHandler, Alert } from 'react-native';
import { ListItem, Container, Content, Header, Text, Radio } from 'native-base';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import SettingModal from '../SettingModal';
import SettingsScreen from './../SettingsScreen/index';
class PosScreen extends Component {
  constructor() {
    super();
    this.state = {
      posNavType: 'add',
      posView1Press: true,
      posView2Press: false,
      posView3Press: false,
      posView4Press: false,
      posView5Press: false,
      posView6Press: false,
      modalSettingsVisible: false,

    }
  }

  backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      // { text: "YES", onPress: () => BackHandler.exitApp() }
      { text: "YES", onPress: () => this.props.navigation.goBack(null) }

    ]);

  };
  handelPosPressView = (pressType) => {
    this.setState({ posNavType: pressType });
    if (pressType == 'add') {
      this.setState({ posView1Press: true })
      this.setState({ posView2Press: false })
      this.setState({ posView3Press: false })
      this.setState({ posView4Press: false })
      this.setState({ posView5Press: false })
      this.setState({ posView6Press: false })

    } else if (pressType == 'bill') {
      this.setState({ posView1Press: false })
      this.setState({ posView2Press: true })
      this.setState({ posView3Press: false })
      this.setState({ posView4Press: false })
      this.setState({ posView5Press: false })
      this.setState({ posView6Press: false })

    } else if (pressType == 'transfer') {
      this.setState({ posView1Press: false })
      this.setState({ posView2Press: false })
      this.setState({ posView3Press: true })
      this.setState({ posView4Press: false })
      this.setState({ posView5Press: false })
      this.setState({ posView6Press: false })

    } else if (pressType == 'lang') {
      this.setState({ posView1Press: false })
      this.setState({ posView2Press: false })
      this.setState({ posView3Press: false })
      this.setState({ posView4Press: true })
      this.setState({ posView5Press: false })
      this.setState({ posView6Press: false })

    } else if (pressType == 'settings') {
      this.setState({ modalSettingsVisible: true })
      this.setState({ posView1Press: false })
      this.setState({ posView2Press: false })
      this.setState({ posView3Press: false })
      this.setState({ posView4Press: false })
      this.setState({ posView5Press: true })
      this.setState({ posView6Press: false })

    } else if (pressType == 'out') {
      this.setState({ posView1Press: false })
      this.setState({ posView2Press: false })
      this.setState({ posView3Press: false })
      this.setState({ posView4Press: false })
      this.setState({ posView5Press: false })
      this.setState({ posView6Press: true })

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

  handelPosPressViewContent = (pressType) => {

    if (pressType == 'add') {
      return (
        <View style={styles.ViewOfMain2}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start", flexShrink: 1, flexWrap: "wrap" }}>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.table_style_container}>
              <View style={styles.table_style_title_container}>
                <Text style={styles.table_style_title_text}>مجموعه 1</Text>
              </View>
              <View style={styles.table_style_card}>
                <Image style={styles.posTblIconStyle} source={require('./assets/table_icon.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else if (pressType == 'bill') {
      return (
        <View style={styles.ViewOfMain}>
          <Text style={{ textAlign: "center", color: "#ffffff", fontSize: 22, fontWeight: "bold" }}>bill</Text>
        </View>
      )
    } else if (pressType == 'transfer') {
      return (
        <View style={styles.ViewOfMain}>
          <Text style={{ textAlign: "center", color: "#ffffff", fontSize: 22, fontWeight: "bold" }}>transfer</Text>
        </View>
      )
    } else if (pressType == 'lang') {
      return (
        <View style={styles.ViewOfMain}>
          <Text style={{ textAlign: "center", color: "#ffffff", fontSize: 22, fontWeight: "bold" }}>lang</Text>
        </View>
      )
    } else if (pressType == 'settings') {
      return (
        <SettingsScreen />
      )


    } else if (pressType == 'out') {
      // return (
      //   <View style={styles.ViewOfMain}>
      //     {/* <Text style={{ textAlign: "center", color: "#ffffff", fontSize: 22, fontWeight: "bold" }}>out</Text> */}
      //     {this.backAction}
      //   </View>
      // )
    } else if (pressType == 'item') {
      return (
        <View style={styles.ViewOfMain2}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start", flexShrink: 1, flexWrap: "wrap" }}>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_style_container}>
              {/* <View style={styles.table_style_card}> */}
                <Image style={styles.posTblIconStyle} source={require('./assets/item_1.png')} />
              {/* </View> */}
              <View style={styles.item_style_title_container}>
                <Text style={styles.item_style_title_text}>دجاج المندى</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      )
    }
  }

  _renderListItem = (name, qty, price, comment) => {
    return (
      <TouchableOpacity style={{ elevation: 3, backgroundColor: "#ffffff", marginBottom: 3, padding: 5 }}>
        <View style={{ flexDirection: 'row-reverse', justifyContent: "space-around", marginBottom: 4, padding: 5 }}>
          <Text style={{ color: "#2B83A0", fontSize: 18, fontWeight: "bold" }}>{name}</Text>
          <View style={{ borderWidth: 2, borderColor: "#E8E8E8", borderRadius: 4, paddingLeft: 10, paddingRight: 10 }}>
            <Text style={{ color: "#F79122", fontSize: 18, fontWeight: "bold" }}>{qty}</Text>
          </View>
          <Text style={{ color: "#2B83A0", fontSize: 18, fontWeight: "bold" }}>{price}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", flexShrink: 1, flexWrap: "wrap" }}>
          <Text style={{ color: "#808080", fontSize: 15, fontWeight: "bold" }}>{comment}</Text>
        </View>
      </TouchableOpacity>
    )
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
                onPress={() => this.handelPosPressView('add')}
                style={this.state.posView1Press == true ? styles.posNavItemStyleActive : styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/add_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handelPosPressView('bill')}
                style={this.state.posView2Press == true ? styles.posNavItemStyleActive : styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/bill_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handelPosPressView('transfer')}
                style={this.state.posView3Press == true ? styles.posNavItemStyleActive : styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/transfer_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handelPosPressView('lang')}
                style={this.state.posView4Press == true ? styles.posNavItemStyleActive : styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/lang_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handelPosPressView('settings')}
                style={this.state.posView5Press == true ? styles.posNavItemStyleActive : styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/settings_icon.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.backAction()}
                style={this.state.posView6Press == true ? styles.posNavItemStyleActive : styles.posNavItemStyle}
              >
                <Image style={styles.posNavIconStyle} source={require('./assets/out_icon.png')} />
              </TouchableOpacity>
            </ScrollView>

          </View>
          <View style={styles.posMainView}>
            <View style={{ flexDirection: "row-reverse", padding: 15 }}>
              <View>
                <Image style={styles.posLisIconStyle} source={require('./assets/back_icon.png')} />
              </View>
              <View style={{ justifyContent: "center" }}>
                <Text style={{ color: "#626465", fontSize: 18, fontWeight: "bold" }}>أضافه طلب</Text>
              </View>
            </View>
            {this.handelPosPressViewContent(this.state.posNavType)}
          </View>
          <View style={styles.posListViewContainer}>
            <View style={styles.posListView1}>
              <View style={{ flexDirection: "row-reverse", backgroundColor: "#2B83A0", justifyContent: "space-around", padding: 5 }}>
                <TouchableOpacity
                  onPress={() => this.handelPosPressView('add')}
                >
                  <Image style={styles.posLisIconStyle} source={require('./assets/with_icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handelPosPressView('add')}
                >
                  <Image style={styles.posLisIconStyle} source={require('./assets/plus_icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handelPosPressView('add')}
                >
                  <Image style={styles.posLisIconStyle} source={require('./assets/min_icon.png')} />
                </TouchableOpacity>
              </View>
              <ScrollView>
                {this._renderListItem('دجاج المندى', 2, 70.5, '1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا ')}
                {this._renderListItem('فرخه مشويه', 3, 50.5, '1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا ')}
                {this._renderListItem('ارز بالخلطه', 4, 30, '1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا / 1 كولا ')}
                {/* <View style={{ padding: 10, borderWidth: 1, margin: 3 }}>
                  <Text style={{ textAlign: "center" }}>Item1</Text>
                </View>
                <View style={{ padding: 10, borderWidth: 1, margin: 3 }}>
                  <Text style={{ textAlign: "center" }}>Item2</Text>
                </View>
                <View style={{ padding: 10, borderWidth: 1, margin: 3 }}>
                  <Text style={{ textAlign: "center" }}>Item3</Text>
                </View>
                <View style={{ padding: 10, borderWidth: 1, margin: 3 }}>
                  <Text style={{ textAlign: "center" }}>Item4</Text>
                </View>
                <View style={{ padding: 10, borderWidth: 1, margin: 3 }}>
                  <Text style={{ textAlign: "center" }}>Item5</Text>
                </View> */}
              </ScrollView>
            </View>
            <View style={styles.posListView2}>
              <View style={{ flexDirection: "row-reverse", backgroundColor: "#2B83A0", justifyContent: "space-around", padding: 5 }}>
                <Text style={{ fontSize: 19, fontWeight: "bold", color: "#ffffff", padding: 5, borderRadius: 10 }}>الاجمالى : </Text>
                <Text style={{ fontSize: 19, fontWeight: "bold", backgroundColor: "#ffffff", color: "#F79122", padding: 5, borderRadius: 10 }}>80.6</Text>
              </View>
              <View style={{ flexDirection: "row-reverse", backgroundColor: "#ffffff", justifyContent: "space-around", padding: 5 }}>
                <View style={styles.posListContainerStyle} >
                  <TouchableOpacity
                    onPress={() => this.handelPosPressView('add')}
                  >
                    <Image style={styles.posLisIcon2Style} source={require('./assets/print_icon.png')} />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center", color: "#2B83A0", marginTop: 14 }}>طباعه</Text>
                </View>
                <View style={styles.posListContainerStyle} >
                  <TouchableOpacity
                    onPress={() => this.handelPosPressView('add')}

                  >
                    <Image style={styles.posLisIcon2Style} source={require('./assets/fire_icon.png')} />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center", color: "#2B83A0", marginTop: 14 }}>fire</Text>

                </View>
                <View style={styles.posListContainerStyle} >
                  <TouchableOpacity
                    onPress={() => this.handelPosPressView('add')}

                  >
                    <Image style={styles.posLisIcon2Style} source={require('./assets/delete_icon.png')} />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center", color: "#2B83A0", marginTop: 14 }}>حذف الطلب</Text>

                </View>

              </View>
            </View>

          </View>
        </View>
        <ScrollView horizontal style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => this.handelPosPressView('item')}
            style={styles.posBottomViewItemStyle}>
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

  }, topContainer: {
    flexDirection: "row",
    height: "83%"
  }, bottomContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    height: "17%",

  }, posBottomViewItemStyle: {
    backgroundColor: "#E4F1FF",
    margin: 3,
    justifyContent: "center",
    padding: 10,
    borderRadius: 10

  }, posBottomViewItemTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#2B83A0",
    fontSize: 18,

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
  posNavItemStyleActive: {
    height: 80,
    width: "100%",
    backgroundColor: "#F79122",
    marginBottom: 1,
    justifyContent: "center"
  },
  posNavIconStyle: {
    alignSelf: "center",
    width: 30,
    height: 30
  },
  posMainView: {
    // justifyContent: "center",
    width: "60%",
    margin: 5
  },
  ViewOfMain: {
    backgroundColor: "#2B83A0",
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333",
  }, ViewOfMain2: {
    padding: 30,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#333",
  },
  posListViewContainer: {
    flexDirection: "column",
    width: "27%"
  },
  posListView1: {
    height: "75%",
    backgroundColor: "#E4F1FF",

  },
  posListView2: {
    justifyContent: "center",
    backgroundColor: "#E4F1FF",
  },
  posLisIconStyle: {
    alignSelf: "center",
    width: 50,
    height: 50
  },
  posLisIcon2Style: {
    alignSelf: "center",
    width: 24,
    height: 24
  }, posListContainerStyle: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: 80,
    height: 90,
    padding: 5,
    borderRadius: 10,

    elevation: 4
  },
  table_style_container: {
    width: 125,
    elevation: 7,
    margin: 6,
    marginBottom: 15
  },
  item_style_container: {
    width: 125,
    elevation: 7,
    margin: 6,
    marginBottom: 15,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  table_style_title_container: {
    backgroundColor: "#F79122",
    alignItems: "center"
  },
  item_style_title_container: {
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  item_style_title_text: {
    color: "#2B83A0",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 3
  },
  table_style_title_text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 3
  },
  table_style_card: {
    backgroundColor: "#ffffff",
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,

  },
  posTblIconStyle: {

  }


})

export default PosScreen;
