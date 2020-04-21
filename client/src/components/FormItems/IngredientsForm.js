import React,{Fragment, useState} from 'react'

const IngredientsForm = ({
  Container,
  FieldSet,
  Label,
  Input,
  Row,
  Select,
}) => {
  const [ingredient, setIngredient] = useState([
    { qt: '', measure: 'none', item: '' },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredient];
    list[index][name] = value;
    setIngredient(list);
  };

    const handleRemoveClick = (e,index) => {
      e.preventDefault()
    const list = [...ingredient];
    list.splice(index, 1);
    setIngredient(list);
  };
  const handleAddClick = (e) => {
    e.preventDefault();
    setIngredient([...ingredient, { qt: '', measure: 'none', item: '' }]);
  };
  return (
    <Fragment>
      <Container containerWidth={`650px`}>
        <h4>Add your ingredients one at a time!</h4>
        <FieldSet size={'100px'} paddingTop={`0`} marginBottom={`0`}>
          <Container marginTop={`0`}>
            {ingredient.map((x, i) => {
              return (
                <Row>
                  <Container>
                    <Label htmlFor=''>Quantity</Label>
                    <Input
                      type='text'
                      name='qt'
                      value={x.qt}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Container>
                  <Container>
                    <Label>Measurement</Label>
                    <Select
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
                    </Select>
                  </Container>
                  <Container width={`300px`}>
                    <Label>Item</Label>
                    <Input
                      name='item'
                      value={x.item}
                      onChange={(e) => handleInputChange(e, i)}
                    ></Input>
                  </Container>
                  {ingredient.length !== 1 && (
                    <button onClick={(e) => handleRemoveClick(e,i)}>x</button>
                  )}
                </Row>
              );
            })}{' '}
          </Container>
        </FieldSet>
        <button onClick={handleAddClick}>Add</button>
      </Container>
    </Fragment>
  );
};

export default IngredientsForm
