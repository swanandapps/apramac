<template>
  <div id="app" >




<el-row style="text-align:center;">

<router-link to="/"><img alt="image" id="apraimg"  src="../src/assets/LOGOforWebsite.jpg"></router-link>


</el-row>



<transition enter-active-class="animated fadeIn"  >
<router-view></router-view>
</transition>


  </div>


</template>

<script>

import { mapState } from "vuex";
export default {
 
  computed: mapState(["cartproducts"]),

  methods: {

},
 
};



</script>




<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  color: #0e1316;
}
a:active, a:focus {
  outline: 0;
 
  -moz-outline-style: none;
}

#navhover:hover {
  background-color: #c44b49;
  color: white;
}
#snackbar{
 width: 100%;
height: 50px;
}

#snackbar p{

       z-index: 2000;
    background-color: black;
    bottom: 17%;
    /* width: 84%; */
    width: 100%;
    color: white;
    position: fixed;
    height: 38px;
    /* text-align: center; */
    font-size: 88%;
    padding-top: 2%;
    padding-left: 3%;
}
    


a {
  text-decoration: none;
}

#title {
  margin-left: 38%;
}
#el-menu {
  background-color: white;
}

#app {
  font-family: 'Cantarell', sans-serif;

  color: #2c3e50;
 
}
  #apraimg {
    width: 15%;

    margin-top: 1%;
      height: 86px;
}

.item {
  margin-bottom: 3%;
}
#toolbar {
  box-shadow: 0 0 20px black;
  background-color: white;
}

@media screen and (max-width: 360px) {
  #toolbarnew {
    position: fixed;
   
    background-color: white;
    z-index: 2000;
    width: 100%;
    top: -1%;
  }
  
  #title {
    margin-left: 18%;
  }
  #apraimg {
    width: 71%;
    padding-top: 3%;
    /* padding-left: 4%; */
    margin-left: 6%;
    height: 86px;

  }

  #navhover {
    display: none;
  }
}

@media screen and (min-width: 361px) and (max-width: 500px) {

    #apraimg {
    width: 65%;

    margin-top: 2%;
      height: 86px;
}
  
}
@media screen and (min-width: 501px) and (max-width: 720px) {

    #apraimg {
    width: 45%;

    margin-top: 2%;
      height: 86px;
}
  
}

@media screen and (min-width: 721px) and (max-width: 900px) {

    #apraimg {
    width: 28%;

    margin-top: 2%;
}
  
}

@media screen and (min-width: 901px) and (max-width:1024px) {
  
    #apraimg {
    width: 28%;
   
    margin-top: 2%;
    /* padding-left: 4%; */
}
}

</style>
