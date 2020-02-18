export const getPhotosThunk = (data) => async (dispatch) => { 
	const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
	const data = await fetch(url).then(response => response.json())
	
	dispatch({ type: 'SEARCH_PHOTOS', payload: data })
}