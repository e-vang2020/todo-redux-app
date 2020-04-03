import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create Todo',
  props<{ task: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; task: string }>()
);

export const deleteAction = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All Todo',
  props<{ isComplete: boolean }>()
);

export const clearCompletes = createAction(
  '[TODO] Clear Completes Todo'
);
