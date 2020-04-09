import React from 'react';
import {Modal, View, Image, Button, StyleSheet, Text} from 'react-native';

const PlaceDetail = ({selectedPlace, closeModal, deletePlace}) => {
  let modalContent = null;
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
        <View>
          <Button title="Delete" color="red" onPress={deletePlace} />
          <Button title="Close" onPress={closeModal} />
        </View>
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
});

export default PlaceDetail;
