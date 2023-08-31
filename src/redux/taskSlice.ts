import {createSlice} from '@reduxjs/toolkit';
import {IInitialState} from './type';
type task = {
    id:number,
    title:string,
    desc:string
}



export const taskSlice = createSlice({
  name: 'tasks',
  //initialState : [] <----
  initialState: {
    todoList: [],
  } as IInitialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
        desc: action.payload.desc,
      };
      state.todoList.push(newTask as never);
    },
    deleteTask: (state, action) => {
      // return state.todoList.filter(item => item.id !== action.payload.id);
    state.todoList = state.todoList.filter(
        item => item.id !== action.payload.id,
        );
    },
    updateTask:(state, action)=>{
        state.todoList = state.todoList.map(item =>
            item.id === action.payload.id ? action.payload : item,
          );
    }
  },
});

export const {addTask, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;
