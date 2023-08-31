import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
//@ts-ignore
import TodoImage from '../../assets/svg/TodoImage.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {EntryScreenNavigationProp} from '../../navigation/type';

const EntryScreen = ({navigation}: EntryScreenNavigationProp) => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.MainApp}>TODO APP</Text>
      {/* <View style={{backgroundColor: 'yellow'}}> */}
      <TodoImage height={450} width={'110%'} />
      {/* </View> */}
      <View style={styles.Footer}>
        <Text style={styles.FooterText}>Let's crush the tasks</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TaskScreen')}>
          <Icon name="chevron-forward-outline" style={styles.RightIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntryScreen;
