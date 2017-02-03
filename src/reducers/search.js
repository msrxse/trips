import * as actionTypes from '../constants/actionTypes';

const initialState = {
  data: ['Option 0', 'Option 1', 'Option 2'],
  optionSelected: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.DATA_SET:
      return setData(state, action);
    case actionTypes.SET_OPTION:
      return setOption(state, action);
  }
  return state;
}

function setData(state, action) {
  const { data } = action;
  return [...state, ...data];
}

function setOption(state, action) {
  const { option } = action;
  return { ...state, optionSelected: option };
}
