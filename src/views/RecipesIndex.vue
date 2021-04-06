<template>
  <div class="recipes-index">
    <!-- recipes.each do |recipe| -->
    <div v-for="recipe in recipes">
      <router-link v-bind:to="`/recipes/${recipe.id}`">{{ recipe.title }}</router-link>
      <!-- <router-link v-bind:to="'/recipes/' + recipe.id">{{ recipe.title }}</router-link> -->
      <hr >
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Recipes index page",
      recipes: []
    };
  },
  created: function() {
    this.recipesIndex();
  },
  methods: {
    recipesIndex: function() {
      console.log('on the index paage...');
      // make a web request to rails to get all the recipes
      axios.get("/api/recipes").then(response => {
        console.log(response.data);
        this.recipes = response.data;
      })
    }
  }
};
</script>

