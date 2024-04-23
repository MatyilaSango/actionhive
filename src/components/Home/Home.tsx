import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Add from '../Add/Add'
import Search from '../Search/Search'
import Note from '../Note/Note'
import { TNote } from '../../../types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/app/store'
import Todo from '../Todo/Todo'

export default function Home() {
    const search = useSelector((state: RootState) => state.search.value)
    const notes: TNote[] = useSelector((state: RootState) => state.notes).filter(note => note.head.includes(search))
    const todo = useSelector((state: RootState) => state.todo)

    return (
        <View style={styles.container}>
            <Search />
            <ScrollView>
                <View style={styles.scrollWivew}>
                    {notes.map((note: TNote, indx: number) => 
                        <Note 
                            key={indx}
                            id={note.id}
                            head={note.head}
                            text={note.text}
                            date={note.date}
                        />
                    )}
                </View>
            </ScrollView>
            <Add />
            {todo.active && <Todo />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        padding: 10,
        height: "88%",
        gap: 10,
        backgroundColor: "#220740"
    },
    scrollWivew: {
        gap: 10
    }
})