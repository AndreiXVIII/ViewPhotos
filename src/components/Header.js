import React from 'react'
import { View, TouchableHighlight, Image, Text, StyleSheet } from 'react-native'

const Header = ({ title, onPress, arrowBack }) => {

	return (
		<View style={ styles.head }>
			<TouchableHighlight  onPress={ onPress }>
				<Image 
					source={ require('../img/leftArrow.png') } 
					style={ styles.goBack, { display: arrowBack ? 'flex' : 'none'  } } 
				/>
			</TouchableHighlight>
			<Text style={ styles.title }>{ title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	head: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 70,
		paddingLeft: 15,
		backgroundColor: '#324291'
	},
	goBack: {
		width: 20,
		height: 20
	},
	title: {
		fontSize: 20,
		color: '#fff',
		marginLeft: 15 
	}
})

export default Header