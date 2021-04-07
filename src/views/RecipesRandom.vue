<template>
  <div class="recipes-random">
    <h1>{{ message }}</h1>
    <button v-on:click="getRandomRecipeFrontend()">Get random recipe (frontend)</button>
    <button v-on:click="getRandomRecipeBackend()">Get random recipe (backend)</button>
    
    <p>{{ randomRecipe.title }}</p>
    <p>{{ randomRecipe.ingredients }}</p>
    <p>{{ randomRecipe.directions }}</p>
    <p>{{ randomRecipe.prep_time }}</p>
    <img v-bind:src="randomRecipe.image_url">
    <p>{{ randomRecipe.image_url }}</p>
    <p>{{ randomRecipe.chef }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the random page",
      randomRecipe: {}
    };
  },
  created: function() {},
  methods: {
    getRandomRecipeFrontend: function() {
      console.log('getting recipe...');
      // get all the recipes from the db
      axios.get("/api/recipes").then(response => {
        console.log(response.data);
      // select one of them randomly using js
      // send them to the frontend
        this.randomRecipe = response.data[Math.floor(Math.random() * response.data.length)];
        console.log(this.randomRecipe);
      });
    },
    getRandomRecipeBackend: function() {
      console.log('random recipe backend...')
      // get one recipe from the db
      axios.get('/api/recipes/random').then(response => {
        console.log(response.data);
        this.randomRecipe = response.data;
      })
      // send it to the frontend
      // show that one recipe
    }
  }
};




</script>

