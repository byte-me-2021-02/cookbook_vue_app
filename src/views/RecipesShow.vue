<template>
  <div class="recipes-show">
    <h1>{{ message }}</h1>
    <p><b>id:</b> {{ recipe.id }}</p>
    <p><b>title:</b> {{ recipe.title }}</p>
    <p><b>ingredients:</b> {{ recipe.ingredients }}</p>
    <p><b>directions:</b> {{ recipe.directions }}</p>
    <p><b>prep time:</b> {{ recipe.prep_time }}</p>
    <p><b>image url:</b> {{ recipe.image_url }}</p>
    <p><b>chef:</b> {{ recipe.chef }}</p>
    <img v-bind:src="recipe.image_url">
    <br />
    <router-link v-bind:to="`/recipes/${this.$route.params.id}/edit`">Edit recipe</router-link>
    <br />
    <button v-on:click="deleteRecipe()">Delete the recipe</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the show!",
      recipe: {}
    };
  },
  created: function() {
    // get data about an individual recipe from rails
    // params[:id]
    console.log(this.$route.params.id)
    // axios.get("/api/recipes/" + this.$route.params.id).then(response => {
    axios.get(`/api/recipes/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.recipe = response.data;
    })
  },
  methods: {
    deleteRecipe: function() {
      console.log('deleting recipe...');
      axios.delete(`/api/recipes/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.$router.push("/recipes")
      })
    }
  }
};
  // show the image
  // link from this page to the index page
  // link from the index page to this page
// route is bad
</script>
