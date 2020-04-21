import React from 'react';
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
  return (
    <Wrapper>
      <Container>
        <Title>Add A New Recipe</Title>

        <FormContainer>
          <Container width='766.042px'>
            <Label>Recipe Title:*</Label>

            <Input placeholder="What's the title of your recipe?"></Input>
          </Container>
          <Container>
            <Label>Recipe Description:*</Label>
            <TextArea
              cols='40'
              rows='5'
              placeholder='Give us some information about your special recipe.'
              spellCheck
            ></TextArea>
          </Container>
          <Container>
            <FieldSet size={'120px'} borderTop={'1px solid #eaeaea'}>
              <Row width={'140px'}>
                <Label>This recipe Serves:*</Label>
                <Input></Input>
              </Row>
            </FieldSet>
            <FieldSet>
              <Row>
                <Label>Prep Time: *</Label>
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
            />
          </FieldSet>
          <FieldSet borderBottom='1px solid #eaeaea'>
            <DirectionsItems
              TextArea={TextArea}
              Container={Container}
              Row={Row}
              RemoveButton={RemoveButton}
              AddButton={AddButton}
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
