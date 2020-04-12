import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import placeImg from '../../assets/beach.jpg';

const PlaceInput = ({addPlaceName}) => {
  const [name, setName] = useState('');
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={name}
        placeholder="Place Name"
        onChangeText={e => setName(e)}
      />
      <Button
        title="Save"
        style={{width: '30%'}}
        onPress={() => addPlaceName(name)}
      />
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
