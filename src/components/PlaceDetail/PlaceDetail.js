import React from 'react';
import {Modal, View, Image, Button, StyleSheet, Text} from 'react-native';

const PlaceDetail = ({state, closeModal, deletePlace}) => {
  let modalContent = null;
  let selectedPlace = state.selectedPlace;
  if (selectedPlace) {
    modalContent = (
      <View>
        <Image
          style={{width: '100%', height: 300}}
          source={selectedPlace.placeImage}
        />
        <Text style={styles.placeName}>{selectedPlace.placeName}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={closeModal} // executes when back btn of android is pressed
      visible={selectedPlace !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.placeBtn}>
          <Button title="Delete" color="red" onPress={deletePlace} style={styles.placeBtn} />
        </View>
          <Button title="Close" onPress={closeModal} style={styles.placeBtn} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 300,
  },
  placeName: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  placeBtn: {
    paddingBottom: 10,
  }
});

export default PlaceDetail;
