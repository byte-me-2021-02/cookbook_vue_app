<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>Make a recipe</h3>
    <p>chef: <input type="text" v-model="newRecipeChef"></p>
    <p>title: <input type="text" v-model="newRecipeTitle"></p>
    <p>ingredients: <input type="text" v-model="newRecipeIngredients"></p>
    <p>directions:<input type="text" v-model="newRecipeDirections"></p>
    <p>prep time: <input type="text" v-model="newRecipePrepTime"></p>
    <p>image url: <input type="text" v-model="newRecipeImageUrl"></p>
    <button v-on:click="recipesCreate">Create the recipe</button>
    <div v-for="recipe in recipes">
      <p>{{ recipe.title }}</p>
      <img v-bind:src="recipe.image_url">
      <hr>
    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from 'axios';

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
    };
  },
  created: function() {
    console.log('in created');
    this.recipesIndex();
  },
  methods: {
    recipesIndex: function() {
      console.log('in recipes index');
      // get data from the api, then show that data to the user
      axios.get("http://localhost:3000/api/recipes").then(response => {
        console.log(response.data);
        this.recipes = response.data;
      });
    },
    recipesCreate: function() {
      console.log('recipes create...')
      // make a post request to the api
      console.log(this.newRecipeChef);
      
      var params = {
        title: this.newRecipeTitle,
        ingredients: this.newRecipeIngredients,
        directions: this.newRecipeDirections,
        prep_time: this.newRecipePrepTime,
        image_url: this.newRecipeImageUrl,
        chef: this.newRecipeChef
      }
      axios.post("http://localhost:3000/api/recipes", params).then(response => {
        console.log(response.data);
        this.recipes.push(response.data);
        this.newRecipeChef =  "";
        this.newRecipeTitle =  "";
        this.newRecipeIngredients =  "";
        this.newRecipeDirections =  "";
        this.newRecipePrepTime =  "";
        this.newRecipeImageUrl =  "";      
      });
    }
  }
};
</script>

