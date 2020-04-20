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
  Select
} from './FormStyle';
import Ingredients from '../../components/FormItems/Ingredients';
import IngredientsForm from '../../components/FormItems/IngredientsForm';

const AddForm = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Add A New Recipe</Title>

        <FormContainer>
          <Container>
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
            <FieldSet size={'120px'} borderTop={'1px solid #333'}>
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
          <Ingredients
            FieldSet={FieldSet}
            Label={Label}
            Container={Container}
            Input={Input}
            Row={Row}
            Select={Select}
          />
          <IngredientsForm />
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default AddForm;
