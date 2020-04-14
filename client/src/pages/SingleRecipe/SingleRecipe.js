import React,{useEffect,useContext,Fragment} from 'react'
import RecipeContext from '../../components/context/recipes/RecipeContext'

const SingleRecipe = ({match}) => {
    const recipeContext = useContext(RecipeContext);
    const { getSingleRecipe,loading } = recipeContext;

    useEffect(() => {
        getSingleRecipe(match.params.id)
    },[])
    return (
        <div>
            hello
        </div>
    )
}

export default SingleRecipe
