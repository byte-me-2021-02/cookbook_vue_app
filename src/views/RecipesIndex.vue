<template>
  <div class="recipes-index">
    <!-- recipes.each do |recipe| -->
    <br />
      
    <div class="row">
      <div class="col-sm-4" v-for="recipe in recipes">
        <div class="card">
           <img style="width: 200px" v-bind:src="recipe.image_url" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <br />
        <br />
      </div>
      
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

