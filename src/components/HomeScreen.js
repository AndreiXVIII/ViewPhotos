import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, StyleSheet } from 'react-native'
import { getPhotosThunk } from '../actions/Action'
import reducer from '../reducers/Reducer'
import Header from './Header'
import GalleryItem from './GalleryItem'

class HomeScreen extends Component {

    componentDidMount =  () => {
        this.props.getPhotosThunk()
    }

    render() {

        const { galleryList, navigation } = this.props
        const title = 'Photo Gallery'

        return (
            <ScrollView> 
                <Header title={ title } />               
                <View style={ styles.wrapper }>
                    <View style={ styles.galleryList }>
                        { galleryList.map((item, index) => (
                           <GalleryItem 
                                items={ item } 
                                key={ index }
                                onPress={ () => navigation.navigate('Details', { item }) }     
                            />     
                        )) }
                    </View>            
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    galleryList: {
        display: "flex",
        flexDirection: "column",
        margin: 10
    }
})

const mapStateToProps = (state) => {
    return {
        galleryList: state.data    
    }
}

export default connect(mapStateToProps, { getPhotosThunk })(HomeScreen)