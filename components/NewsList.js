import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getChannelDetail} from '../redux/actions';

const NewsList = () => {
  const channels = useSelector(state => state.news);
  const dispatch = useDispatch();

  const ChannelItem = ({name, id}) => {
    return (
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => dispatch(getChannelDetail({id: id}))}>
        <Text style={styles.btnText}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={channels}
      keyExtractor={item => item.meta.id}
      renderItem={({item}) => (
        <ChannelItem name={item.meta.title} id={item.meta.id} />
      )}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({
  btnContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#0066b4',
    padding: 8,
    borderRadius: 12,
  },
  btnText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
