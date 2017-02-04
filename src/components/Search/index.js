import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Search from './presenter';

function mapStateToProps(state) {
  const data = state.data;
  const counter = state.counter;
  const dateInput = state.dateInput;
  const rangeInput = state.rangeInput;

  return {
    data,
    counter,
    dateInput,
    rangeInput,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(actions.setOption, dispatch),
    increment: bindActionCreators(actions.increment, dispatch),
    decrement: bindActionCreators(actions.decrement, dispatch),
    setDates: bindActionCreators(actions.setDates, dispatch),
    setRange: bindActionCreators(actions.setRange, dispatch),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
