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
            <p>Variable parametro:{{ parametro }}</p>
            <p>Variable parametro num2 - num1: {{ parametro_num2 }} -  {{ parametro_num1 }} = {{ parametro_num2 - parametro_num1 }}</p>
        </section>  
        
        <section id="S2">
            <p>Modificar el valor del Atributo 1:</p>
            <button class="button-3" role="button" @click="aumentar()">Aumentar atributo 1</button><br/><br/>
            <button class="button-3" role="button" @click="disminuir()">Disminuir atributo 1</button><br/><br/>
            
        </section>

        <section id="S3">
            <p> Lista: <br><br>
                <span v-for="(item, index) in vlist" :key = "index">{{ index }} : {{ item }}<br></span>
            </p>

            <p>
                Uso del <b>v -for</b> para mostrar la misma lista  como una lista "ul" de html:
            </p>
            <ul>
                <li v-for="(item, index) in vlist" :key="index">{{ index }} : {{ item }}<br></li>
            </ul>

            <template v-for="(item, index) in vlist" :key="index">
                <button>{{ item }}</button><br>
            </template>
        </section>

        <section id="S4">
            <p>
                Uso del  <b>v-if v-else v-else-if</b> para mostrar datos de un vector de numeros:
            </p>
            <p>
                Numero menores y mayores de un valor central (200):<br><br>
            </p>
            <ol>
                <template v-for="(num,index) in vector" :key="index">
                    <li v-if="num < 200">Menor: {{ num }}</li>
                    <li v-else-if="num === 200">Valor central: {{ num }}</li>
                    <li v-else>Mayor: {{ num }}</li>
                </template>
            </ol>

        </section>

    </div>
</template>






<script>
import {ref} from 'vue';

export default {
    props:{
        parametro: {
            type: String,
            default:"warning",
        },
        parametro_num1: {
            type: Number,
            default:"warning",
        },
        parametro_num2: {
            type: Number,
            default:"warning",
        },
    },

    setup(props) {
        let vtext = "texto";
        let vlist = ["Uno",'dos', 3];
        let vnum = 5000;
        let vobj = {
            atrib1: ref(100),
            atrib2: 200
        };
        let vector = [1,50,100,150,200,250,300,350,400]

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
            disminuir,
            vector
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
    #S3{
        grid-area: S3;
    }

    #S4{
        grid-area: S4;
    }

    /* BUTTON CSS */
    .button-3 {
    appearance: none;
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    }

    .button-3:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
    }

    .button-3:hover {
    background-color: #2c974b;
    }

    .button-3:focus {
    box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
    outline: none;
    }

    .button-3:disabled {
    background-color: #94d3a2;
    border-color: rgba(27, 31, 35, .1);
    color: rgba(255, 255, 255, .8);
    cursor: default;
    }

    .button-3:active {
    background-color: #298e46;
    box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }

    
    #grid_comp1 {
        width: 95%;   
        margin: 10px; 
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, 33.33%);
        grid-template-rows: repeat(2, auto);
        grid-template-areas:    "H2 H2 H2"
                                "S1 S1 S2"
                                "S3 S3 S4";  
    }


</style>