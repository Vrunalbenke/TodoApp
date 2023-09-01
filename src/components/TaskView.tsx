import {StyleSheet, Text, View, TouchableOpacity, FlatList,Modal} from 'react-native';
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
const [isVisible,setIsVisible] = useState(false)
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  function handleDelete(id: number) {
    setIsVisible(true)
    
  }

  function handleEdit(id: number) {
    // navigation.navigate('AddScreen', {id: id});
    // console.log(id);
    props.navToAddScreen(id);
  }

  function handleModalCancel(){
    setIsVisible(false)
  }

  function handleModalDelete(id:number){
    setIsVisible(false)
    dispatch(
      deleteTask({
        id: id,
      }),
    );
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

          {/* // --------------------Modal-----------------// */}

        <View style={styles.ModalContainer}>
              <Modal
                visible={isVisible}
                onRequestClose={()=>{setIsVisible(!isVisible)}}
                // animationType='slide'
                // presentationStyle='formSheet'
                transparent={true}
              >
                 <View style={styles.ModalContainer}>
              
              <View style={styles.modalView}>
              <View style={styles.TextContainer}>
                <Text  style={styles.questionText}>Do you want to delete this task?</Text>

                <View style={styles.BtnMainContainer}>

                    <TouchableOpacity 
                    style={styles.BtnInnerContainer}
                    onPress={handleModalCancel}
                    >
                        <Text style={styles.BtnText}>
                            Cancel
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.BtnInnerContainer}
                    onPress={()=>handleModalDelete(item.id)}
                        >
                    <Text style={styles.BtnText}>
                        Delete
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
              </View>
              </View>
            </Modal>
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
  // Modal:{
  //   // flex:1,
  //   justifyContent:'center',
  //   alignItems:'center',
    
  // },
  ModalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'lavender',
    
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    // justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  TextContainer:{
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:100
},
BtnMainContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:'90%'
},
questionText:{
  fontSize:20,
  fontFamily:'Poppins'
},
BtnInnerContainer:{
  backgroundColor:'#0081f1',
  padding:10,
  borderRadius:10
},
BtnText:{
  color:'#fff',
  fontSize:15
},
});
