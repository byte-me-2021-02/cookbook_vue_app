<template>
  <div class="recipes-index">
    	<!-- Banner -->
    <section id="banner">
      <div class="content">
        <header>
          <h1>This is a very cool application<br />
          about eating in</h1>
          <p>A free and fully responsive site template</p>
        </header>
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
        <ul class="actions">
          <li><a href="#" class="button big">Learn More</a></li>
        </ul>
      </div>
      <span class="image object">
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" alt="" />
      </span>
    </section>


  <p>Search: <input type="text" v-model="searchTerm"></p>
  <p><input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" /></p>

  <!-- Section -->
    <section>
      <header class="major">
        <h2>Ipsum sed dolor</h2>
      </header>
      <div class="posts">
        
        <article v-for="recipe in filterBy(recipes, searchTerm, 'title')">
          <a href="#" class="image"><img v-bind:src="recipe.image_url" alt="" /></a>
          <h3>{{recipe.title}}</h3>
          <p>{{recipe.directions}}.</p>
          <ul class="actions">
            <li><a v-bind:href="`/recipes/${recipe.id}`" class="button">More</a></li>
          </ul>
        </article>

      </div>
    </section>

    
    <!-- recipes.each do |recipe| -->
    <p>Search: <input type="text" v-model="searchTerm"></p>
    <br />
      
   
    
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

