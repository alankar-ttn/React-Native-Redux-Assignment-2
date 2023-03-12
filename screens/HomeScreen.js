import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import NewsList from '../components/NewsList'
import NewsDescription from '../components/NewsDescription'

const { height, width } = Dimensions.get("window")

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.newsDesc}>
            <NewsDescription />
        </View>
        <View style={styles.newsList}>
            <NewsList />
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    newsDesc: {
        height: height * 0.3,
        width: width,
    },
    newsList: {
        height: height * 0.7,
        width: width,
    }
})