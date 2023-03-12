import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const NewsDescription = () => {
  const data = useSelector(state => state.detail);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.desc}</Text>
      <Video source={{uri: data.video}} style={styles.video} />
    </ScrollView>
  );
};

export default NewsDescription;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
  },
  video: {
    height: height * 0.3 * 0.5,
    width: width - 24,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
