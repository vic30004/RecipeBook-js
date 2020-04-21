import React, { useState } from 'react';

const DirectionsItems = ({
  TextArea,
  Container,
  Row,
  RemoveButton,
  AddButton,
}) => {
  const [directions, setDirections] = useState([
    { directon: '' },
    { directon: '' },
  ]);
  return (
    <Container className='container'>
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
            <Row padding='0 1rem'>
              <TextArea
                name=''
                id=''
                cols='40'
                rows='5'
                width='100%'
                value={x.directon}
              ></TextArea>
              {directions.length > 2 && (
                <RemoveButton>
                  <i class='far fa-window-close'></i>
                </RemoveButton>
              )}
            </Row>
          </Container>
        );
      })}
      <AddButton>
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
