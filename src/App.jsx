import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./index.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [listArr, setListArr] = useState([]);
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const onAddTaskButton = () => {
    if (inputText.trim() !== "") {
      setListArr([...listArr, inputText]);
      setInputText("");
    }
  };

  const deleteListItem = (index) => {
    setListArr(listArr.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="w-full max-w-xl bg-white p-8 rounded-3xl shadow-2xl">
          <h1 className="mb-8 text-3xl font-bold text-blue-700 tracking-wide">To Do List App</h1>
          <div className="flex gap-3 mb-8">
            <input
              type="text"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter a new task..."
            />
            <button
              onClick={onAddTaskButton}
              className="px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add Task
            </button>
          </div>
          <div className="taskContainer flex justify-center">
            <ol className="list-decimal px-6 w-full space-y-3">
              {listArr.length === 0 && (
                <li className="text-gray-400 italic">No tasks yet. Add your first task!</li>
              )}
              {listArr.map((item, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 shadow-sm hover:bg-blue-50 transition">
                  <span className="text-lg text-gray-800 break-words">{item}</span>
                  <button
                    onClick={() => deleteListItem(index)}
                    className="ml-4 p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition"
                    aria-label="Delete task"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
