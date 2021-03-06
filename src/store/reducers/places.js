// ---- import the action types ------------------- //
import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '../actions/acionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      if (!action.placeName) {
        alert('Enter Place Name');
        return state;
      } else {
        return {
          ...state,
          places: [
            ...state.places,
            {
              key: Math.round(Math.random() * 20),
              placeName: action.placeName,
              placeImage: {uri: 'https://picsum.photos/200/300'},
            },
          ],
        };
      }

    case DELETE_PLACE:
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
