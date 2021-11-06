import { FC, useState, useCallback } from "react";
import ControlledInput from "../common/controlled-input/controlled-input";
import { RootState } from '../../store';
import { addTodo, removeTodo, completeTodo } from './todo-list-slice';
import { useSelector, useDispatch } from "react-redux";
import TodoItem from './todo-item';
// import { TTodoItem } from "./todo-list-slice";

const TodoList: FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const dispatch = useDispatch();
  const todoItems = useSelector((state: RootState) => state.todoItems);
  const handleAddTodo = useCallback(() => {
    dispatch(addTodo({
      id: Math.random().toString().slice(2),
      title: inputVal,
      isCompleted: false,
      date: Date.now()
    }));
    setInputVal('');
  }, [inputVal, dispatch]);

  const handleRemoveTodo = useCallback((id: string) => {
    dispatch(completeTodo(id));
  }, []);

  return (
    <div>
      <ControlledInput value={inputVal} onChange={setInputVal} />
      <button onClick={handleAddTodo}> Add </button>
      { todoItems.length > 0 && (
        <ul>
          { todoItems.map((item) => (
            <TodoItem key={item.id} {...item} onComplete={handleRemoveTodo}>
              { item.title }
            </TodoItem>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList;
