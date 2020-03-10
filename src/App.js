import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

export default class App extends Component {
  state = {
    recipes: recipes,
    url: `https://www.food2fork.com/api/search?key=99cc272095d74e80e72cfd4dfaff234f`,
    details_id: 35389,
    pageIndex: 1
  };
  async getRecipes() {
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
    console.log(jsonData);

    this.setState(() => {
      return { recipes: jsonData.recipes };
    });
  }
  componentDidMount() {
    this.getRecipes();
  }
  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            handleDetails={this.handleDetails}
            recipes={this.state.recipes}
          />
        );
      case 0:
        return (
          <RecipeDetails
            handleIndex={this.handleIndex}
            id={this.state.details_id}
          />
        );
    }
  };
  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  render() {
    //console.log(recipes);
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}
