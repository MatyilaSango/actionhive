import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/app/store'
import { storeSearch } from '../../Store/features/search/searchSlice'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Search() {
  const search = useSelector((state: RootState) => state.search.value)
  const dispatch = useDispatch()

  const handleTextInput = (e: string) => {
    dispatch(storeSearch({value: e}))
  }

  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={30} />
      <TextInput style={styles.textInput} defaultValue={search} placeholder='Search...' onChangeText={(e) => handleTextInput(e)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#00000050",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  textInput: {
    padding: 10,
    fontSize: 15,
    fontWeight: "600",
    width: "90%"
  }
})