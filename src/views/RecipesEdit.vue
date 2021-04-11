<template>
  <div class="recipes-edit">
    <!-- chef
    ingredients
    directions 
    prep_time
    image_url
    title -->
    
    
    <form v-on:submit.prevent="submit()">
      <h1>Edit a recipe</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="recipe.title">
      </div>
      <div class="form-group">
        <label>Chef:</label> 
        <input type="text" class="form-control" v-model="recipe.chef">
      </div>
      <div class="form-group">
        <label>Ingredients:</label>
        <input type="text" class="form-control" v-model="recipe.ingredients">
      </div>
      <div class="form-group">
        <label>Directions:</label>
        <input type="text" class="form-control" v-model="recipe.directions">
      </div>
      <div class="form-group">
        <label>Prep Time:</label>
        <input type="text" class="form-control" v-model="recipe.prep_time">
      </div>
      <div class="form-group">
        <label>Image Url:</label>
        <input type="text" class="form-control" v-model="recipe.image_url">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipe: {},
      errors: []
    };
  },
  created: function() {
    axios.get(`/api/recipes/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      // this.chef = response.data.chef;
      // this.ingredients = response.data.ingredients;
      // this.directions = response.data.directions;
      // this.prepTime = response.data.prep_time;
      // this.imageUrl = response.data.image_url;
      // this.title = response.data.title;
      this.recipe = response.data;
      // this.recipe = response.data;
    })    
  },
  methods: {
    submit: function() {
      var params = {
        chef: this.recipe.chef,
        ingredients: this.recipe.ingredients,
        directions: this.recipe.directions,
        image_url: this.recipe.image_url,
        title: this.recipe.title,
        prep_time: this.recipe.prep_time,
      };
      axios
        .patch("/api/recipes/" + this.$route.params.id, params)
        .then(response => {
          console.log(response.data);
          this.$router.push(`/recipes/${this.$route.params.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

