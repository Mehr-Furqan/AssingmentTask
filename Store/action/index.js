import axios from 'axios';
import {AllGame} from '../Types';
const Games = res => ({
  type: AllGame,
  payload: res,
});
export const GetGamesList = (cbSucess, cbFailure) => {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://www.cheapshark.com/api/1.0/games?title=batman',
      );

      cbSucess(res?.data);
      dispatch(Games(res?.data));
    } catch (err) {
      cbFailure(err);
    }
  };
};
