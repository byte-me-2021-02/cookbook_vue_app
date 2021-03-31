<template>
  <div class="home">
    <!-- <h1>{{ errors }}</h1> -->
    <h3>Make a recipe</h3>
    <!-- <ul> -->
      <small v-for="error in errors">{{ error }} <br /></small>
    <!-- </ul> -->
    <p>
      chef:
      <input type="text" v-model="newRecipeChef" />
    </p>
    <p>
      title:
      <input type="text" v-model="newRecipeTitle" />
    </p>
    <p>
      ingredients:
      <input type="text" v-model="newRecipeIngredients" />
    </p>
    <p>
      directions:
      <input type="text" v-model="newRecipeDirections" />
    </p>
    <p>
      prep time:
      <input type="text" v-model="newRecipePrepTime" />
    </p>
    <p>
      image url:
      <input type="text" v-model="newRecipeImageUrl" />
    </p>
    <button v-on:click="recipesCreate">Create the recipe</button>
    <div v-for="recipe in recipes">
      <p>{{ recipe.title }}</p>
      <p><button v-on:click="recipesShow(recipe)">More info</button></p>
      <img v-bind:src="recipe.image_url" />
      <hr />
    </div>
    <dialog id="recipe-details">
      <form method="dialog">
        <h2>Here will be some info about the recipe</h2>
        <p>Title: <input type="text" v-model="currentRecipe.title"></p>
        <p>ingredients: <input type="text" v-model="currentRecipe.ingredients"></p>
        <p>directions: <input type="text" v-model="currentRecipe.directions"></p>
        <p>prep_time: <input type="text" v-model="currentRecipe.prep_time"></p>
        <p>image_url: <input type="text" v-model="currentRecipe.image_url"></p>
        <p>chef: <input type="text" v-model="currentRecipe.chef"></p>
        <button v-on:click="recipesUpdate(currentRecipe)">Update</button>
        <button>Close</button>
        <button v-on:click="recipesDestroy(currentRecipe)">Destroy</button>
      </form>
    </dialog>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "change!!",
      recipes: [],
      newRecipeChef: "",
      newRecipeTitle: "",
      newRecipeIngredients: "",
      newRecipeDirections: "",
      newRecipePrepTime: "",
      newRecipeImageUrl: "",
      currentRecipe: {},
      errors: []
    };
  },
  created: function() {
    console.log("in created");
    this.recipesIndex();
  },
  methods: {
    recipesIndex: function() {
      console.log("in recipes index");
      // get data from the api, then show that data to the user
      axios.get("http://localhost:3000/api/recipes").then(response => {
        console.log(response.data);
        this.recipes = response.data;
      });
    },
    recipesCreate: function() {
      console.log("recipes create...");
      // make a post request to the api
      console.log(this.newRecipeChef);

      var params = {
        title: this.newRecipeTitle,
        ingredients: this.newRecipeIngredients,
        directions: this.newRecipeDirections,
        prep_time: this.newRecipePrepTime,
        image_url: this.newRecipeImageUrl,
        chef: this.newRecipeChef,
      };
      axios.post("http://localhost:3000/api/recipes", params).then(response => {
        console.log(response.data);
        this.recipes.push(response.data);
        this.newRecipeChef = "";
        this.newRecipeTitle = "";
        this.newRecipeIngredients = "";
        this.newRecipeDirections = "";
        this.newRecipePrepTime = "";
        this.newRecipeImageUrl = "";
        this.errors = [];
      }).catch(error => {
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    },
    recipesUpdate: function(theRecipe) {
      console.log(theRecipe);
      var params = {
        chef: theRecipe.chef, 
        title: theRecipe.title,
        ingredients: theRecipe.ingredients,
        directions: theRecipe.directions,
        prep_time: theRecipe.prep_time,
        image_url: theRecipe.image_url,
      };
      axios.patch("/api/recipes/" + theRecipe.id, params).then(response => {
        console.log(response.data);
      })
    },
    recipesShow: function(theRecipe) {
      console.log("showing recpie....");
      console.log(theRecipe);
      this.currentRecipe = theRecipe;
      document.querySelector("#recipe-details").showModal();
    },
    recipesDestroy: function(theRecipe) {
      console.log(theRecipe);
      axios.delete("/api/recipes/" + theRecipe.id).then(response => {
        console.log(response.data);
        var index = this.recipes.indexOf(theRecipe);      
        this.recipes.splice(index, 1);        
      })
    }
  },
};
</script>
