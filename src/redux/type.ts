export interface ITodoList {
    id: number;
    title: string;
    desc: string;
  }
  
  export interface IInitialState {
    todoList: ITodoList[] | [];
  }