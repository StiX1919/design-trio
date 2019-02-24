<template>
  <div id="app">
    <div id="nav">
      <div class="nav-container"> 
        <router-link 
          v-for="route in routes" 
          :key='route'
          :to="`/${route === 'Static' ? '' : route.toLowerCase() }`" 
        >
          {{route}}
        </router-link>
      </div>
    </div>

    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'scrolling',
  components: {
  },

  data(){
    return {
      routes: ['Static', 'Complex', 'Dynamic']
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100%;
  height: 50px;
  
  display: flex;
  justify-content: center;
}
.nav-container {
  width: 50%;

  display: flex;
  justify-content: space-around
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  margin: 0
}
h2 {
  margin: 0
}
h3 {
  margin: 0
}
h4 {
  margin: 0
}
h5 {
  margin: 0
}
</style>
