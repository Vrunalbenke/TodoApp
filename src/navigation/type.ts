import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
    EntryScreen: undefined;
    TaskScreen:  undefined;
    AddScreen: {id:number}|undefined; 
  };
  
  export type EntryScreenNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'EntryScreen'
  >;
  
  export type TaskScreenNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'TaskScreen'
  >;
  export type AddScreenNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'AddScreen'
  >;