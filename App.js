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
  
  const selectedPlaceHandler = k => {
    setState((prevState) => ({...prevState, selectedPlace: prevState.places.find(place => place.key === k)}));
  };
  const deletePlace = () => {
    setState( prevState => ({
      ...prevState,
      places: state.places.filter(place => place.key !== state.selectedPlace.key),
      selectedPlace: null,
    }));
  }
  const closeModal = () => setState(prevState => ({...prevState, selectedPlace: null}));
  const [state, setState] = useState({
    userInput: '',
    places: [],
    selectedPlace: null,
  });

  return (
    <>
    <View style={styles.container}>
      <PlaceDetail 
        state={state} 
        closeModal={closeModal} 
        deletePlace={deletePlace} 
      />
      <Text style={styles.text}>Enter Place Name</Text>
      <PlaceInput state = {state} setState = {setState} />
      <PlaceList state = {state} selectedPlaceHandler={selectedPlaceHandler} />
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
