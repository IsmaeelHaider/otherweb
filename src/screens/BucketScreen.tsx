import React from 'react';

import {FlatList, SafeAreaView, View} from 'react-native';
import BucketItemRow from '../components/BucketItemRow';
import {useSelector} from 'react-redux';
import {Text} from '@rneui/themed';

const BucketScreen = () => {
  const data = useSelector(state => state.bucket.value);
  let totalAmount = 0;
  data.map(item => {
    totalAmount += item.unitPrice * item.quantity;
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => <BucketItemRow item={item} />}
      />
      <View
        style={{
          height: 50,
          backgroundColor: '#5f9ea0',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#ffffff',
          }}>
          Total: ${totalAmount}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BucketScreen;
