import {createReducer} from '@reduxjs/toolkit';
import {addUser} from '../actions';

const initialState = {
  userInfo: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action) => {
      state.userInfo = action.payload;
    });
});

export {data};
