import { RecipeCard } from "../components/RecipeCard";
import { recipes } from "../data/recipes";

export const Home = () => {
  return (
    <div className="flex gap-x-2 gap-y-8 flex-wrap w-full">
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
};
