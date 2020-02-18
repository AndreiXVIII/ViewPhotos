import React from 'react'
import { View, TouchableHighlight, Image, Text, StyleSheet  } from 'react-native'

const GalleryItem = ({ items, onPress }) => {

	const image = items.urls.thumb
	const name = items.user.username
    const author = items.user.name
	const { galleryItem, itemInfoPhoto, itemInfo, itemInfoName, itemInfoAuthor } = styles

	return (
		<View style={ galleryItem }>
            <TouchableHighlight  onPress={ onPress }>
                <Image source={{ uri: image }} style={ itemInfoPhoto } resizeMode='contain' />
            </TouchableHighlight>
            <View style={ itemInfo }>
                <Text style={ itemInfoName }>{ name }</Text>
                <Text style={ itemInfoAuthor }>{ author }</Text>
            </View>
        </View>
	)
}

const styles = StyleSheet.create({
    galleryItem: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 25,
        paddingLeft: 10,
    },
    itemInfoPhoto: {
        flex: 1,
        width: 100,
        marginRight: 10,
        backgroundColor: 'lightgrey'
    },
    itemInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        flex: 2,
    },
    itemInfoName: {
        marginBottom: 10,
        fontSize: 20
    },
    itemInfoAuthor: {
        marginBottom: 20,
        fontSize: 12
    }
})

export default GalleryItem