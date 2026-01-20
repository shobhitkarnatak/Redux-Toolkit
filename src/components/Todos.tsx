import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Trash2 } from "lucide-react";

const Todos = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="pt-8 font-semibold text-xl">Todos List</div>
      <ul className="list-none">
        {todos?.map((todo: any) => (
          <li
            key={todo.id}
            className="mt-2 flex justify-between items-center bg-zinc-800 px-4 rounded w-180 py-2 m-auto"
          >
            <div className="text-white">{todo.text}</div>
            <Trash2 color="#fff" className="text-md font-bold rounded-sm cursor-pointer"
              onClick={() => dispatch(removeTodo(todo.id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
