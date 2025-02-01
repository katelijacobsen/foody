import { useNavigate } from "react-router";
import { Recipe } from "../schema/types";

type Props = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: Props) => {

  const navigate = useNavigate();

  return (
    <div className="w-40 h-48" onClick={() => navigate(`/opskrifter/${recipe.slug}`)}>
      <img
        className="object-cover w-full h-40 rounded-md shadow-md"
        src={recipe.url}
        alt={"Billede af " + recipe.title}
      />
      <p className="text-primary p-1 text-sm text-center bg-secondary rounded-xl mt-1">
        {recipe.title}
      </p>
    </div>
  );
};
