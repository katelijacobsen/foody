import { useParams } from "react-router";
import { recipes } from "../data/recipes";

export const RecipePage = () => {
  const { slug } = useParams();

	const recipe = recipes.find(recipe => recipe.slug === slug);

  return <div>Recipe</div>;
};
