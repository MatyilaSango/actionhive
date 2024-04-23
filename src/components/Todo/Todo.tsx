import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootState } from '../../Store/app/store'
import { useDispatch, useSelector } from 'react-redux'
import IonIcons from '@expo/vector-icons/Ionicons'
import { storeTodo } from '../../Store/features/todo/todo'
import { TNote } from '../../../types/types'
import { removeNote } from '../../Store/features/notes/notesSlice'

export default function Todo() {
    const todo = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()

    const handleExitTodo = () => {
        dispatch(storeTodo({ active: false, note: {} as TNote, type: "" }))
    }

    const handleTodoSave = () => {
        // To do
    }

    const handleTodoDelete = () => {
        if(todo.note.head) dispatch(removeNote(todo.note.head))
        handleExitTodo()
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{todo.type.toUpperCase()}</Text>
                    <IonIcons name="exit" size={30} onPress={() => handleExitTodo()} />
                </View>
                <ScrollView>
                    <View style={styles.scrollView}>
                        <View style={styles.todoItem}>
                            <Text style={styles.todoItemText}>Name:</Text>
                            <TextInput 
                                style={styles.todoItemInput} 
                                defaultValue={todo.note.head} 
                                placeholder="Name" 
                            />
                        </View>
                        <View style={styles.todoItem}>
                            <Text style={styles.todoItemText}>Description:</Text>
                            <TextInput 
                                style={styles.todoItemInput} 
                                defaultValue={todo.note.text} 
                                placeholder="Description"
                                multiline={true}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={(() => handleTodoDelete())}>
                        <Text style={styles.buttonText}>{todo.note.head ? "Delete" : "Cancel"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={(() => handleTodoSave())}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
        backgroundColor: "#00000050",
        padding: 10,
        flexDirection: "column",
        justifyContent: "center"
    },
    card: {
        height: "90%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        paddingVertical: 20,
        gap: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#00000030",
    },
    headerText: {
        fontSize: 15,
        fontWeight: "600"
    },
    scrollView: {
        flexDirection: "column",
        gap: 20
    },
    todoItem: {
        flexDirection: "column",
        gap: 5
    },
    todoItemText: {
        fontWeight: "600"
    },
    todoItemInput: {
        padding: 5,
        color: "#00000070",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#00000030"
    },
    buttonsView: {
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 10
    },
    button: {
        width: "50%",
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 15,
        color: "#fff"
    },
    deleteButton: {
        backgroundColor: "red"
    },
    saveButton: {
        backgroundColor: "blue"
    }

})