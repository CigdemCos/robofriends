import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch={
	searchField: ''
}


//searchRobots is a pure func. (it is a reducer)
export const searchRobots = (state=initialStateSearch, action={}) =>{
	//console.log(action.type)
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
		 return Object.assign({}, state, {searchField:action.payload})
		 // return {...state, searchField:action.payload }
		default:
		 return state;

	}
}
//we're returning new state with Object.assign that's going to have everything in the state plus
//we're gonna update whatever searchField property, new searchField property we have with action.payload
//this is simply saying we received an action called CHANGE_SEARCH_FIELD, 
//if that's the case then return the new state with action.payload 
//whatever the user has entered.
// and always remember that a pure func(like searchRobots) always needs to return smt.

//----------
const initialStateRobots={
	isPending: false,
	robots: [],
	error: ''
}
//the new reducer is going to worry about the requestRobots
export const requestRobots = (state=initialStateRobots, action={}) =>{
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
		 return Object.assign({}, state,{isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
		 return Object.assign({}, state, {robots: action.payload, isPending: false})
		case REQUEST_ROBOTS_FAILED:
		 return Object.assign({}, state, {error: action.payload, isPending:false})
		default:
		 return state;
	}

}
