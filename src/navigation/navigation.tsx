import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from '../screens/EntryScreen/EntryScreen'
import TaskScreen from '../screens/TaskScreen/TaskScreen';
import AddScreen from '../screens/AddScreen/AddScreen';
import { RootStackParamList } from './type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const navigation = () => {
  return (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen name='EntryScreen' component={EntryScreen} options={
                { headerShown:false,
                // title:'Home',
                }
            }/>
            <RootStack.Screen name='TaskScreen' component={TaskScreen} options={
                {// {headerShown:false,
                title:'Task',
                headerBackTitle:'Home',
                headerBackTitleVisible:false,
                headerLargeTitleStyle:{fontSize:20}
            }
            }/>
            <RootStack.Screen name='AddScreen' component={AddScreen} options={
                {
                title:'Add Task',
                headerBackTitle:'Task',
                headerBackTitleVisible:false
            }
            }/>
        </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default navigation