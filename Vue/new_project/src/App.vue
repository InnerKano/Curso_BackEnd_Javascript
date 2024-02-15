<template>
  <div id="grid" class="ContenedorGrid">
    <header>
      <h1>PROYECTO EN VUE</h1>
    </header>
    <nav>
      <ul>
        <li><a class="nav" href="#" @click.prevent="$emit('navigate', 'home')">Inicio</a></li>
        <li><a class="nav" href="#" @click.prevent="$emit('navigate', 'about')">Acerca de...</a></li>
        <li><a class="nav" href="#" @click.prevent="$emit('navigate', 'img')">Imagenes</a></li>
        
      </ul>
    </nav>
    <main>
      <componente-01 :parametro="parametro" :parametro_num1="parametro_num1" :parametro_num2="parametro_num2"/>
    </main>
  </div>
</template>







<script>
  import Componente01 from './components/Componente01.vue';

  export default {
    components: {
      Componente01
    },
    setup(){
      let parametro = "Este es un parametro"
      let parametro_num1 =  5;
      let parametro_num2 = 10;
      
      return{
        parametro,
        parametro_num1,
        parametro_num2,
      };
    },
    
  };
</script>








<style scoped>
  
  header {
    grid-area: H;
    text-align: center;
    
  }

  h1 {
    font-size: 40px;
    color: rgb(0, 104, 0);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    list-style-type: none;
  }

  nav{
    text-align: center;
    grid-area: N;
  }

  a{
    text-decoration: none;
    align-items: ;
    color: black;
    margin: 5%;
    padding: 8px;
    
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  li {
    
  }

  
  main{
    grid-area: M;
  }

  #grid {
    background-image: linear-gradient(to left,rgba(31, 184, 0, 0.473),rgba(182, 118, 0, 0.589));
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
