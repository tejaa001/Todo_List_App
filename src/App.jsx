// import { useState, useEffect } from "react";
import { useState } from "react";
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

  const deleteListItem = (index)=>{
    setListArr(listArr.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="flex justify-center items-center h-screenx ">
        <div className="w-1/2 bg-white p-5 rounded-2xl text-center">
          <h1 className="mb-5">To Do List App</h1>
          <div className="flex">
            <input
              type="text"
              className="inputText flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputText}
              onChange={handleInputChange}
            />
            <button onClick={onAddTaskButton} className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add Task
            </button>
          </div>
          <div className="taskContainer flex justify-center">
              <ol className="list-decimal px-10 m-auto">
                {
                  listArr.map((item,index)=>{
                    return(
                      <>
                      <div className="flex justify-between w-96">
                      <li>{item}</li> 
                      <button id={index} onClick={()=>deleteListItem(index)}>Delete</button>
                      </div>
                      </>
                    )
                  })
                }
                </ol>
            </div>
        </div>
      </div>
    </>
  );
};

export default App;
