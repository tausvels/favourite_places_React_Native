import React from 'react';
import {
  Modal,
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <TouchableOpacity onPress={deletePlace}>
          <View style={styles.placeBtn}>
            <Icon size={30} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
});

export default PlaceDetail;
