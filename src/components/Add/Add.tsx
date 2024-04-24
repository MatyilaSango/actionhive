import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { storeTodo } from '../../Store/features/todo/todo'
import { TodoActions } from '../../enums/enums'
import { Button, Icon } from '@rneui/themed'
import { TNote } from '../Note/Note'

export default function Add() {
    const dispatch = useDispatch()

    const handleShowTodo = () => {
        dispatch(storeTodo({active: true, note: {} as TNote, type: TodoActions.NEW_TODO}))
    }

    return (
        <View style={[styles.constainer, styles.shadowProp]}>
            <Button size='md' radius={25} onPress={() => handleShowTodo()}>
                <Icon size={50} name="add" />
            </Button>
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