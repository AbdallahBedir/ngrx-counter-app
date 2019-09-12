
import { createSelector } from '@ngrx/store';

export const getCountersState = state => state.counters;

export const getCountersList = createSelector(
    getCountersState,
   counters => counters.allIds || []
);

export const getCounterById = (store, id) =>
    getCountersState(store) ? { ...getCountersState(store).byIds[id], id } : {};

export const getCounters = store =>
    getCountersList(store).map(id => getCounterById(store, id));


export const getActiveCounters = store => {    
    let numOfActive = 0;
    if(getCountersState(store)){
        Object.keys(getCountersState(store).byIds).forEach(key => {
            if(getCountersState(store).byIds[key]){
                numOfActive = getCountersState(store).byIds[key].value > 0 ? ++numOfActive : numOfActive;
            }
        })
    }
    return numOfActive;
} 
