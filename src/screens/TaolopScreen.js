import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
const Separator = () => (
    <View style={styles.separator} />
  );
const TaolopScreen = ({navigation}) => {
        return (
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="📚Môn học"
              />
              <View style={styles.fixToText}>
                <TextInput
                  style={styles.textInput2}
                  autoCapitalize="none"
                  placeholder="🧑‍🏫Lớp"
                />
              
                <TextInput
                 style={styles.textInput2}
                 autoCapitalize="none"
                  placeholder="⏰Thời gian"
                />
              </View>
              
              <View style={styles.fixToText}>
              <TextInput
                placeholder="👦 Nam/Nữ"
                autoCapitalize="none"
                style={styles.textInput2}
              />
              
              <TextInput 
                style={styles.textInput2}
                autoCapitalize="none"
                placeholder="😊Số lượng"
              />
              </View>
              
              
              <View style={styles.fixToText}> 
              <Text style={{ fontSize : 16, color : 'gray', marginTop: 10, marginLeft: -40 }}>Hình thức :     </Text>
              <TouchableOpacity
                style={styles.button3}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text style={{ fontSize : 16, marginTop: -1.5 }} > 
                  Online
                </Text>
              </TouchableOpacity>  
              <TouchableOpacity
                style={styles.button4}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text style={{ fontSize : 16, marginTop: -1.5}} > 
                  Offline
                </Text>
              </TouchableOpacity> 
              </View> 
              <TextInput 
                style={styles.textInput}
                placeholder="💵Học phí"
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="📝Lưu ý"
                />
                <Separator />
              <View style={styles.fixToText}> 
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Trang chủ')}
              >
                <Text style={{ fontSize : 18 }} > 
                  Tạo lớp
                </Text>
              </TouchableOpacity>  
              <TouchableOpacity
                style={styles.button2}
                onPress={() => this.props.navigation.navigate('Trang chủ')}
              >
                <Text style={{ fontSize : 18 }} > 
                  Hủy
                </Text>
              </TouchableOpacity> 
              </View>  
            </View>
            
          )
};

export default TaolopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#ffffff`
  },
  
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor : '#fcffff',
    borderRadius : 10
  },
  textInput2: {
    height: 40,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor : '#fcffff',
    borderRadius : 10
  },
  button: {
    marginTop: 1,
    height: 40,
    
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#B4F2F6',
    padding :7,
    borderRadius: 10,
  },
  button2: {
    marginTop: 1,
    height: 40,
    left: 20,
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#F6C8B4',
    padding :7,
    borderRadius: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button3: {
    marginTop: 5,
    height: 30, 
    width: '25%',
    alignItems: 'center',
    backgroundColor: '#B4F2F6',
    padding :7,
    borderRadius: 15,
    marginLeft: 0

  },
  button4: {
    marginTop: 5,
    height: 30,
    left: 20,
    width: '25%',
    alignItems: 'center',
    backgroundColor: '#F6C8B4',
    padding :7,
    borderRadius: 15,
  },
})