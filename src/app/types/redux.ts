import { Action } from 'redux';

export interface IAppAction<T = any> extends Action {
  payload?: T;
}
