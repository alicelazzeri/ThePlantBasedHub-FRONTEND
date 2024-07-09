import React from "react";
import { Table, Image, Button } from "react-bootstrap";
import unavailable from "../assets/images/unavailable-recipe.png";
import { BsTrash3Fill } from "react-icons/bs";

const FavouritesTable = () => {
  const recipes = [
    {
      id: 1,
      image: "",
      name: "Vegan Pancakes",
      category: "Breakfast",
    },
    {
      id: 2,
      image: "",
      name: "Quinoa Salad",
      category: "Lunch",
    },
    {
      id: 3,
      image: "",
      name: "Tofu Stir Fry",
      category: "Dinner",
    },
  ];

  return (
    <Table hover className="favTable" responsive="sm">
      <thead className="tHead">
        <tr>
          <th></th>
          <th>Recipe Name</th>
          <th>Recipe Category</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {recipes.map(recipe => (
          <tr key={recipe.id} className="tableRow">
            <td>
              <Image
                src={recipe.image || unavailable}
                alt={recipe.name}
                className="rounded-circle recipeImg"
                width={100}
                height={100}
              />
            </td>
            <td>{recipe.name}</td>
            <td>{recipe.category}</td>
            <td></td>
            <td>
              <Button className="deleteBtn">
                <BsTrash3Fill />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FavouritesTable;
