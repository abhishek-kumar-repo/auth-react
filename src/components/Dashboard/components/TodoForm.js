import { useState } from "react";

const TodoForm = ({ todoList, setTodoList }) => {
  const [taskvalue, setTaskValue] = useState("");

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, taskvalue]);
    setTaskValue("");
  };
  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={handleSumbit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          value={taskvalue}
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
