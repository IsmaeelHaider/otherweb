import React from 'react';
import {Button, ListItem} from '@rneui/themed';
import {Avatar} from '@rneui/base';
import {StyleSheet, View} from 'react-native';
import {
  decreaseQuantity,
  increaseQuantity,
} from '../features/bucket/bucketSlice';
import {useDispatch} from 'react-redux';

export default function BucketItemRow({item}) {
  const dispatch = useDispatch();
  return (
    <ListItem bottomDivider>
      <Avatar style={styles.imageBox} rounded source={{uri: item.imgUrl}} />
      <ListItem.Content>
        <ListItem.Title style={{fontWeight: 'bold'}}>
          {item.itemName}
        </ListItem.Title>
        <ListItem.Subtitle>${item.unitPrice}</ListItem.Subtitle>
      </ListItem.Content>

      <View style={styles.counterButtonView}>
        <Button
          style={styles.counterButton}
          title={'-'}
          onPress={() => {
            dispatch(decreaseQuantity(item._id));
          }}
        />
        <Button style={styles.counterButton} title={item.quantity.toString()} />
        <Button
          style={styles.counterButton}
          title={'+'}
          onPress={() => {
            dispatch(increaseQuantity(item._id));
          }}
        />
      </View>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  counterButton: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  imageBox: {
    width: 75,
    height: 75,
  },
  mainView: {
    position: 'relative',
    alignItems: 'center',
  },
  counterButtonView: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
