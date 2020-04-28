import { AnyAction } from 'redux';
import { ActionTypes, Role } from './../action/ActionTypes';

export interface UserProps {
	userId: number;
	role: Role;
}

export interface AppState {
	user: UserProps;
}

const initialState: AppState = {
	user: {
		userId: -1,
		role: Role.UNDEFINED,
	},
};

export const AppReducer = (
	state = initialState,
	action: AnyAction
): AppState => {
	switch (action.type) {
		case ActionTypes.SET_USER: {
			return {
				...state,
				user: action.payload.user,
			};
		}
		default:
			return state;
	}
};
