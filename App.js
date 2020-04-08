import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

const App = () =>  {
  const [userInput, setUserInput] = useState({});
  const [places, setPlaces] = useState([]);
  
  const deletePlace = (k) => {
    setPlaces((prevState) => prevState.filter((place) => place.key !== k))
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Enter Place Name</Text>
      <PlaceInput 
        userInput = {userInput} 
        setUserInput = {setUserInput}
        setPlaces = {setPlaces}
        places = {places} 
      />
      <PlaceList places = {places} deletePlace = {deletePlace} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "flex-start",
    padding: 20
  },
  text: {
    fontSize: 30, fontWeight: '700', 
    padding: 10
  },   
});

export default App;
