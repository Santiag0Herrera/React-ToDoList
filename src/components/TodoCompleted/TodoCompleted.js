import React, { useState } from 'react';

const TodoCompleted = (data) => {
  const {title, text, id, handleDelete, handleCompleted, handleUncompleted} = data;
  let [checkboxStatus, setCheckboxStatus] = useState(true);
  const checkboxText = checkboxStatus === true ? 'Done' : 'Pending';

  function toggle(value){
    return !value;
  }

  const handleChange = () => {
    setCheckboxStatus(toggle);
    checkboxStatus===false ? handleCompleted(id, title, text) : handleUncompleted(id, title, text);
  }

  return(
    <>
       <div className={checkboxStatus === true ? 'backgroundGreen card' : 'backgroundYellow card'}>
        <button className='btn btn-secondary delete' 
        onClick={(e)=>{
          e.preventDefault();
          handleDelete(id);
        }}>X</button>
        <div className='card-content'>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <form className='card-form'>
            <input id="checkbox" type="checkbox" checked={checkboxStatus} onChange={handleChange}/>
            <label htmlFor="checkbox">{checkboxText}</label> 
        </form>
      </div> 
    </>
    )
};

export default TodoCompleted;