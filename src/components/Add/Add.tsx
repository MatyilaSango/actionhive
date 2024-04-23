import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { storeTodo } from '../../Store/features/todo/todo'
import { TNote } from '../../../types/types'
import { TodoActions } from '../../enums/enums'

export default function Add() {
    const dispatch = useDispatch()

    const handleShowTodo = () => {
        dispatch(storeTodo({active: true, note: {} as TNote, type: TodoActions.NEW_TODO}))
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
        bottom: 10,
        right: 10,
        borderRadius: 40
    },
    shadowProp: {
        shadowColor: 'green',
        shadowOpacity: 0.1,
        elevation: 5
    },
})