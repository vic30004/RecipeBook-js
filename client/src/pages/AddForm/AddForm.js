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
