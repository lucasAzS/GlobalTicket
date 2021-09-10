import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';

const News = () => {
  const [isLoaded, setDataLoaded] = React.useState(true);
  const [storyData, setStoryData] = React.useState();

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos ',
      );
      const stories = await response.json();
      setStoryData(stories);
      setDataLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  console.log(storyData);

  const newsItem = ({item}) => {
    return (
      <View style={styles.storyList}>
        <Image style={styles.thumb} source={{uri: item.url}} />
        <Text style={styles.storyText}>{item.title}</Text>
        <Text style={styles.storyText}>{item.url}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoaded ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={storyData}
          renderItem={newsItem}
          keyExtractor={item => item.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  storyList: {
    paddingBottom: 20,
  },
  thumb: {
    width: '100%',
    height: 100,
  },
  storyText: {
    padding: 10,
  },
});

export default News;
