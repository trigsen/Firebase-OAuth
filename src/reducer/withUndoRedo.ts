import { Action } from 'redux';
import { USER_SIGNOUT_SUCCESS } from '@/constants';
import { Reducers, ReducerWithUndoRedo } from './types';

export const withUndoRedo = <S extends Reducers, A extends Action, T>(
  reducer: (state: S, action: A) => S,
  initState: Reducers,
  section: string,
) => {
  const initialState: ReducerWithUndoRedo<Reducers> = {
    past: [],
    present: reducer(initState as S, {} as A),
    future: [],
  };

  return (state = initialState, action: A) => {
    const { past, present, future } = state;
    switch (action.type) {
      case `${section}_UNDO`: {
        if (!past.length) {
          return state;
        }
        const prevItem = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: prevItem,
          future: [present, ...future],
        };
      }
      case `${section}_REDO`: {
        if (!future.length) {
          return state;
        }
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      }
      case USER_SIGNOUT_SUCCESS: {
        return initialState;
      }
      default: {
        const value = reducer(present as S, action);
        if (value === present) {
          return state;
        }

        return {
          past: [...past, present],
          present: value,
          future: [],
        };
      }
    }
  };
};
