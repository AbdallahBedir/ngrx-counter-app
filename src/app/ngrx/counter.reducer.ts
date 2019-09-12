import { createReducer, on } from '@ngrx/store';
import { AddCounter ,IncrementCounter,DeleteCounter ,ResetCounters} from './counter.actions';

export const initialState = {
  allIds: [],
  byIds: {}
}

const _counterReducer = createReducer(initialState,
  on(AddCounter,(state,action) => {
    const { id, value } = action;
    return {
      ...state,
      allIds:[...state.allIds,id],
      byIds:{
        ...state.byIds,
        [id]:{
          value:value
        }
      }
    }
  }),
  on(IncrementCounter,(state,action) => {
    const id  = action.id;
    return {
      ...state,
      allIds:state.allIds,
      byIds:{
        ...state.byIds,
        [id]:{
          value:state.byIds[id].value +1 
        }
      }
    }
  }),
  on(DeleteCounter,(state,action) => {
    const id  = action.id;
    const newState = {...state}; // copy the current state 
    newState.allIds.splice(newState.allIds.indexOf(id),1); // remove id from allIds or `state.allIds.filter(Id => id !== Id)`
    const { [id]:value , ...others} = newState.byIds // remove id object from byIds
    return {
      ...state,
      allIds: newState.allIds,
      byIds:others
    };
  }),
  on(ResetCounters,(state,action) => {    
    const newState = {...state}; // copy the current state 
    if(newState.byIds){
      Object.keys(newState.byIds).forEach(key => {
        newState.byIds[key].value = 0
      })    
    }
    return {
      ...state,
      allIds: state.allIds,
      byIds:newState.byIds
    };
  })
  )

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}