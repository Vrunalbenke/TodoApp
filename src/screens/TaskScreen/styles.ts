import { StyleSheet, Text, View } from 'react-native'



export const styles = StyleSheet.create({
    root: {
      flex: 1,
      height: '100%',
    },
    HeaderContainer: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fdb818',
    },
    HeaderName: {
      fontSize: 25,
      fontWeight: '600',
      fontFamily: 'Poppins ExtraBold Italic',
    },
    DateTime: {
      fontSize: 18,
      fontFamily: 'Poppins Medium Italic',
    },
    MainContainer: {
      minHeight: '100%',
      backgroundColor: 'wheat',
    },
    //TODOLIST-- START
    TodoMainContainer: {
      padding: 10,
    },
    AddTaskContainer: {alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    right: 20,
    height: 70,
    bottom:20
    },
    AddTaskIcon: {
      fontSize: 65,
      color:'#231a03'
    },
    AddTaskText: {
      fontWeight: '600',
    },
  
    ///===========
    
  });