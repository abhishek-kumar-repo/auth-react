import { useState } from "react";

const TodoForm = () => {
  const [task, setTask] = useState({ task: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("<><>><><><><><><><", task);
  };
  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={handleSumbit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          placeholder="TodoList"
          className="form-control text-lg font-normal border border-solid border-gray-300 rounded  px-2 py-2"
        />
        <button
          type="submit"
          className="form-control border border-solid border-gray-300 focus:border-green-600 rounded px-2 pt-[11px] pb-[9px] bg-green-600"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
