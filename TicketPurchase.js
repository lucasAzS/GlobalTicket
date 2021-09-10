import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import globoTickets from './TicketsDB';

export default function TicketPurchase({route, navigation}) {
  const [tickets, setTickets] = useState('1');
  const {ticketId} = route.params;

  const selectedEvent = globoTickets.find(event => event.eventId === ticketId);

  const handlePurchase = () => {
    var price = selectedEvent.price * tickets;
    Alert.alert(`Your cost is ${price}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedEvent.event}</Text>
      <Image style={styles.ticketImage} source={selectedEvent.image} />
      <Text style={styles.shortDescription}>
        {selectedEvent.shortDescription}
      </Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
      <View style={styles.purchaseRow}>
        <Text style={styles.shortDescription}>Quantity :</Text>
        <TextInput
          style={styles.quantityInput}
          onChangeText={setTickets}
          value={tickets}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.price}>
        Total Price: {selectedEvent.price * tickets}
      </Text>
      <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
        <Text style={styles.btnText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
  },
  purchaseRow: {
    flexDirection: 'row',
  },
  purchaseButton: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '60%',
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
    paddingBottom: 10,
  },
  ticketImage: {
    width: '100%',
    height: 180,
  },
  shortDescription: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    textAlignVertical: 'center',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-Light',
    padding: 10,
  },
  price: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    paddingBottom: 10,
  },
  btnText: {
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
    padding: 5,
  },
  quantityInput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    height: 38,
    width: 40,
    marginLeft: 25,
  },
});
