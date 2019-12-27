import * as types from "@types";

export const initialState = {
	data: [],
	isLoading: true,
};

/**
 * @function userReducer
 * @param {object} state - an object containing data and isLoading state.
 * @param {object} action - type and payload to be reduced.
 * @returns {object} - USERS state.
 */
const memberReducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case types.USERS_FETCH: {
			return initialState;
		}
		case types.USERS_SET_DATA: {
			return {
				...state,
				data: payload.users,
				isLoading: false,
			};
		}
		default: {
			return state;
		}
	}
};

export default memberReducer;
