<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/recipes">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/recipes/new">New Recipe</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Authentication
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/login">Login</a></li>
                <li v-if="isLoggedIn()"><a class="dropdown-item" href="/logout">Logout</a></li>
                <li><hr class="dropdown-divider"></li>
                <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/signup">Signup here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>    
    
    <div class="container">
      <p v-if="isLoggedIn()">I am logged in</p>
      <p>User Id: {{ getUserId() }}</p>
      <router-view/>
    </div>
  </div>
</template>

<style>
/* #app {
  background-image: url('./assets/purty_wood.png');
  font-family: Futura,"Trebuchet MS",Arial,sans-serif;

} */


/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
  export default {
    methods: {
      isLoggedIn: function() {
        console.log('logged in');
        if (localStorage.getItem("jwt")) {
          return true;
        } else {
          return false;
        }
      },
      getUserId: function() {
        return localStorage.getItem("user_id");
      }
    }
  }
</script>