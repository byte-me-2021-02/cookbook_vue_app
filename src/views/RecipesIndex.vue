<template>
  <div class="recipes-index">
    <!-- recipes.each do |recipe| -->
    <p>Search: <input type="text" v-model="searchTerm"></p>
    <br />
      
    <div class="row">
      <!-- <div class="col-sm-4" v-for="recipe in orderBy(recipes, 'prep_time', -1)"> -->
      <div class="col-sm-4" v-for="recipe in filterBy(recipes, searchTerm, 'title')">
        <div class="card">
           <img style="width: 200px" v-bind:src="recipe.image_url" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{recipe.title}}</h5>
            <p class="card-text">{{recipe.directions}}.</p>
            <p class="card-text">{{recipe.prep_time}}.</p>
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Recipes index page",
      recipes: [],
      searchTerm: ""
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

