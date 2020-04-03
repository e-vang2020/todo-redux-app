import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputPhysic') txtInputPhysic: ElementRef;

  chkComplete: FormControl;
  txtInput: FormControl;
  editing: boolean = false;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkComplete = new FormControl( this.todo.isComplete );
    this.txtInput = new FormControl( this.todo.task, Validators.required );

    this.chkComplete.valueChanges.subscribe( value => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) );
    });

  }


  edit() {

    this.editing = true;
    this.txtInput.setValue( this.todo.task );
    setTimeout(() => {
      this.txtInputPhysic.nativeElement.select();
    }, 1);

  }

  finishEdit() {
    this.editing = false;
    if( this.txtInput.invalid) { return; }
    if ( this.txtInput.value ===  this.todo.task) { return; }

    this.store.dispatch( 
      actions.edit({
        id: this.todo.id,
        task: this.txtInput.value
      })
    );
  }

  delete() {
    this.store.dispatch( actions.deleteAction({ id: this.todo.id}));

  }

}
