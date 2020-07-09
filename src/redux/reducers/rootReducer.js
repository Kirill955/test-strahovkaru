// Types
import { FETCH_REPOS } from '../types';


const initialState = {
  loading: false,
  repositories: []
};

export const rootReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_REPOS:
      return { ...state, repositories: action.payload }
    default: 
      return state
  }
};