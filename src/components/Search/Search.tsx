import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/app/store'

export default function Search() {
  const search = useSelector((state: RootState) => state.search.value)

  const handleTextInput = (e: string) => {

  }

  return (
    <View style={styles.container}>
      <TextInput value={search} style={styles.textInput} placeholder='Search...' onChangeText={(e) => handleTextInput(e)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#00000050",
  },
  textInput: {
    padding: 10,
    fontSize: 15
  }
})