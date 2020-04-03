import { createReducer, on } from '@ngrx/store';
import { create, toggle, edit, deleteAction, toggleAll, clearCompletes } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('learn ngrx'), new Todo('learn java')];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { task }) => [...state, new Todo(task)]),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, task }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          task: task
        };
      } else {
        return todo;
      }
    });
  }),
  on(deleteAction, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, { isComplete }) =>
    state.map(todo => {
      return {
        ...todo,
        isComplete: isComplete
      }
    })
  ),
  on(clearCompletes, state => state.filter( todo => !todo.isComplete ) ),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
