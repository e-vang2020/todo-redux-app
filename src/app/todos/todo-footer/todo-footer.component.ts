import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { clearCompletes } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.validFilter = 'all';
  filters: actions.validFilter[] = ['all', 'completes', 'pendings'];
  pendings: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    // this.store.select('filter').subscribe( filter => this.currentFilter = filter);
    this.store.subscribe( state => {
      this.currentFilter = state.filter;
      this.pendings = state.todos.filter( todo => !todo.isComplete ).length;
    });

  }

  changeFilter( filter: actions.validFilter ) {
    this.store.dispatch( actions.setFilter( { filter }) );
  }

  clearComplete() {

    this.store.dispatch( clearCompletes() );

  }

}
