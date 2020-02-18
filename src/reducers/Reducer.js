import { getPhotosThunk } from '../actions/Action'

const initialState = {
	data: []
}

const reducer = (state = initialState, action) => {
    
	switch (action.type) {
	    case 'SEARCH_PHOTOS':
	     	return {
	        	...state,
	        	data: action.payload
	      	}
	    default:
	    	return state
	}
}

export default reducer