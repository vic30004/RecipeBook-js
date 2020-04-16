import React from 'react';
import styled from 'styled-components';
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
            <Row>
              <Label>This recipe Serves:*</Label>
              <Input></Input>
            </Row>
            <Row>
              <Label>Prep Time: *</Label>
              <Input type='number'></Input>
            </Row>
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
          </Container>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

const inputTextAreaColors = `
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  width:100%;
  padding:1rem;
`;
const Row = styled.div`
  display: flex;
  margin: 1rem 0;
  max-width:800px;
  align-items: center;

  input {
    margin: 0 0.5rem;
    
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-left: 10px;
  width: 150px;
  input {
    padding: 0 1rem;
    height: 50px;
    padding-right: 3px;
  }
  span {
    position: absolute;
    right: 0px;
    top: 0;
    line-height: 50px;
    padding-left: 0.5rem;
    /* top:50%;
    transform:translate(-50%,-50%); */
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
`;
const Title = styled.h2`
  text-transform: uppercase;
`;
const FormContainer = styled.form``;
const Label = styled.label``;
const Input = styled.input`
  ${inputTextAreaColors}
`;

const TextArea = styled.textarea`
  ${inputTextAreaColors}
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
export default AddForm;
