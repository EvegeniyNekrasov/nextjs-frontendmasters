import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  // simulating server response to visualize the loading/error component
  // await new Promise((resolve, reject) => setTimeout(() => reject(0), 2000));
  const todos = await db.todo.findMany({});
  return todos;
};

const Todos = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
