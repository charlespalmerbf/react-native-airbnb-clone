import React from 'react'
import { View, Text, Image } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import styles from './styles'

const Post = (props) => {

    const post = props.post

    const width = useWindowDimensions().width

    return (
        
        <View style={[styles.container, {width: width - 60}]}>

            <View style={styles.innerContainer}>

                <Image style={styles.image} source={{ uri: post.image }} />

                <View style={{marginHorizontal: 10, flex: 1}}>

                    <Text style={styles.bedrooms}> {post.bed} bed(s) {post.bedroom} bedroom(s) </Text>

                    <Text style={styles.description} numberOfLines={2}> {post.type}. {post.title}. </Text>

                    <Text style={styles.prices}>

                        <Text style={styles.newPrice}> ${post.newPrice} </Text> / night

                    </Text>

                </View>

            </View>

        </View>

    )

}

export default Post
