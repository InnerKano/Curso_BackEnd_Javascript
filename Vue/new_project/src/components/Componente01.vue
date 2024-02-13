<template>
    <div id="grid_comp1" class="ContenedorGrid" style="border-style: dotted;">
        <h2 id="h2">Componente 01</h2>
        <section id="S1">        
            <p>Variable de texto:{{ vtext }}</p>
            <p>Variable de lista:{{ vlist }}</p>
            <p>Posicion de una lista: {{ vlist[2] }} </p>
            <p>Variable de numero:{{ vnum }}</p>
            <p>Variable de objeto(atrib1):{{ vobj.atrib1 }}</p>
            <p>Variable de objeto(atrib2):{{ vobj.atrib2 }}</p>
            <p>Variable de objeto(resta):{{ vobj.atrib2 - vobj.atrib1.value }}</p>
        </section>  
        
        <section id="S2">
            <p>Modificar el valor del Atributo 1:</p>
            <button @click="aumentar()">Aumentar atributo 1</button><br/><br/>
            <button @click="disminuir()">Disminuir atributo 1</button><br/><br/>
            
        </section>
    </div>
</template>






<script>
import {ref} from 'vue';

export default {
    setup() {
        let vtext = "texto";
        let vlist = ["Uno",'dos', 3];
        let vnum = 5000;
        let vobj = {
            atrib1: ref(100),
            atrib2: 200
        };
        //FUNCIONES
        var aumentar = function(){
            vobj.atrib1.value++;
        }

        var disminuir = function(){
            vobj.atrib1.value--;
        }

        

        return {
            vtext,
            vlist,
            vnum,
            vobj,
            aumentar,
            disminuir
        };
    },
};

    

</script>







<style>
    h2 {
        grid-area: H2;
        color: black;
    }

    section{
        margin: 10px;
        padding: 10px;
    }

    #S1{
        grid-area: S1;
    }

    #S2{
        grid-area: S2;
    }


    #grid_comp1 {
        width: 95%;   
        margin: 10px; 
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, 33.33%);
        grid-template-rows: repeat(2, auto);
        grid-template-areas:    "H2 H2 H2"
                                "S1 S1 S2";  
    }


</style>