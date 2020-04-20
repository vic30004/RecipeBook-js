import React,{useState} from 'react'

const IngredientsForm = (props) => {
    const [ingredient, setIngredient] = useState([{ qt: '', measure: 'none', item: '' }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...ingredient];
        list[index][name] = value;
        setIngredient(list);
    }

    const handleRemoveClick = index => {
        const list = [...ingredient];
        list.splice(index, 1);
        setIngredient(list)

    }
    
        return (
            ingredient.map((x, i) => {
                return (
                  <div>
                    <div className='container'>
                      <fieldset>
                        <div className='row'>
                          <label htmlFor=''>Quantity</label>
                          <input
                            type='text'
                            name='qt'
                            value={x.qt}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      </fieldset>
                      <div className='container'>
                        <label>Measurement</label>
                        <select
                          name='measure'
                          value={x.measure}
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option value='none'>(none)</option>
                          <option value='tsp'>tsp</option>
                          <option value='tbsp'>tbsp</option>
                          <option value='tbsp'>fl oz</option>
                          <option value='cup'>cup</option>
                          <option value='pint'>pint</option>
                          <option value='gal'>gal</option>
                          <option value='ml'>ml</option>
                          <option value='liter'>liter</option>
                          <option value='deciliter'>deciliter</option>
                          <option value='pound'>pound</option>
                          <option value='ounce'>ounce</option>
                          <option value='mg'>mg</option>
                          <option value='g'>g</option>
                          <option value='kg'>kg</option>
                        </select>
                      </div>
                      <div className='container'>
                        <label>Item</label>
                        <input
                          name='item'
                          value={x.item}
                          onChange={(e) => handleInputChange(e, i)}
                        ></input>
                      </div>
                      {ingredient.length !== 1 && (
                        <button onClick={() => handleRemoveClick(i)}>x</button>
                      )}
                    </div>
                    <button>Add</button>
                  </div>
                );  
                })   
           );
      
   
}

export default IngredientsForm
