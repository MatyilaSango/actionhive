import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RootState } from '../../Store/app/store'
import { useDispatch, useSelector } from 'react-redux'
import IonIcons from '@expo/vector-icons/Ionicons'
import { storeTodo } from '../../Store/features/todo/todo'
import { editNote, removeNote, storeNote } from '../../Store/features/notes/notesSlice'
import { TodoActions } from "../../enums/enums"
import { LinearGradient } from 'expo-linear-gradient'
import { useToast } from 'react-native-toast-notifications'
import { Button, Card } from '@rneui/themed'
import { TNote } from '../Note/Note'

export default function Todo() {
    const todo = useSelector((state: RootState) => state.todo)
    const [newTodo, setNewTodo] = useState<TNote>(todo.type === TodoActions.EDIT_TODO ? todo.note : {} as TNote)
    const dispatch = useDispatch()
    const toast = useToast()

    const handleExitTodo = () => {
        dispatch(storeTodo({ active: false, note: {} as TNote, type: TodoActions.EXIT_TODO }))
    }

    const handleTodoSave = () => {
        switch (todo.type) {
            case TodoActions.NEW_TODO:
                if (!newTodo.head || !newTodo.text) return toast.show(`Please fill out both task and description!`)
                dispatch(storeNote({ 
                    id: new Date().toISOString(),
                    head: newTodo.head,
                    text: newTodo.text,
                    date: new Date().toDateString()
                }))
                toast.show("New task added!")
                break;

            case TodoActions.EDIT_TODO:
                dispatch(editNote({ 
                    id: todo.note.id,
                    head: newTodo.head,
                    text: newTodo.text,
                    date: new Date().toDateString()
                }))
                break;

            default:
                break;
        }
        handleExitTodo()
    }

    const handleTodoDelete = () => {
        if (todo.note.id) {
            dispatch(removeNote(todo.note.id))
            toast.show("Task deleted!")
        }
        handleExitTodo()
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={["#ffffff00", "#000000", "#ffffff00"]} style={styles.backgroundGradient}>
                <Card containerStyle={styles.card}>
                    <View style={styles.header}>
                        <Button color="transparent">
                            <IonIcons name="arrow-back-circle-outline" size={30} onPress={() => handleExitTodo()} />
                        </Button>
                    </View>
                    <Card.Title>
                        <Text style={styles.headerText}>{todo.type.toUpperCase()}</Text>
                    </Card.Title>
                    <ScrollView>
                        <View style={styles.scrollView}>
                            <View style={styles.todoItem}>
                                <Text style={styles.todoItemText}>Task name:</Text>
                                <TextInput
                                    style={styles.todoItemInput}
                                    defaultValue={todo.note.head}
                                    underlineColorAndroid="transparent"
                                    placeholder="Task name"
                                    onChangeText={(e) => { setNewTodo(prev => prev = { ...prev, head: e }) }}
                                />
                            </View>
                            <View style={styles.todoItem}>
                                <Text style={styles.todoItemText}>Description:</Text>
                                <TextInput
                                    style={styles.todoItemInput}
                                    defaultValue={todo.note.text}
                                    underlineColorAndroid="transparent"
                                    placeholder="Description"
                                    multiline={true}
                                    onChangeText={(e) => { setNewTodo(prev => prev = { ...prev, text: e }) }}
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <Card.Divider />
                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={(() => handleTodoDelete())}>
                            <Text style={styles.buttonText}>{todo.note.id ? "Delete" : "Cancel"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={(() => handleTodoSave())}>
                            <Text style={styles.buttonText} disabled={todo.note.id ? false : true}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </LinearGradient>
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
        flexDirection: "column",
        justifyContent: "center"
    },
    backgroundGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        flexDirection: "column",
        justifyContent: "center"
    },
    card: {
        maxHeight: "90%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        paddingVertical: 20,
        gap: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
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
        color: "#00000090",
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
        borderRadius: 15
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