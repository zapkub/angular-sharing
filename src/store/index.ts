import {NgModule} from '@angular/core';
import {createAction, createReducer, on, props, StoreModule} from '@ngrx/store';


// Concat Feature
export const ConcatActionBegin = createAction('[concat] begin', props<{ firstValue: string, secondValue: string }>());

interface ConcatState {
  result?: string;
}

const concatReducer = createReducer<ConcatState>(
  {
    result: ''
  },

  on(ConcatActionBegin, (prevState, action): ConcatState => {
    console.log(action);
    return {
      result: action.firstValue.concat(action.secondValue),
    };
  })
);


// Root
export interface RootState {
  concat: ConcatState;
}

@NgModule({
  imports: [
    StoreModule.forRoot<RootState>({
      concat: concatReducer,
    }, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      },
    }),
  ]
})
export class RootStoreModule {
}

