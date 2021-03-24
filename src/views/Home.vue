<template>
  <div class="home">
    <h1>{{ message }}</h1>
    {{ recipes }}
  </div>
</template>

<style></style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      message: "change!!",
      recipes: []
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
      });
    }
  }
};
</script>

