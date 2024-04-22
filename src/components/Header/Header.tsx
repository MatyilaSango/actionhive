import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/favicon.png")} width={30} height={30}/>
      <Text style={styles.headerText}>Todo App</Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: "12%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: "#00000050",
        padding: 10
        
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    }
})