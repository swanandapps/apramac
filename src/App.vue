<template>
  <div id="app" >


<v-toolbar id="toolbar" height="105px"  card="false">




  <v-zoom :img="img" :width="width"></v-zoom>
    <v-toolbar-title id="title"><router-link to="/"><img id="apraimg"  src="https://firebasestorage.googleapis.com/v0/b/aprakrta-48342.appspot.com/o/Aprakrta_Logo_02.png?alt=media&token=8c209221-617f-427e-8ba5-8dd2e32b4e36"></router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">






    </v-toolbar-items>


  </v-toolbar>







<transition enter-active-class="animated fadeIn"  >
<router-view></router-view>
</transition>


  </div>


</template>

<script>

import { mapState } from "vuex";
export default {
  components: {
    icon: require("vue-icons"),
    
  },
  computed: mapState(["cartproducts"]),
  methods: {
    hello: function() {
      alert("hell0");
    }
  }
};
</script>


import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

<style scoped>
.line {
  width: 100%;
  height: 47px;
  border-bottom: 0.1px solid rgb(100, 100, 100);
  margin-top: -2%;
  -webkit-box-shadow: 0 #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 14px 16px -16px #222;
}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  color: #0e1316;
}
#apraimg {
  width: 51%;
  height: 86px;
}

#navhover:hover {
  background-color: #c44b49;
  color: white;
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
  font-family: "Josefin Sans", sans-serif;

  color: #2c3e50;
 
}

.item {
  margin-bottom: 3%;
}
#toolbar {
  box-shadow: 0 0 20px black;
  background-color: white;
}

@media screen and (max-width: 480px) {
  #toolbar {
    position: fixed;
    transform: translateY(-20px);
    background-color: white;
    z-index: 2000;
    width: 100%;
    top: -1%;
  }
  
  #title {
    margin-left: 18%;
  }
  #apraimg {
    width: 80%;
  }

  #navhover {
    display: none;
  }
}
</style>
