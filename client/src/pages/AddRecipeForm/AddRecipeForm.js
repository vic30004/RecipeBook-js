import React, { Fragment, useState } from 'react';
import './AddRecipeForm.css';
const AddRecipeForm = () => {
  const [num, setNum] = useState(0);
  const [formData,setFormData] = useState()

  const ingInput = num => {
    const data = [];
   
    for (let i = 0; i < num; i++) {
      data.push(
        <input
          type='text'
          name='ingredients'
          placeholder='Ingredients'
          id='ingredients'
          key={Math.floor(Math.random()*100)+1}
          value={formData}
          onChange={e=>
            onChange(e)
          }
          required
        />
      );
    }
    console.log(data);
    return data;
  };
  const addInp = e => {
    e.preventDefault();
    setNum(num + 1);

    ingInput(num);
  };

  const onChange = e =>{
    const ing=e.target.value;
    setFormData({ ...formData, ...formData.concat(e.target.value)});
  }

  return (
    <div className="wrapper">
    
    
    <div id='recipeForm'>
      <div id='emptyDiv'></div>
      <div className='form-container'>
        <form action='' className='form-content'>
          <h2>Add Recipe</h2>
          <label>
            Title* <br></br>
            <input
              type='text'
              name='title'
              placeholder='Recipe Title'
              id='title'
              required
            />
          </label>
          <label>
            Cook Time*<br></br>
            <input
              type='text'
              name='cookTime'
              placeholder='Cook Time'
              id='cookTime'
              required
            />
          </label>
          <label>Ingredients<br></br>
          <textarea name=''
          id=''
          cols='30'
          rows='4'
          placeholder='Ingredients'></textarea>
          
          </label>

          
          <label>
            Description<br></br>
            <textarea
              name=''
              id=''
              cols='30'
              rows='4'
              placeholder='Description'
            ></textarea>
          </label>
          <label htmlFor=''>Picture</label>
          <input type='file' name='picture' id='pic' />
          <div className='check-container'>
            <label className='check-container'>
              Public
              <input type='checkbox'/>
              <span class="checkmark"></span>

            </label>

            <label className='check-container'>
              Private
              <input type='checkbox' />
              <span class="checkmark"></span>

            </label>
          </div>
          <button className="addBtn">Add</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddRecipeForm;
