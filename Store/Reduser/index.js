const {combineReducers} = require('redux');
const {appReducer} = require('./appReduser');

const appRed = combineReducers({
  app: appReducer,
});

export default appRed;
