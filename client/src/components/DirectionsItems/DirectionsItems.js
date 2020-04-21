import React, { useState } from 'react';

const DirectionsItems = ({
  TextArea,
  Container,
  Row,
  RemoveButton,
  AddButton,
}) => {
  const [directions, setDirections] = useState([
    { direction: '' },
    { direction: '' },
  ]);
    
     const handleInputChange = (e, index) => {
       const { name, value } = e.target;
       const list = [...directions];
       list[index][name] = value;
       setDirections(list);
    };
    

    
  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    const list = [...directions];
    list.splice(index, 1);
    setDirections(list);
    };
    
      const handleAddClick = (e) => {
        e.preventDefault();
        setDirections([...directions, { direction: '' }]);
      };
    
  return (
    <Container containerWidth={`650px`}>
      <h4>Add your directions one at a time!</h4>
      {directions.map((x, i) => {
        return (
          <Container
            key={i}
            className='container'
            padding='0'
            containerWidth='700px'
            margin='0.2rem 0'
          >
            <Row padding='0'>
              <TextArea
                name='direction'
                id=''
                cols='40'
                rows='5'
                width='100%'
                value={x.direction}
                onChange={(e) => handleInputChange(e, i)}
              ></TextArea>
              {directions.length > 2 && (
                <RemoveButton onClick={(e) => handleRemoveClick(e, i)}>
                  <i class='far fa-window-close'></i>
                </RemoveButton>
              )}
            </Row>
          </Container>
        );
      })}
      <AddButton onClick={handleAddClick} marginTop='1rem'>
        {' '}
        <span>
          <i class='fas fa-plus'></i>
        </span>{' '}
        Add Another Direction
      </AddButton>
    </Container>
  );
};

export default DirectionsItems;
