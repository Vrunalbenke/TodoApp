import { StyleSheet, Text, View } from 'react-native'


export const styles = StyleSheet.create({
    root: {
      flex: 1,
      // backgroundColor: 'red',
    },
    MainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      // marginTop:20,
      paddingVertical:20
      // backgroundColor: 'blue',
    },
  
    MainApp: {
      fontSize: 40,
      fontWeight: '600',
      color:'#3c3b39',
      // backgroundColor: 'lightblue',
      fontFamily:'Poppins ExtraBold Italic'
    },
    Footer:{
      flexDirection:'row',
      justifyContent:"space-between",
      width:330,
      alignItems:'center',
      backgroundColor:'#fdb818',
      paddingVertical:6,
      paddingHorizontal:10,
      borderRadius:5
    },
    FooterText:{
      fontSize:23,
      fontWeight:'500',
      fontFamily:'Poppins Medium Italic'
      
    },
    RightIcon:{
      fontSize:25,
    }
  });
  