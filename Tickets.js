import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import globalTickets from './TicketsDB';

const Tickets = ({navigation}) => {
  const ticketItem = ({item}) => {
    return (
      <View style={styles.tickets}>
        <View>
          <Image style={styles.img} source={item.image} />
        </View>
        <View>
          <Text style={styles.ticketTitle}>{item.event}</Text>
          <Text style={styles.ticketShortDesc}>{item.description}</Text>
          <Text
            style={styles.ticketDesc}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          <Text style={styles.ticketShortDesc}>Price: {item.price}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Purchase', {ticketId: item.eventId});
            }}
            style={styles.ticketBtn}>
            <Text style={styles.ticketBtn}>Get Tickets</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={globalTickets}
        renderItem={ticketItem}
        keyExtractor={item => item.eventId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  tickets: {
    flexDirection: 'column',
  },
  img: {
    height: 180,
    width: '100%',
  },
  ticketTitle: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ticketShortDesc: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
  },
  ticketDesc: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 15,
  },
  ticketBtn: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 5,
    textTransform: 'uppercase',
  },
});

export default Tickets;
