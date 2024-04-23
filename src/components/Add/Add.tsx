import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { storeTodo } from '../../Store/features/todo/todo'
import { TNote } from '../../../types/types'

export default function Add() {
    const dispatch = useDispatch()

    const handleShowTodo = () => {
        dispatch(storeTodo({active: true, note: {} as TNote, type: "New Todo"}))
    }

    return (
        <View style={[styles.constainer, styles.shadowProp]}>
            <Ionicons name="add-circle-sharp" size={80} color="green" onPress={() => handleShowTodo()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        position: "absolute",
        bottom: 5,
        right: 5,
        borderRadius: 40
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 10
    },
})