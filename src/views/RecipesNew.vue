<template>
  <div class="signup">
    <!-- chef
    ingredients
    directions 
    prep_time
    image_url
    title -->
    
    
    <form v-on:submit.prevent="submit()">
      <h1>Make a new Recipe</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>Chef:</label> 
        <input type="text" class="form-control" v-model="chef">
      </div>
      <div class="form-group">
        <label>Ingredients:</label>
        <input type="text" class="form-control" v-model="ingredients">
      </div>
      <div class="form-group">
        <label>Directions:</label>
        <input type="text" class="form-control" v-model="directions">
      </div>
      <div class="form-group">
        <label>Prep Time:</label>
        <input type="text" class="form-control" v-model="prepTime">
      </div>
      <div class="form-group">
        <label>Image Url:</label>
        <input type="text" class="form-control" v-model="imageUrl">
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
      chef: "",
      ingredients: "",
      directions: "",
      imageUrl: "",
      title: "",
      prepTime: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        chef: this.chef,
        ingredients: this.ingredients,
        directions: this.directions,
        image_url: this.imageUrl,
        title: this.title,
        prep_time: this.prepTime,
      };
      axios
        .post("/api/recipes", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/recipes");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

