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
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

const App = () =>  {
  const [userInput, setUserInput] = useState('');
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  
  const selectedPlaceHandler = k => {
    setSelectedPlace(places.find(place => place.key === k));
  };
  const deletePlace = () => {
    setPlaces((prevState) => prevState.filter((place) => place.key !== selectedPlace.key))
    return setSelectedPlace(null);
  };
  const closeModal = () => setSelectedPlace(null);

  return (
    <>
    <View style={styles.container}>
      <PlaceDetail 
        selectedPlace={selectedPlace} 
        closeModal={closeModal} 
        deletePlace={deletePlace} 
      />
      <Text style={styles.text}>Enter Place Name</Text>
      <PlaceInput 
        userInput = {userInput} 
        setUserInput = {setUserInput}
        setPlaces = {setPlaces}
        places = {places} 
      />
      <PlaceList places = {places} deletePlace = {deletePlace} selectedPlaceHandler={selectedPlaceHandler} />
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
