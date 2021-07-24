import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {

    const post = props.post

    return (
        
        <View style={styles.container}> 

            <Image style={styles.image} source={{ uri: post.image }} />

            <Text style={styles.bedrooms}> {post.bed} bed(s) {post.bedroom} bedroom(s) </Text>

            <Text style={styles.description} numberOfLines={2}> {post.type}. {post.title}. </Text>

            <Text style={styles.prices}>

                <Text style={styles.oldPrice}> ${post.oldPrice} </Text>

                <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night

            </Text>

            <Text style={styles.totalPrice}>${post.totalPrice} total.</Text>

        </View>

    )

}

export default Post
