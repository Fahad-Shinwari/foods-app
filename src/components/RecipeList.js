import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  render() {
    const { recipes, handleDetails } = this.props;
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            {recipes.map(recipe => {
              return (
                <Recipe
                  handleDetails={handleDetails}
                  key={recipe.recipe_id}
                  recipe={recipe}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
