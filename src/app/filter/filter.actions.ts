import { createAction, props } from '@ngrx/store';

export type validFilter = 'all' | 'completes' | 'pendings';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: validFilter }>()
);
