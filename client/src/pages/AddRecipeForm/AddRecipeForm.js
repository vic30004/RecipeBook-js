import React from 'react'
import "./AddRecipeForm.css"
const AddRecipeForm = () => {
    return (
        <div id="recipeForm">
        <div id="emptyDiv"></div>
            <div className="form-container">
                <form action="" className="form-content">
                    <input type="text" name="title" placeholder="Recipe Title" id="title" required/>
                    <input type="text" name="cookTime" placeholder="Cook Time" id="cookTime" required/>
                    <input type="text" name="ingredients" placeholder="Ingredients" id="indgredients" required/>
                    
                    <textarea name="" id="" cols="30" rows="4" placeholder="Description"></textarea>
                    <label htmlFor="">Picture
                    <input type="file"  name="picture"/>
            </label>
            <label htmlFor="">Public
            <input type="checkbox"/>
            </label>
                    
            <label htmlFor="">Private
            <input type="checkbox"/>
            </label>
                    
            <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddRecipeForm
