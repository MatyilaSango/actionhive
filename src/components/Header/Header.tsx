import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function Header() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["white", "#220740", "#220740"]} style={styles.backgroundGradient}>
        <Image source={require("../../../assets/favicon.png")} width={30} height={30}/>
        <Text style={styles.headerText}>Todo App</Text>
        <Text></Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: "12%",
        borderBottomWidth: 1,
        borderBottomColor: "#00000050",
        position: "relative"      
    },
    backgroundGradient: {
      top: 0,
      left: 0,
      right: 0,
      height: "100%",
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    }
})