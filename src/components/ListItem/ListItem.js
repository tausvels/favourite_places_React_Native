import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = ({placeName, placeImage, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ListItem}>
        <Image style={styles.placeImage} source={placeImage} />
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
  },
  placeImage: {
    width: 45,
    height: 45,
    marginRight: 8,
  },
})

export default ListItem;
