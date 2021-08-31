import React from "react";

function InputForm({addItem}){
    const [value, setValue] = React.useState("");
  
    const addItemHandler = e => {
      e.preventDefault();
  
      if(!value) {
        return;
      }
      
      addItem(value);
      setValue("");
    }
    return (
      <div className="form-todo row col-md-4 offset-md-4 mb-3">
          <div className="col-md-8">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Add ToDo to the list" 
                value={value}
                onChange={e => setValue(e.target.value)}
              />
          </div>
          <div className="col-md-4">
              <button 
                type="submit" 
                class="btn btn-primary" 
                onClick={e => addItemHandler(e)}
              >
                Add
              </button>
          </div>
      </div>
    )
  }

export default InputForm