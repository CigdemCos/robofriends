import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';


//now we can use it in type instead of the text.This is returning an object
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text //payload is we're sending whatever data is needed to go on to the reducer
	//which is just going to be whatever the user enters.
})

//we wanna dispatch the pending action, also there is no real payload
//And then we need to do fetch call
//data means user
	export const requestRobots = () => (dispatch) => { //we created a higher order func.: a func that returns a func.
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data }))
     .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }))
}