import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import data from './search';
import counter from './counter';
import dateInput from './dateInput';
import filters from './filters';
import rangeInput from './rangeInput';
import perfectOption from './perfectOption';
import bedroom from './bedroom';

export default combineReducers({
  data,
  counter,
  dateInput,
  filters,
  rangeInput,
  perfectOption,
  bedroom,
  routing: routerReducer,
});
