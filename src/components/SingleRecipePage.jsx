import { useParams } from "react-router-dom";

const SingleRecipePage = () => {
  const { recipeId } = useParams();
  return <div>Single Recipe Page for Recipe ID: {recipeId}</div>;
};

export default SingleRecipePage;
