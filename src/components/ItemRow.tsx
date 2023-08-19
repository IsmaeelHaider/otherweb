import React from 'react';
import {ListItem} from '@rneui/themed';
import {Avatar} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

export default function ItemRow({item}) {
  const navigation = useNavigation();
  return (
    <ListItem
      bottomDivider
      onPress={() => navigation.navigate('Details', {itemId: item._id})}>
      <Avatar rounded source={{uri: item.imgUrl}} />
      <ListItem.Content>
        <ListItem.Title>{item.itemName}</ListItem.Title>
        <ListItem.Subtitle>${item.unitPrice}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
}
