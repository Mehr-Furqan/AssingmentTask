import {AllGame} from '../Types';

const initialState = {
  AllGames: [],
};
export const appReducer = (state = initialState, action) => {
  console.log('as', action.type);
  switch (action.type) {
    case AllGame:
      return {
        ...state,
        AllGames: action.payload,
      };
    default:
      return state;
  }
};
