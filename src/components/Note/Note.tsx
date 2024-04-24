import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { storeTodo } from '../../Store/features/todo/todo'
import { useDispatch } from 'react-redux'
import { TodoActions } from '../../enums/enums'
import { Button, Card, Icon } from '@rneui/themed'

export type TNote = {
  id: string,
  head: string,
  date: string,
  text: string,
}

export default function Note({ id, head, text, date }: TNote) {
  const dispatch = useDispatch()

  const handleShowTodo = () => {
    const todo = {
      active: true,
      note: { id, head, text, date },
      type: TodoActions.EDIT_TODO
    }
    dispatch(storeTodo(todo))
  }

  return (
    <Card>
      <Card.Title h4>{head}</Card.Title>
      <Card.Divider />
      <View style={styles.dateView}>
        <View style={styles.dateTimeView}>
          <Text style={styles.dateText}>{new Date(id).toLocaleTimeString()}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <Button color="transparent" onPress={() => handleShowTodo()}>
          <Icon name="edit" size={30} />
        </Button>
      </View>
      <Card.Divider />
      <View style={styles.bodyView}>
        <Text style={styles.bodyText}>{text}</Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#00000030",
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  dateView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: 12,
    fontWeight: "600"
  },
  dateTimeView: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  headView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  bodyView: {
    
    overflow: "hidden",
  },
  bodyText: {
    fontSize: 13,
  }
})