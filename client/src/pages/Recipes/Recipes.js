import React, { Fragment } from 'react';
import './Recipes.css';
import Logo from '../../images/Logo.png';
import SearchBar from '../../components/SearchBar/SearchBar';
import Nav from '../../components/nav/Nav';
import RecipeItems from './RecipeItems';
export const Recipes = () => {
  const recipes = [
    {
      id:1,
      title: 'BBQ Chicken',
      cookTime: '25 min',
      description: 'A juicy chicken with BBQ sauce.',
      img:'https://images.unsplash.com/photo-1475869430886-fb14585f7443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ingredients: [
        '1lb chicken breast',
        '1cup BBQ sauce',
        '3 cloves garlic',
        '2tbs vegetable oil',
        'salt and peper'
      ],
      directions:
        "Cook chicken until browned on both sides, make sure to season with salt and pepper. Combine the sauce and the galic and add to chicken. Cook on low heat for another 15 minutes and that's it!"
    },
    {
      id:2,
        title: 'BBQ Chicken',
        cookTime: '25 min',
        description: 'A juicy chicken with BBQ sauce.',
        img:'https://images.unsplash.com/photo-1475869430886-fb14585f7443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        ingredients: [
          '1lb chicken breast',
          '1cup BBQ sauce',
          '3 cloves garlic',
          '2tbs vegetable oil',
          'salt and peper'
        ],
        directions:
          "Cook chicken until browned on both sides, make sure to season with salt and pepper. Combine the sauce and the galic and add to chicken. Cook on low heat for another 15 minutes and that's it!"
      },
      {
        id:3,
        title: 'BBQ Chicken',
        cookTime: '25 min',
        description: 'A juicy chicken with BBQ sauce.',
        img:'https://images.unsplash.com/photo-1475869430886-fb14585f7443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        ingredients: [
          '1lb chicken breast',
          '1cup BBQ sauce',
          '3 cloves garlic',
          '2tbs vegetable oil',
          'salt and peper'
        ],
        directions:
          "Cook chicken until browned on both sides, make sure to season with salt and pepper. Combine the sauce and the galic and add to chicken. Cook on low heat for another 15 minutes and that's it!"
      },
      {
        id:4,
        title: 'BBQ Chicken',
        cookTime: '25 min',
        description: 'A juicy chicken with BBQ sauce.',
        img:'https://images.unsplash.com/photo-1496074620649-6b1b02e5c1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
          '1lb chicken breast',
          '1cup BBQ sauce',
          '3 cloves garlic',
          '2tbs vegetable oil',
          'salt and peper'
        ],
        directions:
          "Cook chicken until browned on both sides, make sure to season with salt and pepper. Combine the sauce and the galic and add to chicken. Cook on low heat for another 15 minutes and that's it!"
      }
  ];
  return (
    <Fragment>
      <Nav />
      <div id='recipeSearch'>
   
        <header className='search-container'>
        <h1 className="title">Recipe Book</h1>
          <SearchBar />
          <button className="searchBtn">Search</button>
        </header>
      </div>

      <div id='results'>
        <div className='contaienr'>
        {recipes!==null? recipes.map(data=>(
            <RecipeItems key={data.id} recipe={data}/>
        )):''}
        </div>
      </div>
    </Fragment>
  );
};

export default Recipes;
