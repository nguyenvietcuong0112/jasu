import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Helloooo'
  };
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate('Tìm lớp') }>
            <View style={styles.categoryIcon1}>
            <AntDesign name= "search1" size={30} color="#000000" />
            </View>
  
            <Text style={styles.categoryBtnTxt}>Tìm lớp</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate('Học tập')
            }>
            <View style={styles.categoryIcon2}>
            <AntDesign name= "book" size={30} color="#000000" />
            </View>
            <Text style={styles.categoryBtnTxt}>Học tập</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.categoryBtn} 
          onPress={() => this.props.navigation.navigate('Danh sách gia sư')} >
            <View style={styles.categoryIcon3}>
              <FontAwesome5 name="clipboard-list" size={30} color="#000000"/>
            </View>
            <Text style={styles.categoryBtnTxt}>Gia sư</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.cardsWrapper}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
            }}>
              Danh sách lớp đề xuất
          </Text>
          
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
  
            </View>
            <View style={styles.cardInfo}>
  
              <Text style={styles.cardTitle}>
                Toán 12
              </Text>
              <Text style={styles.cardDetails}>
                Có thể nhận lớp
              </Text>
              <Text style={styles.cardDetails}>
                Địa chỉ:
              </Text>
              <Text style={styles.cardDetails}>
                Học phí:
              </Text>
            
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
  
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Văn 12</Text>
              
              <Text style={styles.cardDetails}>
                Có thể nhận lớp
              </Text>
              <Text style={styles.cardDetails}>
                Địa chỉ:
              </Text>
              <Text style={styles.cardDetails}>
                Học phí:
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
  
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Lý 10</Text>
              
              <Text style={styles.cardDetails}>
                Có thể nhận lớp
              </Text>
              <Text style={styles.cardDetails}>
                Địa chỉ:
              </Text>
              <Text style={styles.cardDetails}>
                Học phí:
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
  
            </View>
            <View style={styles.cardInfo}>
  
              <Text style={styles.cardTitle}>
                Toán 12
              </Text>
              <Text style={styles.cardDetails}>
                Có thể nhận lớp
              </Text>
              <Text style={styles.cardDetails}>
                Địa chỉ:
              </Text>
              <Text style={styles.cardDetails}>
                Học phí:
              </Text>
            
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
  
            </View>
            <View style={styles.cardInfo}>
  
              <Text style={styles.cardTitle}>
                Toán cao
              </Text>
              <Text style={styles.cardDetails}>
                Có thể nhận lớp
              </Text>
              <Text style={styles.cardDetails}>
                Địa chỉ:
              </Text>
              <Text style={styles.cardDetails}>
                Học phí:
              </Text>
            
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
  
            </View>
            <View style={styles.cardInfo}>
  
              <Text style={styles.cardTitle}>
                Toán 8
              </Text>
              <Text style={styles.cardDetails}>
                Có thể nhận lớp
              </Text>
              <Text style={styles.cardDetails}>
                Địa chỉ:
              </Text>
              <Text style={styles.cardDetails}>
                Học phí:
              </Text>
            
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',

  },
 
  categoryIcon1: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#CE7559' ,
    borderRadius: 50,  
  },
  categoryIcon2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#E7F688' ,
    borderRadius: 50,  
  },
  categoryIcon3: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#CD89CE' ,
    borderRadius: 50,  
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000000',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 95,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: 'green',
  },
})


