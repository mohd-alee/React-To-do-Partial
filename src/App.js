import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    'item 1', 'item 2', 'item 3', 'item 4'
  ]);
  const [inputVal, setinputVal] = useState('');
  const [editmode, seteditmode] = useState(false);
  const [editIndex, seteditIndex] = useState(0);
  const addToDoItem = ()=>{
    if(!inputVal){
      alert ('Please enter some value');
      return;
    }
    let copyItems = [...items];
    copyItems.push(inputVal);
    setItems(copyItems);
    setinputVal('');
  }
  const deleteItem = index => {
    let copyItems = [...items];
    copyItems.splice(index,1);
    setItems(copyItems);
  }
  const editItem = index => {
    seteditmode(true);
    seteditIndex(index);
    let copyItems = [...items];
    setinputVal(copyItems[index]);
  }
  const confirmEditItem = () => {
    let copyItems = [...items];
    copyItems[editIndex] = inputVal;
    setItems(copyItems);
    seteditmode(false);
    setinputVal('');
  }
  
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='offset-md-3 col-md-6'>
          <input type='text' value={inputVal} className='form-control' placeholder='Enter To-do Item' onChange={ event => { setinputVal(event.target.value) }}></input>
          { (editmode) ?
           <button className='btn btn-success w-50 mt-2 mx-auto d-block' onClick={confirmEditItem}>Update Item</button>
           :
           <button className='btn btn-success w-50 mt-2 mx-auto d-block' onClick={addToDoItem}>Add Item</button>
          }
        </div>
      </div>
      <div className='row mt-5'>
        {
          items.map( (item,index) => {
            return (
            <div className='col-md-4 col-lg-3 mb-5' key={index}>
              <div className='to-do_item'>
                <i className="fa-sharp fa-solid fa-circle-xmark" id='deleteItem' onClick={()=>{deleteItem(index)}}></i>
                <i className="fa-solid fa-pen-to-square" id='editItem' onClick={()=>{editItem(index)}}></i>
                <h2>{item}</h2>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
