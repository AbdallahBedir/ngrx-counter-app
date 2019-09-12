import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddCounter , IncrementCounter , DeleteCounter , ResetCounters} from '../../ngrx/counter.actions';
import { getCounters, getActiveCounters } from '../../ngrx/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  counters$: Observable<any>;
  activeCounters$: Observable<number>;
 
  constructor(private store: Store<{ counters: any }>) {
    this.counters$ = store.pipe(select(getCounters))
    this.activeCounters$ = store.pipe(select(getActiveCounters))
  }
  
  addCounter(){
    this.store.dispatch(AddCounter())
  }

  incrementCounter(counterId) {
    this.store.dispatch(IncrementCounter({id:counterId}))
  }
 
  deleteCounter(counterId) {
    this.store.dispatch(DeleteCounter({id:counterId}));
  }

  resetCounters(){
    this.store.dispatch(ResetCounters())
  }

  ngOnInit() {
  }

}
