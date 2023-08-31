import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../redux/taskSlice';
import {updateTask} from '../../redux/taskSlice'
import {AddScreenNavigationProp} from '../../navigation/type';
import { useAppDispatch, useAppSelector } from '../../redux/store';




const AddScreen = ({route, navigation}:AddScreenNavigationProp) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [validation, setValidation] = useState('');
  const [btnName, setBtnName] = useState('ADD');
  const dispatch = useAppDispatch();
  let EditID = route.params?.id;


  const IDdata = useAppSelector(state =>
    state.tasks.todoList.find(item => EditID === item.id),
  );
  // console.log(IDdata);

  useEffect(() => {
    if (EditID !== undefined && IDdata) {
      setBtnName('SAVE');
      setTitle(IDdata.title);
      setDesc(IDdata.desc);
    }
  }, []);


  function updateData(){
    dispatch(
      updateTask({
        id:EditID,
        title:title,
        desc:desc
      })
    )
    navigation.navigate('TaskScreen')
    setBtnName('ADD')
  }

  function AddData() {
    if (title.trim().length !== 0 && desc.trim().length !== 0) {
      dispatch(
        addTask({
          id: Math.random() * 100,
          title,
          desc,
        }),
      
      );
      navigation.navigate('TaskScreen');
      setTitle('');
      setDesc('');
    } else {
      setValidation('* mandatory');
    }
  }

  function setDescription(value:string) {
    setDesc(value);
  }
  function seTasktTitle(value:string) {
    setTitle(value);
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.TitleDescText}>Title</Text>
      <Text style={styles.validation}>{validation}</Text>
      <TextInput
        style={styles.InputField}
        placeholder="ADD TASK TITLE HERE"
        placeholderTextColor={'grey'}
        value={title}
        onChangeText={
          seTasktTitle
          // console.log(title);
        }></TextInput>
      <Text style={styles.TitleDescText}>Description</Text>
      <Text style={styles.validation}>{validation}</Text>
      <TextInput
        style={[styles.InputField, {height: 80}]}
        placeholder="ADD TASK DESCRIPTION HERE"
        placeholderTextColor={'grey'}
        multiline
        value={desc}
        onChangeText={setDescription}></TextInput>

      <TouchableOpacity style={styles.AddBtn} onPress={EditID === undefined ?(() => AddData()):(() => updateData()) }>
        <Text style={styles.AddBtnText}>{btnName}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddScreen;
