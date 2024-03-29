import React, { useState, useEffect,useContext } from 'react';
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
import RecipeContext from '../../components/context/recipes/RecipeContext';
import AuthContext from '../../components/context/auth/AuthContext';
import Nav from '../../components/nav/Nav'
const AddForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    serving: '',
    picture: [],
  });

  const recipeContext = useContext(RecipeContext);
  const authContext = useContext(AuthContext);

  const {addRecipe} = recipeContext

  const [prepTime, setPrepTime] = useState({
    hours: 0,
    minutes: 0,
  });
  const [cookTime, setcookTime] = useState({
    hours: 0,
    minutes: 0,
  });
  const [pri, setPri] = useState(false);

  const handlePrivate = () => {
    if (pri) {
      setPri(false);
    } else {
      setPri(true);
    }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     addRecipe({
  //       title,
  //       cookTime,
  //       directions,
  //       ingredients,
  //       description,
  //       picture,
  //     });
  //     props.history.push('/recipes');
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const { title, description, serving, picture } = formData;
  const { hours, minutes } = prepTime;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrepTime = (e) => {
    setPrepTime({ ...prepTime, [e.target.name]: e.target.value });
  };
  const handleCookTime = (e) => {
    setcookTime({ ...cookTime, [e.target.name]: e.target.value });
  };

  const [directions, setDirections] = useState([
    { direction: '' },
    { direction: '' },
  ]);

  const [ingredient, setIngredient] = useState([
    { qt: '', measure: '', item: '' },
    { qt: '', measure: '', item: '' },
    { qt: '', measure: '', item: '' },
  ]);

  const handleImage = (e) => {
    e.preventDefault();
    setFormData({ ...formData, picture: [e.target.files[0]] });
  };
  const turnIngredientsToArray = (arr) => {
    const res = [];
    arr.map((data) => {
      const { qt, measure, item } = data;
      res.push(`${qt} ${measure} ${item}`);
    });
    console.log(res)
    return res;
  };
  
  const turnTimeToString = (obj) => {
    let res = ''
    
    if (typeof obj.hours !== "string" && typeof obj.minutes !== "string") {
      if (obj.hours === 0) {
        res = `${obj.minutes.toString()} minutes`
      } else {
        res = `${obj.hours.toString()}hours ${obj.minutes.toString()}minutes`
      }
        
    } else {
            if (obj.hours === 0) {
              res = `${obj.minutes} minutes`;
            } else {
              res = `${obj.hours}hours ${obj.minutes}minutes`;
            }
    }
    return res
  }
turnTimeToString(prepTime)
  const submitForm = (e) => {
    e.preventDefault();
    const finalIngredient = turnIngredientsToArray(ingredient);
    console.log(finalIngredient);
    const prep = turnTimeToString(prepTime)
    const cookT = turnTimeToString(cookTime)
   try {
     addRecipe({
       finalIngredient,
       directions,
       prep,
       cookT,
       pri,
       picture,
       serving,
       description,
       title,
     });
   } catch (error) {
     console.log(error)
   }
  };

  return (
    <Wrapper>
      <Nav/>
      <Container>
        <Title>Add A New Recipe</Title>

        <FormContainer onSubmit={submitForm}>
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
              <Row width={'90px'}>
                <Label>Cusisine:*</Label>
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
                    <Input
                      type='number'
                      name={'hours'}
                      value={cookTime.hours}
                      onChange={(e) => handleCookTime(e)}
                    ></Input>
                    <span>hrs</span>
                  </InputContainer>
                  <InputContainer>
                    <Input
                      type='number'
                      name={'minutes'}
                      value={cookTime.minutes}
                      onChange={(e) => handleCookTime(e)}
                    ></Input>
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
                <CheckBox
                  type='checkbox'
                  name='pri'
                  value={pri}
                  onChange={handlePrivate}
                  id=''
                />
                <Container width='100px'>
                  <Label htmlFor=''>Picture</Label>
                  <Input
                    type='file'
                    name='picture'
                    id='pic'
                    style={{ width: '300px' }}
                    onChange={(e) => handleImage(e)}
                  />
                </Container>
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
