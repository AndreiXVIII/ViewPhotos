import React, { Component } from 'react'
import { ScrollView, View, Image } from 'react-native'
import Header from './Header'
import ImageBig from './ImageBig'

class DetailsScreen extends Component {
	 
	render() {

		const { navigation } = this.props
		const fullSize = this.props.route.params.item.urls.regular
		const title = this.props.route.params.item.user.name

		return (
			<ScrollView>
				<Header title={ title } onPress={ () => navigation.goBack() } arrowBack/>
				<View>
					<ImageBig data={ fullSize }/>
				</View>
			</ScrollView>
		)
	}
}

export default DetailsScreen