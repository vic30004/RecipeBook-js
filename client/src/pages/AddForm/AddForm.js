import React, { useState } from 'react';
import {
  FieldSet,
  Row,
  InputContainer,
  Wrapper,
  Title,
  FormContainer,
  TextArea,
  Container,
  Label,
  Input,
  Select,
  RemoveButton,
  AddButton,
  SubmitBtn,
  CheckBox,
} from './FormStyle';
import IngredientsForm from '../../components/FormItems/IngredientsForm';
import DirectionsItems from '../../components/DirectionsItems/DirectionsItems';

const AddForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    serving: '',
    cookTime: { hours: '00', minutes: '00' },
    pri: false,
  });

  const [prepTime, setPrepTime] = useState({
    hours: 0,
    minutes:0, 
  })

  const { title, description, serving, cookTime, pri } = formData;
  const { hours, minutes } = prepTime;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrepTime = (e) => {
   setPrepTime({ ...prepTime, [e.target.name]: e.target.value });
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredient];
    list[index][name] = value;
    setIngredient(list);
  };




  const [directions, setDirections] = useState([
    { direction: '' },
    { direction: '' },
  ]);

  const [ingredient, setIngredient] = useState([
    { qt: '', measure: 'none', item: '' },
    { qt: '', measure: 'none', item: '' },
    { qt: '', measure: 'none', item: '' },
  ]);

  return (
    <Wrapper>
      <Container>
        <Title>Add A New Recipe</Title>

        <FormContainer>
          <Container width='766.042px'>
            <Label>Recipe Title:*</Label>

            <Input
              placeholder="What's the title of your recipe?"
              required
              name='title'
              value={title}
              onChange={(e) => handleChange(e)}
            ></Input>
          </Container>
          <Container>
            <Label>Recipe Description:*</Label>
            <TextArea
              cols='40'
              rows='5'
              placeholder='Give us some information about your special recipe.'
              spellCheck
              name='description'
              value={description}
              onChange={(e) => handleChange(e)}
            ></TextArea>
          </Container>
          <Container>
            <FieldSet size={'120px'} borderTop={'1px solid #eaeaea'}>
              <Row width={'140px'}>
                <Label>This recipe Serves:*</Label>
                <Input
                  required
                  name='serving'
                  value={serving}
                  onChange={(e) => handleChange(e)}
                ></Input>
              </Row>
            </FieldSet>
            <FieldSet>
              <Row>
                <Label>Prep Time: *</Label>
                <InputContainer>
                  <Input
                    type='number'
                    name='hours'
                    value={hours}
                    onChange={(e) => handlePrepTime(e)}
                  ></Input>
                  <span>hrs</span>
                </InputContainer>
                <InputContainer>
                  <Input
                    type='number'
                    name='minutes'
                    value={minutes}
                    onChange={(e) => handlePrepTime(e)}
                  ></Input>
                  <span>min</span>
                </InputContainer>
              </Row>
            </FieldSet>
            <div>
              <Container />
              <FieldSet>
                <Row>
                  <Label>Cook Time: *</Label>
                  <InputContainer>
                    <Input type='number'></Input>
                    <span>hrs</span>
                  </InputContainer>
                  <InputContainer>
                    <Input type='number'></Input>
                    <span>min</span>
                  </InputContainer>
                </Row>
              </FieldSet>
            </div>
          </Container>
          <FieldSet
            borderTop='1px solid #eaeaea'
            borderBottom='1px solid #eaeaea'
          >
            <IngredientsForm
              FieldSet={FieldSet}
              Label={Label}
              Container={Container}
              Input={Input}
              Row={Row}
              Select={Select}
              RemoveButton={RemoveButton}
              AddButton={AddButton}
              ingredient={ingredient}
              setIngredient={setIngredient}
            />
          </FieldSet>
          <FieldSet borderBottom='1px solid #eaeaea'>
            <DirectionsItems
              TextArea={TextArea}
              Container={Container}
              Row={Row}
              RemoveButton={RemoveButton}
              AddButton={AddButton}
              directions={directions}
              setDirections={setDirections}
            />
          </FieldSet>
          <FieldSet borderBottom='1px solid #eaeaea'>
            <Container containerWidth={`650px`} width='10px'>
              <Row width='140px'>
                <Label>Make this private?</Label>
                <CheckBox type='checkbox' name='' id='' />
              </Row>
            </Container>
          </FieldSet>
          <SubmitBtn>Add Recipe</SubmitBtn>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default AddForm;
