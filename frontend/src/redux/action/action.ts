import { ActionTypes } from './ActionTypes';
import { AnyAction } from 'redux';
import { UserProps, intialStoreState } from '../reducer/reducer';

export const setUser = (user: UserProps): AnyAction => {
	return {
		type: ActionTypes.SET_USER,
		payload: {
			user: user,
		},
	};
};

export const logOut = () :AnyAction => {
	return {
		type: ActionTypes.LOGOUT,
		payload: {
			state: intialStoreState
		}
	}
}