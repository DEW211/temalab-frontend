import { NEW_STATE }from '../actionTypes'

export const updateAction = content => ({
    type: NEW_STATE,
    payload: content
  });