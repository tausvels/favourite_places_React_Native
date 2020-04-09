import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import placeImg from '../../assets/beach.jpg';

const PlaceInput = ({userInput, setUserInput, setPlaces, places}) => {
  const savePlace = () => {
    if (!userInput) {
      return;
    }
    setPlaces(() => [
      ...places,
      {
        key: Math.round(Math.random() * 20),
        placeName: userInput,
        placeImage: {uri: 'https://picsum.photos/200/300'},
      },
    ]);
    // setPlaces(prevState => [
    //   ...prevState,
    //   {key: Math.random(), placeName: userInput},
    // ]);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={userInput}
        placeholder="Place Name"
        onChangeText={e => setUserInput(e)}
      />
      <Button title="Save" style={{width: '30%'}} onPress={savePlace} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textInput: {width: '70%', borderColor: 'black', borderBottomWidth: 1},
});

export default PlaceInput;
