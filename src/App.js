import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([
    {
      name: 'Javascript',
      status: 0,
    },
    {
      name: 'React',
      status: 0,
    },
    {
      name: 'Vue',
      status: 0,
    },
    {
      name: 'Node',
      status: 0,
    }
  ]);

  const addToDoItem = () => {
    if(inputValue){
      let copyToDoList = [...todoList];
      copyToDoList.push({name: inputValue,status: 0});
      setTodoList(copyToDoList);
      setInputValue("");
    }else{
      alert('Please Enter Some Value');
    }
  };
  const completedFunction = index => {
    let copyToDoList = [...todoList];
    copyToDoList[index].status = !copyToDoList[index].status;
    setTodoList(copyToDoList);
  };
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='offset-md-3 col-md-6'>
          <input type='text' value={inputValue} className='form-control' placeholder='Enter To-do Item' onChange={(event) => {setInputValue(event.target.value)}}></input>
          <button className='btn btn-success w-50 mt-2 mx-auto d-block' onClick={addToDoItem}>Add Item</button>
        </div>
      </div>
      <div className='row mt-5'>
      {todoList.map( (item,index) => {
        return (
        <div className='col-md-4 col-lg-3 mb-4' key={index}>
          <div className='to-do_item'>
            {
            !item.status ? 
            <>
              <i className="fa-solid fa-circle-check" onClick={()=> {completedFunction(index)} }></i>
              <h2>{item.name}</h2>
            </>
            :
            <>
              <i className="fa-sharp fa-solid fa-circle-xmark" onClick={()=> {completedFunction(index)} }></i>
              <h2><s>{item.name}</s></h2>
            </>
            }
          </div>
        </div>
        )
      } )}
      </div>
    </div>
  );
}

export default App;
