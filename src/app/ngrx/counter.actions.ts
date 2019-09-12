import { createAction , props} from '@ngrx/store';

let initialId = 0;

export const AddCounter = createAction('[Counter Component] AddCounter',
    (id = ++initialId, value = 0) => ({id, value}),
);
export const IncrementCounter = createAction('[Counter Component] IncrementCounter',
props<{ id: any }>());

export const DeleteCounter = createAction('[Counter Component] DeleteCounter',
props<{id:any}>());

export const ResetCounters = createAction('[Counter Component] ResetCounters');
