import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tickets')}
        style={styles.btn}>
        <Text style={styles.btnText}>Events</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Contact')}
        style={styles.btn}>
        <Text style={styles.btnText}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('News')}
        style={styles.btn}>
        <Text style={styles.btnText}>News</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
  },
  btn: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  btnText: {
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Menu;
