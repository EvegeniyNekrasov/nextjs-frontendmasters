import { newTodo } from '@/utils/actions';

const NewTodoFrom = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button type="submit">new todo</button>
      </form>
    </div>
  );
};

export default NewTodoFrom;
