// ---- import the action types ------------------- //
import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '../actions/acionTypes';

const uuid = require('react-native-uuid');
const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: uuid.v4(), // Math.round(Math.random() * 20)
            placeName: action.placeName,
            placeImage: {uri: 'https://picsum.photos/200/300'},
          },
        ],
      };

    case DESELECT_PLACE:
      return {
        ...state,
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key,
        ),
        selectedPlace: null,
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(
          place => place.key === action.placeKey,
        ),
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };
    default:
      return state;
  }
};

export default reducer;
