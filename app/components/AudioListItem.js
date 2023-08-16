import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AudioListItem() {
  return (
    <View styles={styles.container}>
      <View styles={styles.container.leftContainer}>
        <View styles={styles.thumbnail}>
            <Text styles={styles.thumbnailText}>A</Text>
        </View>
        <View styles={styles.titleContainer}>
            <Text styles={styles.title}>Title</Text>
            </View>
      </View>
      <View styles={styles.rightContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    leftContainer:{

    },
    thumbnail:{

    }
})