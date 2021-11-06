import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TTodoItem {
  id: string;
  title: string,
  isCompleted: boolean;
  date: number
}

type TPayloadID = PayloadAction<string>;

type TPayloadTodoItem = PayloadAction<TTodoItem>;

const initialState: TTodoItem[] = [];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (items, { payload: newTodo }: TPayloadTodoItem) => {
      items.push(newTodo);
    },
    removeTodo: (items, { payload: id }: TPayloadID) => {
      const index = items.findIndex(item => item.id === id);
      items.splice(index, 1);
    },
    completeTodo: (items, { payload: id }: TPayloadID) => {
      const index = items.findIndex(item => item.id === id);
      items.splice(index, 1, {
        ...items[index],
        isCompleted: true
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
