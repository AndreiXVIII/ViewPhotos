import React from 'react'
import { Dimensions, View, Image, StyleSheet } from 'react-native'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const ImageBig = ({ data }) => {

	const imageFull = data
	const { background, fullScreenPhoto } = styles

	return (
		<View style={ background }>
			<Image source={{ uri: imageFull }} style={ fullScreenPhoto }  resizeMode='contain'/>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'black',
	},
	fullScreenPhoto: {
		width: widthScreen,
		height: heightScreen
	}
})

export default ImageBig