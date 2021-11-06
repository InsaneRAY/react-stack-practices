import { FC, useCallback, useMemo } from 'react';
import { TTodoItem } from "./todo-list-slice";
import dayjs from 'dayjs';

interface Props extends TTodoItem{
  onComplete: (id: string) => void;
}

const TodoItem: FC<Props> = ({
  id,
  title,
  isCompleted,
  date,
  onComplete
}) => {
  const handleComplete = useCallback(() => {
    onComplete(id)
  }, [id, onComplete]);

  const formatDate = useMemo(() => {
    return dayjs(date).format('YYYY/DD/MM')
  }, [date]);

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onClick={handleComplete}/>
      <div>
        <p>{ title }</p>
        <p>{ formatDate }</p>
      </div>
    </li>
  )
}

export default TodoItem;