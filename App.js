import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import PlaceList from './src/components/PlaceList/PlaceList';

// ---- import actions from the store folder ------------------- //
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
} from './src/store/actions';

const App = props => {
  /*
  const [state, setState] = useState({
    userInput: '',
    places: [],
    selectedPlace: null,
  });
  */

  const selectedPlaceHandler = k => {
    // setState(prevState => ({
    //   ...prevState,
    //   selectedPlace: prevState.places.find(place => place.key === k),
    // }));
    props.onSelectPlace(k);
  };
  const addPlaceName = name => {
    props.onAddPlace(name);
  };
  const deletePlaces = () => {
    // setState(prevState => ({
    //   ...prevState,
    //   places: state.places.filter(
    //     place => place.key !== state.selectedPlace.key,
    //   ),
    //   selectedPlace: null,
    // }));
    props.onDeletePlace();
  };
  const closeModal = () => {
    // setState(prevState => ({...prevState, selectedPlace: null}));
    props.onDeselectPlace();
  };
  return (
    <>
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={props.selectedPlace}
          closeModal={closeModal}
          deletePlace={deletePlaces}
        />
        <Text style={styles.text}>Enter Place Name</Text>
        <PlaceInput addPlaceName={addPlaceName} />
        <PlaceList
          places={props.places}
          selectedPlaceHandler={selectedPlaceHandler}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    padding: 10,
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: placeKey => dispatch(selectPlace(placeKey)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App); // app is being used as the arg of the return function from connect()
