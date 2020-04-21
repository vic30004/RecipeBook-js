import styled from 'styled-components';

const inputTextAreaColors = `
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  padding:1rem;
  outline:none;
`;
export const FieldSet = styled.fieldset`
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : `5px`)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : `20px`};
  border: none;
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : 'none'};
  border-top: ${(props) => (props.borderTop ? props.borderTop : 'none')};
  input {
    width: ${(props) => (props.size ? props.size : '80px')};
  }
`;
export const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : `1rem`)};

  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: ${props=>props.padding? props.padding:''};

  label {
    width: ${(props) => (props.width ? props.width : '90px')};
    flex-shrink: 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-left: 10px;

  span {
    position: absolute;
    right: 35px;
    top: 0;
    line-height: 50px;
    padding-left: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #c4c4c4;
  width: 900px;
  height: 100%;
  margin: 2rem auto;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
  max-width: 800px;
  width: 100%;
`;
export const FormContainer = styled.form``;
export const Label = styled.label``;
export const Input = styled.input`
  ${inputTextAreaColors}
`;

export const Select = styled.select`
  height: 50px;
  border: solid 1px #d5d8da;
  border-radius: 2px;
  font-size: 16px;
  width: 130px;
`;

export const TextArea = styled.textarea`
  ${inputTextAreaColors}
  width:${(props) => (props.width ? props.width : '')};
`;

export const Container = styled.div`
         display: flex;
         flex-flow: column;
         max-width: 800px;
         padding: ${(props) => (props.padding ? props.padding : '1rem 0')};
         margin: ${props=>props.margin? props.margin:'0'};
         width: ${(props) =>
           props.containerWidth ? props.containerWidth : `100%`};

         input {
           width: ${(props) => (props.width ? props.width : `100px`)};
           font-size: 1rem;
         }
       `;
export const RemoveButton = styled.button`
         border: none;
         background: transparent;
         font-size: 1.5rem;
         margin: 0 0 0 1rem;
         cursor: pointer;
         color: #c4c4c4;
       `; 

export const AddButton = styled.button`
         width: 40%;
         border: none;
         background: transparent;
         cursor: pointer;
         font-size: 1.3rem;

         span {
           margin-right: 0.3rem;
         }

         &:hover {
           color: #c4c4c4;
         }
       `;
  ;
