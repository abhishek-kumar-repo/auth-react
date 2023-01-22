const TodoCard = ({todo}) => {
  return (
    <div className="flex justify-between my-5 mx-52 px-4 py-4  bg-gray-400 shadow-lg rounded">
        <span className=" font-medium">{todo}</span>
        <button className="border border-red-700 bg-red-700 px-2 rounded"> - </button>
    </div>
  );
};
export default TodoCard;
