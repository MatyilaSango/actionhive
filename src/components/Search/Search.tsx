import { StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/app/store'
import { storeSearch } from '../../Store/features/search/searchSlice'
import { SearchBar } from '@rneui/themed'

export default function Search() {
  const search = useSelector((state: RootState) => state.search.value)
  const dispatch = useDispatch()

  const handleTextInput = (e: string) => {
    dispatch(storeSearch({ value: e }))
  }

  return (
    <SearchBar
      containerStyle={{ backgroundColor: "transparent" }}
      round={true}
      lightTheme={true}
      style={styles.searchBar}
      value={search}
      placeholder='Search...'
      onChangeText={(e) => handleTextInput(e)}
    />
  )
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 18,
    fontWeight: "600",
    width: "90%",
    color: "#00000099"
  }
})