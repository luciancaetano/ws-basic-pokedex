import { get } from 'lodash';
import { IAppAction } from '@types';

type TReduerTypeHandler<S, A = any> = (state: S, action: A) => S;

export default <S>(initialState: S, reducerDescriptor: Record<string, TReduerTypeHandler<S, IAppAction>>) => (state = initialState, action: IAppAction) => {
  const actionHandler = get(reducerDescriptor, action.type, null);

  if (actionHandler) {
    return actionHandler(state, action);
  }

  return state;
};
