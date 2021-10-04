import React, { Component } from 'react'
import {  StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';


import RNPickerSelect from 'react-native-picker-select';


  
  
import axios from 'axios';

export default class SignupScreen extends Component {
  state = {fullName: '' , email: '',gender: '' , password: '',  birthday: '', 
  addressDetail: '', ward: '',district: '',province: '', phoneNumber: ''}


render() {
    return (
      <View style={styles.container}> 
        <Image
          source={{
            uri: 'https://i.imgur.com/tkMsHUW.png',
          }  
          }
          style={{ marginTop : -100, width: 206, height: 200 }}
      />
        
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder=" Họ và tên"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({fullName: text});
          }}
        />  
        <TextInput
          placeholder=" Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({email: text})
          }}
        />
        <TextInput
          secureTextEntry
          placeholder=" Mật khẩu"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({password: text})
          }}
          
        />

        <TextInput
          placeholder=" Số điện thoại"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({phoneNumber: text})
          }}
        />

        <TextInput
          placeholder=" Ngày sinh"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({birthday: text})
          }}
        />
        <View style={{marginLeft: 170, marginTop: 20}}>
          <RNPickerSelect
              style={{marginLeft: 200, marginTop: 15}}
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Nam', value: 'Nam' },
                  { label: 'Nữ', value: 'Nu' },
                  { label: 'Khác', value: 'Khac' },
              ]}
          />
        </View>

                
       

        <TouchableOpacity
          style={styles.button}
          onPress={() =>  {
            axios.post('http://e5bc-27-72-144-189.ngrok.io/registry', {
              fullName: this.state.fullName,
              email: this.state.email,
              phoneNumber: this.state.phoneNumber,
              password: this.state.password

            }).then(response => {           
              console.log(response.data);
              alert("Dang ki thanh cong")
              this.props.navigation.navigate('Bạn là');
            }).catch(error => {
              console.log(error);
              alert("Dang ki khong thanh cong")
            })
          }   
          }
          
        >
          
          <Text style={{ fontSize : 18 }} > 
            Tạo tài khoản
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
       
          onPress={() => navigation.dispatch(StackActions.popToTop('Start'))}
        >
          
          <Text style={{ fontSize : 18 , marginTop: 15,  }} > 
            Quay lại
          </Text>
          
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop : 0,
    backgroundColor: `#A6F3B7`
    
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 3,
    backgroundColor: `#fcffff`,
    borderRadius : 10
  },
 
  button: {
    alignItems: 'center',
    marginTop : 18,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#E48257',
  },
  

})



// const register = async (data) => {
//   const SIGNUP_ENDPOINT = `${SERVER_URL}/api/register.php`;
//   try {
//       let response = await axios({
//           method: 'post',
//           responseType: 'json',
//           url: SIGNUP_ENDPOINT,
//           data: data
//         });
//   } catch(e){
//       console.log(e);
//   }
// }