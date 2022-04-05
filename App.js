import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StackNavigation from './src/screens/StackNavigation';
import MSSQL from 'react-native-mssql';

 const App = () => {

  async function openDB() {
    const config = {
      server: '192.168.1.19', //ip address of the mssql database
      username: 'admin', //username to login to the database
      password: '00000', //password to login to the database
      database: 'AuragesDb01', //the name of the database to connect to
      port: 1433, //OPTIONAL, port of the database on the server
      // timeout: 5, //OPTIONAL, login timeout for the server
    }
    let cnx = ''
    try {
      cnx = await MSSQL.connect(config);
      return true // 'Conectar ao Servidor: '+cnx
    } catch (err) {
      console.log("conn error : "+err)
      return false// 'Conectar ao Servidor: Failled!'
    }
  }
  openDB().then(async () => {
    try {
      const query = `select Guid, Number, Code as Name from TablesPlaces where HostGuid = NullGUID`

      const result = await MSSQL.executeQuery(query);
      alert(JSON.stringify(result))
      console.log(result)
      console.log('show readAll')
      await MSSQL.close()
    } catch (erro) {
      console.log(erro)
      console.log("Errorrr  :  "+erro)
      await MSSQL.close()
    }
  })
  return (
    // <View style={styles.container}>
    <StackNavigation />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;