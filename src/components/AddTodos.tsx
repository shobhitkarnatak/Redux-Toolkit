import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-6">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 py-1 px-3 text-white"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 text-white font-normal text-sm"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
