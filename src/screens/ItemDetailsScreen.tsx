import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text, Card, Avatar, Button} from '@rneui/themed';
import {setQuantity} from '../features/bucket/bucketSlice';
import {StackActions} from '@react-navigation/native';

const ItemDetailsScreen = ({navigation}) => {
  const bucketData = useSelector(state => state.bucket.value);
  const data = useSelector(state => state.items.value);

  const dispatch = useDispatch();

  const route = useRoute();
  const itemId = route.params.itemId;

  // Check if item already exists in shopping cart
  let itemDetails = {};
  if (bucketData) {
    // console.log(bucketData);
    itemDetails = bucketData.find(item => item._id === itemId);
    // console.log(itemDetails);
  }

  if (!itemDetails) {
    // If item not already in shopping cart show details
    itemDetails = data.find(item => item._id === itemId);
  }

  const [itemQuantity, setItemQuantity] = useState(itemDetails.quantity);

  const handleAddToCart = () => {
    if (itemQuantity >= 0) {
      // Logic to add to cart
      dispatch(setQuantity({...itemDetails, quantity: itemQuantity}));
      navigation.dispatch(StackActions.pop(1));
    }
  };
  return (
    <>
      <ScrollView>
        <Card containerStyle={{}} wrapperStyle={{}}>
          <Card.Title>{itemDetails.itemName}</Card.Title>
          <Card.Divider />
          <View style={styles.mainView}>
            <Avatar
              style={styles.imageBox}
              resizeMode="contain"
              source={{
                uri: itemDetails.imgUrl,
              }}
            />
            <Text style={{fontWeight: 'bold'}}>${itemDetails.unitPrice}</Text>
            <Text>{itemDetails.description}</Text>
          </View>
        </Card>
      </ScrollView>
      <View style={styles.counterButtonView}>
        <View style={styles.counterButton}>
          <Button
            title={'-'}
            onPress={() => {
              itemQuantity > 0
                ? setItemQuantity(itemQuantity - 1)
                : itemQuantity;
            }}
          />
        </View>
        <View style={styles.counterButton}>
          <Button title={itemQuantity.toString()} />
        </View>
        <View style={styles.counterButton}>
          <Button
            title={'+'}
            onPress={() => {
              setItemQuantity(itemQuantity + 1);
            }}
          />
        </View>
      </View>
      <Button title={'Add to Cart'} onPress={handleAddToCart} />
    </>
  );
};
export default ItemDetailsScreen;

const styles = StyleSheet.create({
  counterButton: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  imageBox: {
    width: '100%',
    height: 300,
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
