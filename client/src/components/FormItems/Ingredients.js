import React, { useState, Fragment } from 'react';

const Ingredients = ({ Container, FieldSet, Label, Input, Row, Select }) => {
  const [ingredient, setIngredient] = useState('');

  const onChange = (e) => setIngredient(e.target.value);

  const IngredientList = (
    <Fragment>
      <Container>
        <Label>Quantity</Label>
        <Input></Input>
      </Container>
      <Container>
        <Label>Measurement</Label>
        <Select name='' id=''>
          <option value=''>(none)</option>
          <option value=''>tsp</option>
          <option value=''>tbsp</option>
          <option value=''>fl oz</option>
          <option value=''>cup</option>
          <option value=''>pint</option>
          <option value=''>gal</option>
          <option value=''>ml</option>
          <option value=''>liter</option>
          <option value=''>deciliter</option>
          <option value=''>pound</option>
          <option value=''>ounce</option>
          <option value=''>mg</option>
          <option value=''>g</option>
          <option value=''>kg</option>
        </Select>
      </Container>
      <Container width={`300px`}>
        <Label>Item</Label>
        <Input></Input>
      </Container>
    </Fragment>
  );
  const [field, setField] = useState([IngredientList]);
  const removeIngredient = (e, i) => {
    e.preventDefault();
    console.log(i);
    setField(
      field.filter((item, j) => {
        if (j !== i) {
          return item;
        }
      })
    );
    console.log(e.target);
  };

  const AddIngredientInputs = (e) => {
    e.preventDefault();
    setField((field) => [...field, IngredientList]);
  };

  return (
    <Fragment>
      <Container containerWidth={`650px`}>
        {field.length > 0
          ? field.map((data, i) => (
              <FieldSet key={i} size={'100px'} paddingTop={`0`} marginBottom={`0`}>
                <Row marginTop={`0`}>
                  {data}
                  {field.length > 3 ? (
                    <button onClick={(e) => removeIngredient(e, i)}>x</button>
                  ) : (
                    false
                  )}
                </Row>
              </FieldSet>
            ))
          : false}
        <button onClick={(e) => AddIngredientInputs(e)}>add</button>
      </Container>
    </Fragment>
  );
};

export default Ingredients;
