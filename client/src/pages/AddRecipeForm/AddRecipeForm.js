import React, { Fragment, useState } from 'react';
import './AddRecipeForm.css';
const AddRecipeForm = () => {
  const [num, setNum] = useState(0);
//   const dynamicIng =[];
//   const generateIng = e => {

//     if (e.target.value !== 0 || e.target.value < 20) {
//       for (let i = 0; i < e.target.value; i++) {
//     dynamicIng.push(<li>test</li>)
          
//     }
//     console.log(dynamicIng)
//   };
// }

const ingInput = (num)=>{
    const data=[]
  if(num===0 || num>20){
      return
  }
  for(let i =0; i<num;i++){
    data.push(<input
    type='text'
    name='cookTime'
    placeholder='Cook Time'
    id='cookTime'
    required
  />)
}
 return data
}

  return (
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
          <input type='text' placeholder='0' onChange={e => setNum(e.target.value)} />
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
          <label>
            Ingredients*<br></br>
           {ingInput(num)}
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
          <div className='check'>
            <label htmlFor=''>
              Public
              <input type='checkbox' />
            </label>

            <label htmlFor=''>
              Private
              <input type='checkbox' />
            </label>
          </div>

          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
