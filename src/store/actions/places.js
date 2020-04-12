import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from './acionTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName,
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  };
};

export const selectPlace = k => {
  return {
    type: SELECT_PLACE,
    placeKey: k,
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE,
  };
};
