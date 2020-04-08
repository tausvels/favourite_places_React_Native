/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = ({places, deletePlace}) => {
  // const placesOutput = places.map((place, i) => (
  //   <ListItem key={i} place={place} onPress={() => deletePlace(i)} />
  // ));
  return (
    <FlatList
      style = {styles.listContainer}
      data = {places} // should be an array of objects
      renderItem = { (info) => (
        <ListItem
          placeName={info.item.placeName}
          placeImage={info.item.placeImage}
          onPress = {() => deletePlace(info.item.key) }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {width: '100%'},
});

export default PlaceList;
