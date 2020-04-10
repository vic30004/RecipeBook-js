import React, { Fragment, useState, useContext, useEffect } from 'react';
import './AddRecipeForm.css';
import AuthContext from '../../components/context/auth/AuthContext';

const AddRecipeForm = (props) => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated } = authContext;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
      //eslint-disable-next-line
    }
  }, [isAuthenticated, props]);

  const [num, setNum] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    cookTime: '',
    directions: '',
    ingredients: '',
    description: '',
    picture: '',
  });
  const { title, cookTime, directions, ingredients,description, picture } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='wrapper'>
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
                value={title}
                placeholder='Recipe Title'
                id='title'
                required
                onChange={(e) => onChange(e)}
              />
            </label>
            <label>
              Cook Time*<br></br>
              <input
                type='text'
                name='cookTime'
                placeholder='Cook Time'
                id='cookTime'
                value={cookTime}
                required
                onChange={(e) => onChange(e)}
              />
            </label>
            <label>
              Ingredients<br></br>
              <textarea
                name='ingredients'
                id='ingredients'
                cols='30'
                rows='4'
                placeholder='Ingredients'
                value={ingredients}
                onChange={(e) => onChange(e)}
              ></textarea>
            </label>

            <label>
              Description<br></br>
              <textarea
                name='description'
                id='description'
                cols='30'
                rows='4'
                placeholder='Description'
                value={description}
                onChange={(e) => onChange(e)}
              ></textarea>
            </label>
            <label htmlFor=''>Picture</label>
            <input type='file' name='picture' value={picture} id='pic' onChange={(e) => onChange(e)} />

            <button className='addBtn'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
