<template>
  <div id="grid" class="ContenedorGrid">
    <header>
      <h1>PROYECTO EN VUE</h1>
    </header>
    <nav>
      <ul>
        <li><a class="nav" href="#" @click.prevent="$emit('navigate', 'home')">Inicio</a></li>
        <li><a class="nav" href="#" @click.prevent="$emit('navigate', 'about')">Acerca de...</a></li>
      </ul>
    </nav>
    <main>
      <componente-01/>
    </main>
  </div>
</template>







<script>
  import Componente01 from './components/Componente01.vue';

  export default {
    components: {
      Componente01
    }
    
  }
</script>








<style scoped>
  
  header {
    grid-area: H;
    text-align: center;
    
  }

  h1 {
    font-size: 40px;
    color: green;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    list-style-type: none;
  }

  nav{
    text-align: center;
    grid-area: N;  
    
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  li {
    
  }
  .nav{
    color: black;
  }
  
  main{
    grid-area: M;
  }
  #grid {
    background-image: linear-gradient(to left,rgba(43, 255, 0, 0.39),rgba(255, 166, 0, 0.589));
    height: 100%;
    width: 100%;
    margin: 0px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "H H H H"
      "N N N N"
      "M M M M"
      "M M M M"
      "F F F F";
  }



</style>
