import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Menu from './Menu';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globoLogo}
        source={require('./images/_Export_globoticket-bug-black.png')}
      />
      <Text style={styles.title}>Welcome to GlobalTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <Image style={styles.heroImage} source={require('./images/boxing.jpg')} />
      <View style={styles.textContainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>

      <View style={styles.menu}>
        <Menu />
      </View>
    </View>
  );
};

const introText =
  'Are you ready for the best events? Whether you are into sports, music, or the most amazing seminars we have got you covered. Get ready to purchase great tickets at the best prices. Events are in-person and virtual.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
  },
  textContainer: {
    padding: 20,
  },
  globoLogo: {
    height: 100,
    width: 150,
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
  },
  heroImage: {
    height: 170,
    width: '100%',
  },
  menu: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Home;
