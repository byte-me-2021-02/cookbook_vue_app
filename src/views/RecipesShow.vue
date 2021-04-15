<template>
  <div class="recipes-show">
    <section>
      <header class="main">
        <h1>{{recipe.title}}</h1>
      </header>

      <span class="image main"><img v-bind:src="recipe.image_url" alt="" /></span>

      <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>

      <hr class="major" />

      <h2>{{recipe.ingredients}}</h2>
      
      

      <hr class="major" />

      <h2>Magna etiam veroeros</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>

      <hr class="major" />

      <h2>Lorem aliquam bibendum</h2>
      <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>

    </section>    
    <h1>{{ message }}</h1>
    <p><b>id:</b> {{ recipe.id }}</p>
    <p><b>title:</b> {{ recipe.title }}</p>
    <p><b>ingredients:</b> {{ recipe.ingredients }}</p>
    <p><b>directions:</b> {{ recipe.directions }}</p>
    <p><b>prep time:</b> {{ recipe.prep_time }}</p>
    <p><b>image url:</b> {{ recipe.image_url }}</p>
    <p><b>chef:</b> {{ recipe.chef }}</p>
    <p><b>user_id:</b> {{ recipe.user_id }}</p>
    <img v-bind:src="recipe.image_url">
    <br />
    <p>recipe.user_id: {{ recipe.user_id }}</p>
    <p>$parent.getUserId(): {{ $parent.getUserId() }}</p>
    <div v-if="recipe.user_id == $parent.getUserId()">
      <router-link v-bind:to="`/recipes/${this.$route.params.id}/edit`">Edit recipe</router-link>
      <br />
      <button v-on:click="deleteRecipe()">Delete the recipe</button>
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
