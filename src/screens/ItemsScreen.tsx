import React from 'react';
import {FlatList} from 'react-native';
import ItemRow from '../components/ItemRow';
import {useSelector} from 'react-redux';

const ItemsScreen = () => {
  const data = useSelector(state => state.items.value);
  return (
    <FlatList data={data} renderItem={({item}) => <ItemRow item={item} />} />
  );
};

export default ItemsScreen;
