
import { fromJS } from 'immutable';
import citySelectReducer from '../reducer';

describe('citySelectReducer', () => {
  it('returns the initial state', () => {
    expect(citySelectReducer(undefined, {})).toEqual(fromJS({}));
  });
});
