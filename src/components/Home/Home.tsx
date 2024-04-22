import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Add from '../Add/Add'
import Search from '../Search/Search'
import Note from '../Note/Note'
import { TNote } from '../../../types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/app/store'

export default function Home() {
    const notes: TNote[] = useSelector((state: RootState) => state.notes)

    return (
        <View style={styles.container}>
            <Search />
            <ScrollView>
                {notes.map((note: TNote, indx: number) => 
                    <Note 
                        key={indx}
                        id={note.id}
                        head={note.head}
                        text={note.text}
                        date={note.date}
                    />
                )}
            </ScrollView>
            <Add />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        padding: 10,
        height: "88%",
        gap: 10
    }
})