import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  ADD_UESR: `data/addUser`,
};

export const addUser = createAction(ActionType.ADD_UESR, (users) => {
  return {
    payload: users
  };
});
