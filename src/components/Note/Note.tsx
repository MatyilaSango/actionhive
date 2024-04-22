import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TNote } from '../../../types/types'
import Ionicons from "@expo/vector-icons/Ionicons"

export default function Note({id, head, text, date}: TNote) {
  return (
    <View style={styles.container}>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.headView}>
        <Text></Text>
        <Text style={styles.headText}>{head}</Text>
        <Ionicons name="pencil" size={30} />
      </View>
      <View style={styles.bodyView}>
        <Text style={styles.bodyText}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#00000030",
        borderRadius: 10
    },
    dateView: {
        borderBottomWidth: 1,
        borderBottomColor: "#00000030",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 10
    },
    dateText: {
        fontSize: 12
    },
    headView: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    bodyView: {
        padding: 10,
        height: 200,
        overflow: "hidden",
    },
    bodyText: {
        fontSize: 13,
    }
})