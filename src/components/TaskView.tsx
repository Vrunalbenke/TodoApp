import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';
import {useNavigation} from '@react-navigation/core';
import {useAppSelector,useAppDispatch} from '../redux/store';
type Todo = {
  id: number;
  title: string;
  desc: string;
};
// let TodoList: any[] = [];

// interface Props extends Todo {
// }

interface IrenderList {
  item: Todo;
  index: number;
}

interface ITaskView {
  navToAddScreen: (id: number) => void;
}

const TaskView = (props: ITaskView) => {
  const todos = useAppSelector(state => state.tasks.todoList);
//   const todos2 = useAppSelector(state => state.tasks);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  function handleDelete(id: number) {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  }

  function handleEdit(id: number) {
    // navigation.navigate('AddScreen', {id: id});
    // console.log(id);
    props.navToAddScreen(id);
  }

  const RenderList = ({item, index}: IrenderList) => {
    console.log(index, 'index');
    return (
      <View style={styles.TodoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.TodoTitle}>{index + 1}.</Text>
          <Text style={styles.TodoTitle}> {item.title}</Text>
        </View>

        <View style={styles.descContainer}>
          <Text style={styles.TodoDesc}>{item.desc}</Text>
        </View>
        <View style={styles.EditDeleteContainer}>
          <TouchableOpacity
            onPress={() => {
              handleEdit(item.id);
              
            }}>
            <Ionicons name="create-outline" style={styles.Edit}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleDelete(item.id);
            }}>
            <Ionicons name="trash-outline" style={styles.Delete}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      {todos && (
        <FlatList
          // contentContainerStyle={{paddingBottom: 0}}
          style={[styles.Todos, {height: 0}]}
          data={todos}
          renderItem={RenderList}
          keyExtractor={todos => todos.id.toString()}
        />
      )}
    </>
    
  );
};

export default TaskView;

const styles = StyleSheet.create({
  Todos: {
    // minHeight: 100,
  },
  TodoContainer: {
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    width: '90%',
    minHeight: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  TodoTitle: {
    fontSize: 25,
    fontFamily: 'Poppins Bold Italic',
    paddingBottom: 10,
  },

  descContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TodoDesc: {
    fontSize: 18,
    paddingLeft: 15,
  },
  EditDeleteContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  Edit: {
    fontSize: 25,
  },
  Delete: {
    fontSize: 25,
  },
});
