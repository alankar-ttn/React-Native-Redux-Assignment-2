import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const NewsDescription = () => {
  const data = useSelector(state => state.detail);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [data]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color="#0066b4" />
      ) : (
        <>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.desc}</Text>
          <Video source={{uri: data.video}} style={styles.video} />
        </>
      )}
    </ScrollView>
  );
};

export default NewsDescription;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
  },
  desc: {
    fontSize: 16,
    color: '#666',
  },
  video: {
    height: height * 0.3 * 0.8,
    width: width - 24,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
