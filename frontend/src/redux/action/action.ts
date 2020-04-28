import { ActionTypes } from './ActionTypes';
import { AnyAction } from 'redux';
import { UserProps } from '../reducer/reducer';

export const setUser = (user: UserProps): AnyAction => {
	return {
		type: ActionTypes.SET_USER,
		payload: {
			user: user,
		},
	};
};
