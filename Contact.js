import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Alert} from 'react-native';

const Contact = ({navigation}) => {
  const [formName, setFormName] = useState('Enter name');
  const [formEmail, setFormEmail] = useState('Enter email');
  const [formNumber, setFormNumber] = useState('Enter number');
  const [formMessage, setFormMessage] = useState('Enter message');

  const handleSubmit = () => {
    if (!formName || !formEmail || !formNumber || !formMessage) {
      Alert.alert('Please fill all fields');
      return;
    }
    Alert.alert(`Thank you for ${formName}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.input}
        value={formName}
        onChangeText={setFormName}
        autoCapitalize="words"
        selectTextOnFocus
      />

      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.input}
        value={formEmail}
        onChangeText={setFormEmail}
        autoCapitalize="none"
        selectTextOnFocus
      />

      <Text style={styles.labels}>Number: </Text>
      <TextInput
        style={styles.input}
        value={formNumber}
        onChangeText={setFormNumber}
        selectTextOnFocus
      />

      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.inputMulti}
        value={formMessage}
        onChangeText={setFormMessage}
        multiline
        numberOfLines={3}
        selectTextOnFocus
      />

      <Button title="Contact Us" color="#708090" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '80%',
    paddingBottom: 15,
  },
  inputMulti: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '90%',
    height: 120,
    marginBottom: 50,
  },
  labels: {
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Contact;
