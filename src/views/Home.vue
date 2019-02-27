<template>
<div>


<div style="width:100%;display:flex;margin-top:5%">

  <div style="width:40%;margin-left:5%">
   <el-select style="    width: 100%;border: solid;" size="large" v-model="value" placeholder="Select Product Category">
   <router-link to="/store" > <el-option
>
    Home Decor
    </el-option>
   </router-link>
     <router-link to="/store" >
        <el-option
>
Sculpture
    </el-option>
     </router-link>
     <router-link to="/store" >
        <el-option
>
Paintings
    </el-option>
     </router-link>
     <router-link to="/store" >
        <el-option
> Pottery
    </el-option>
     </router-link>
  </el-select>

  </div>
 

 <div style="width:40%;margin-left:5%">
  <el-select style="    width: 100%;border: solid;" size="large" v-model="value" placeholder="About Aprakrta">
   
   
    <el-option
    >
    Aprakrta Design
    </el-option>

    <router-link to="/services" >
     <el-option
    >
    Aprakrta Services
    </el-option>
    </router-link>
  </el-select>
        </div>
</div>


     
 <!--     
 <el-menu  id="el-menu2" class="el-menu-demo" mode="horizontal" >
<div id="row2" style="width:100%">
<router-link to="/store" ><el-menu-item id="navhover-exception">Paintings</el-menu-item></router-link>
<router-link to="/store" > <el-menu-item id="navhover2" >Sculpture</el-menu-item></router-link>
<router-link to="/store" ><el-menu-item id="navhover2"  >Home Decor</el-menu-item></router-link>
<router-link to="/store" ><el-menu-item id="navhover2" >Pottery</el-menu-item></router-link>
<router-link to="/services" ><el-menu-item id="navhover2" >Aprakrta Services</el-menu-item></router-link>
</div>
 </el-menu>

-->





<el-row id="row3" style="    margin-top: 2%;">
        <p style="text-align:center;font-size:100%;margin-top:2%;">Enhance the Dead Corners of your Home, Accentuate the Ambiance, Make a Statement</p>
</el-row>

<div id="home-img" style="margin-top:2%;">
           <!--  <img id="homeimg" style="height:500px" src="../assets/Modern-Art.jpg">-->


    <el-carousel  :interval="2500"  id="carousel">
      <el-carousel-item id="carousel-img"  v-for="item in 3" :key="item">


      </el-carousel-item>


    </el-carousel>
    <section v-scroll-reveal.reset>
      <div id="home-buttons" >
        <router-link to="/store"><el-button id="shopnow"  large>Shop Now</el-button></router-link>
         <el-button v-scroll-to="'#apra-row'"  id="knowmore" large>About Aprakrta</el-button>


</div>
</section>
</div>

<h1 id="featured"   >Featured Categories</h1>

<el-row style="width:100%;display:flex;margin-top:10%">

<el-col style="margin-top:0%;width: 80%;border: white solid 5px;">

      <img id="newhome" src="https://firebasestorage.googleapis.com/v0/b/aprakrta-48342.appspot.com/o/3.jpg?alt=media&token=e909ae2f-298d-4395-991d-036143213305">
<router-link to="/store" >
<v-btn id="newhomebtn"> Indoor Landscape</v-btn></router-link>
</el-col>


<el-row id="newhomerow" style="width:60%">

<el-col   style="margin-top:0%;    border-bottom: white solid 5px;margin-top: 0.8%;    border-right: solid white 5px;">


      <img id="newhome2"  src="https://firebasestorage.googleapis.com/v0/b/aprakrta-48342.appspot.com/o/ANK537_8847a.jpg?alt=media&token=d7f79168-c618-40de-97e2-f0c3728ab94a">
<router-link to="/store" ><v-btn id="newhomebtn2" >  POTTERY</v-btn></router-link>
</el-col>

<el-col  style="margin-top:0%">

        <img id="newhome3" src="https://firebasestorage.googleapis.com/v0/b/aprakrta-48342.appspot.com/o/KK18.jpg?alt=media&token=a9bcbeb3-9f0c-4f32-8c22-3a8cbf6aab2b" >
<router-link  to="/store" ><v-btn id="newhomebtn3"> Paintings</v-btn></router-link>

</el-col>



</el-row>


</el-row>



<!--
<h1 id="featured"   >Featured Categories</h1>



<el-row   height="300px">
  <el-col class=" wow animated fadeIn" data-wow-duration="2s" :span="12"><div class="grid-content" id="two-grid">
    <img onContextMenu="return false;" id="two-grid-img" src="../assets/_A8A9673.jpg">
<router-link to="/store"><el-button  id="grid-btn" large>Indoor Landscape Products </el-button></router-link>

    </div></el-col>
  <el-col class=" wow animated fadeIn" data-wow-duration="2s" :span="12"><div class="grid-content" id="two-grid2">
    <img onContextMenu="return false;" id="two-grid2-img" src="../assets/2.jpg">
<router-link to="/store"><el-button  id="grid-btn2" large>Paintings</el-button></router-link>
    </div>


    </el-col>

</el-row>
-->
<div>

    <h1 id="featured2">Explore Products</h1>

</div>
<el-row   id="el-row" :gutter="20" >
  <el-col :span="8" style="padding:0px;        height: 452px;" ><div  id="grid-content" class="grid-content bg-purple">
       <img style="        height: 452px;" id="grid-content" class=" wow animated slideInLeft" data-wow-duration="2s" onContextMenu="return false;"  src="../assets/bottle.jpg"></div></el-col>
  <el-col  :span="8" style="padding:0px"><div id="grid-content" class="grid-content bg-purple-light">
       <img id="grid-content" class=" wow animated slideInLeft" data-wow-duration="2s" onContextMenu="return false;" src="../assets/14.jpg"></div></el-col>
  <el-col :span="8" style="padding:0px"><div id="grid-content" class="grid-content bg-purple">
       <img id="grid-content" class=" wow animated slideInLeft" data-wow-duration="2s" onContextMenu="return false;" src="../assets/20.jpg"></div></el-col>
        <el-col :span="8" style="padding:0px;        height: 452px;" ><div id="grid-content" class="grid-content bg-purple">
       <img id="grid-content" style="        height: 452px;" class=" wow animated slideInRight" data-wow-duration="2s" onContextMenu="return false;"  src="../assets/DS.jpg"></div></el-col>
  <el-col :span="8" style="padding:0px"><div id="grid-content" class="grid-content bg-purple-light">
       <img id="grid-content" class=" wow animated slideInRight" data-wow-duration="2s" onContextMenu="return false;" src="../assets/16.jpg"></div></el-col>
  <el-col :span="8" style="padding:0px;"><div id="grid-content" class="grid-content bg-purple">
       <img id="grid-content"  onContextMenu="return false;" class=" wow animated slideInRight" data-wow-duration="2s"  src="../assets/19.jpg"></div></el-col>
</el-row>
<div id="about">

<el-row id="apra-row">
         <h1 id="about-heading" style="color:white;margin-top:8%;">What is Aprakrta</h1>
        <img onContextMenu="return false;" class="img-test" src="../assets/apraowner.jpeg" id="owner-img"><br>
        <p id="owner-name">Nivedita Bachhav Gawande</p>
        <p id="owner-p" >Founder, Aprakrta</p>

   <p id="about-para"><q >The comprehension of things within the cognizant world is a resultant of a balance amongst all our senses and emotions. Art happens when this balance attains tranquillity and transcendence. Aprakrta functions at these time-slices of our lives.</q></p>
</el-row>

</div>



<footer  style="background-color: #1f1e1e;margin-top:19%;color:white" class="page-footer font-small unique-color-dark">

    <div>

      <div class="container">

        <!-- Grid row-->
        <div class="row py-4 d-flex align-items-center">

          <!-- Grid column -->
          <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0" style="color:white">Get connected with us on social networks!</h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-6 col-lg-7 text-center text-md-right">

            <!-- Facebook -->
            <a class="fb-ic" style="margin-right:10%">
               <a href="http://www.facebook.com/AnArtPopUp/"><el-button id="fb-btn" type="primary"  ><icon style="height:40px;width:40%"  name="facebook"></icon></el-button></a>
            </a>
            <!-- Twitter -->

            <!-- Google +-->

            <!--Linkedin -->
            <a class="li-ic">
               <a href="https://www.instagram.com/aprakrta/"><el-button id="insta-btn" type="primary"  ><icon style="height:40px;width:70%"  name="instagram"></icon></el-button></a>
            </a>


          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row-->

      </div>
    </div>

    <!-- Footer Links -->
    <div  class="container text-center text-md-left mt-5">

      <!-- Grid row -->
      <div class="row mt-3" id="contact" >

        <!-- Grid column -->
         <div >

          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr class="deep-black accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p>
            Raghukul Society </p>
          <p>
           Ganesh Nagar, Karve Nagar,</p>
          <p>
            Pune, Maharashtra 411052 </p>
          <p>
            077988 79277</p>
             <p>
             info@aprakrta.com</p>
         </div>


        <!-- Grid column -->

      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      Aprakrta
    </div>

<p style="opacity:0" @dblclick="gotoadmin">Admin</p>
    <!-- Copyright -->
<p  style="color:white;text-align:center;font-size:90%;margin:0;height:100px" >Made by <img id="hyperware" src="../assets/logo.jpg"> <a style="color:yellow;text-decoration:none" title="Visit My LinkedIn" href="https://www.linkedin.com/in/swanand-kadam-25137098/"><v-icon >mail</v-icon></a></p>
  </footer>
  <!-- Footer -->

</div>

</template>
<script>
import Icon from "vue-awesome/components/Icon";

export default {
   data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    },
  components: {
    Icon
  },
  methods: {
    gotoadmin: function() {
      var pass = prompt("Enter the Pass");

      if (pass == "admin") {
        this.$router.push("admin");
      } else {
        alert("Incorrect Password");
      }
    }
  }
};
</script>


<style scoped>
#hyperware {
  height: 28px;
  width: 9%;
  margin-top: 0;
  margin-left: 0.5%;
}
a {
  text-decoration: none;
}
#newhome:hover {
  transform: scale(1.1);
  transition: ease-in 0.5s;
  overflow: hidden;
}
#newhome2:hover {
  transform: scale(1.1);
  transition: ease-in 0.5s;
}
#newhome3:hover {
  transform: scale(1.1);
  transition: ease-in 0.5s;
}
#newhomebtn3 {
  left: 5%;
  top: 76%;
  background-color: black;
  color: white;
  border: black solid 1px;
  width: 30%;
  height: 46px;
  position: absolute;
  font-size: 80%;
}
#newhomebtn2 {
  left: 5%;
  top: 36%;
  background-color: black;
  color: white;
  border: black solid 1px;
  width: 30%;
  height: 46px;
  position: absolute;
  font-size: 80%;
}
#newhomebtn {
  left: 5%;
  top: -15%;
  background-color: black;
  color: white;
  border: black solid 1px;
  width: 30%;
  height: 46px;
  font-size: 80%;
}
#newhome {
  width: 100%;
  height: 665px;
}

#newhome2 {
  height: 336px;
}

#newhome3 {
  margin-top: 0%;
  height: 324px;
  border-right: solid white 5px;
}

#test:hover {
  transform: scale(1.2);
  transition: ease-in 0.5s;
}
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
  height: 60px;
}

#navhover:hover {
  background-color: #c44b49;
  color: white;
}

a {
  color: black;
  text-decoration: none;
}

#title {
  margin-left: 34%;
}
#el-menu {
  background-color: white;
}

#app {
  font-family: "Josefin Sans", sans-serif;

  color: #2c3e50;
  width: 100%;
}

.item {
  margin-bottom: 3%;
}
#toolbar {
  box-shadow: 0 14px 16px -16px #222;
  background-color: white;
}

#two-grid-img {
  height: 500px;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
}
#two-grid2-img {
  height: 500px;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
}
#navhover-exception {
  width: 11%;
  border: #a52b2b 5px;
  font-size: 97%;
  letter-spacing: 0.7px;
  border: none;
  color: black;
  /* padding-right: 7%; */
  text-align: center;
  padding: 0px;
  margin-right: 8%;

  background-color: hsl(0, 34%, 47%);
  color: white;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 13px 6px -6px grey;
  background-image: linear-gradient(
    to right,
    #b6423e 0%,
    #b31217 51%,
    #e52d27 100%
  );
}
.btn-grad:hover {
  background-position: right center;
}
#navhover2 {
  width: 11%;
  border: #a52b2b 5px;
  background-color: #a15050;
  font-size: 97%;
  padding: 0px;
  letter-spacing: 0.7px;
  color: white;
  /* padding-right: 7%; */
  text-align: center;
  padding-left: 0px;
  margin-right: 8%;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 13px 6px -6px grey;
  background-image: linear-gradient(
    to right,
    #b6423e 0%,
    #b31217 51%,
    #e52d27 100%
  );
}
.btn-grad:hover {
  background-position: right center;
}
#navhover2:hover {
  color: black;
  background-color: white;
  transform: scale(1.1);
  transition: ease-in-out 0.3s;
}
#navhover-exception:hover {
  color: black;
  transform: scale(1.1);
  transition: ease-in-out 0.3s;
}
#el-menu3 {
  background-color: white;
  box-shadow: 0px;
  margin-top: -5%;
  text-align: center;
}
#el-menu2 {
  background-color: white;
  margin-top: 4%;
  margin-left: 7%;
  font-size: 110%;
  box-shadow: 0px;
  width: 100%;
}
#mylinkedin {
  margin-top: -10%;
  margin-left: 20%;
}
#credits {
  background-color: black;
  height: 50px;
}
#grid-btn {
  position: absolute;
  margin-top: -35%;
  color: white;
  background-color: black;
  border-color: black;
  width: 20%;
  z-index: 1000;
  margin-left: 5%;
  opacity: 0;
  box-shadow: grey 5px 5px 5px 5px;
}
#grid-btn2 {
  box-shadow: grey 5px 5px 5px 5px;
  position: absolute;
  margin-top: -35%;
  color: white;
  background-color: black;
  border-color: black;
  width: 20%;
  z-index: 1000;
  margin-left: 5%;
  opacity: 0;
}
#apra-row {
  height: 800px;
}
#lastfoot {
  margin-left: 39.5%;
  font-size: 110%;
}
#apra {
  margin-left: 2%;
}
#me {
  margin-left: 60%;
}
#row {
  display: inline-flex;
}
#icons {
  margin-left: 1%;
}
#sk {
  margin-left: 20%;
}
#mycredit {
  display: inline-flex;
  height: 70px;
  margin-top: 5%;
  background-color: black;
}
#copyright {
  height: 10px;
  margin-left: 30%;
}
#subheading {
  margin-top: 2%;
  margin-left: 2%;
}
.fa-icon {
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 10%;
}
#foot {
  height: 430px;
  background-color: black;
}
#footer {
  background-color: black;
  height: 280px;
  color: white;
  margin-top: 15%;
}
span {
  margin-left: 30%;
}
#owner-img {
  border-radius: 50%;
  width: 10%;
  height: 150px;
  margin-left: 45%;
}
a {
  text-decoration: none;
}
#home-buttons {
  margin-top: 13%;
  margin-left: 30%;
}
.el-col {
  margin-top: 8%;
}
.line {
  width: 590px;
  height: 47px;
  border-bottom: 1px solid black;
  margin-left: 28%;
}
.el-row[data-v-7cbbe74f]:hover #about-para {
  z-index: 1000;
  transform: scale(1.1);
  transition: 1.5s;
}
#el-row {
  flex: 5;
  overflow: auto;
  height: 4s30px;
}
#about {
  margin-top: 8%;
  background-image: url("https://image.ibb.co/js2wCf/2eg91ex.png");
  background-size: cover;
}
#about-para {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 8%;
  color: white;
  font-weight: 400;
  font-style: italic;
  font-size: 145%;
  font-family: inherit;
}
#two-grid {
  height: 600px;
  width: 70%;
  margin: 0 auto;
}
#two-grid:hover button {
  opacity: 1;
  transform: translateY(120%);
  transition: all 1s ease-in-out;
}
#two-grid:hover img {
  transform: scale(0.9);
  transition: all 0.6s ease-in-out;
  opacity: 0.7;
}
#two-grid2:hover img {
  transform: scale(0.9);
  transition: all 0.6s ease-in-out;
  opacity: 0.7;
}
#two-grid2 {
  height: 600px;
  width: 70%;
  margin: 0 auto;
}
#two-grid2:hover button {
  opacity: 1;
  transform: translateY(120%);
  transition: all 1s ease-in-out;
}
#homeimg {
  margin-top: 0.5%;
  height: 500px;
  width: 100%;
}
#visit-store-btn {
  margin-left: 45%;
  margin-top: 5%;
  background-color: black;
  color: white;
}
#knowmore {
  margin-top: -25%;
  margin-left: 6%;
  z-index: 1000;
  background-color: white;
  color: black;
  width: 27%;
  height: 70px;
  border: 1px solid;
  padding: 10px;

  border-radius: 15px;
  font-size: 110%;
}
#knowmore:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
.line {
  width: 590px;
  height: 47px;
  border-bottom: 1px solid black;
  margin-left: 28%;
  margin-top: -3%;
}
h1 {
  margin-left: 39%;
  margin-top: 15%;
  margin-bottom: 5%;
}
.el-row,
.el-col {
  overflow: hidden;
}
img {
  height: 400px;
  width: 100%;
  margin-top: 10px;
  word-spacing: 3px;
  transition: all 0.2s ease-in-out;
}

.grid-content {
  margin-left: 9%;
  width: 80%;
  opacity: 1;
}
#grid-content:hover {
  transform: scale(1.1);
  transition: all 0.6s ease-in-out;
}
#shopnow {
  background-color: white;
  color: black;
  width: 27%;
  height: 70px;
  border: 1px solid;
  padding: 10px;
  
  border-radius: 15px;
}
#shopnow:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#featured {
  margin-top: 15%;
  margin-bottom: 3%;
  margin-left: 40%;
}
#featured2 {
  margin-top: 5%;
  margin-bottom: 3%;
  margin-left: 40%;
}
.mapouter {
  margin-left: 63%;
  height: 188px;
  width: 407px;
  margin-top: -18%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 188px;
  width: 407px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(3n) {
  background-image: url("../assets/homepage-promo-carousel-062618.jpg");
  background-size: cover;
}
.el-carousel__item:nth-child(3n + 1) {
  background-image: url("../assets/NH-SALE-2017-CAROUSEL.jpg");
  background-size: cover;
}
.el-carousel__item:nth-child(3n + 2) {
  background-image: url("../assets/homepage1a-Memorial-Day-SAVE30-3.jpg");
  background-size: cover;
}
#owner-name {
  text-align: center;
  color: white;
  margin-top: 2%;
  font-size: 150%;
}
#owner-p {
  text-align: center;
  color: white;
  font-size: 120%;
  margin-top: -1%;
}
#fb-btn {
  border-radius: 50%;
  background-color: #3b5999;
  border: none;
  height: 60px;
  width: 10%;
}
#insta-btn {
  border-radius: 50%;
  background-color: #c32aa3;
  border: none;
  height: 60px;
  width: 10%;
}
#map {
  margin-left: 15%;
  margin-top: 9%;
}
#carousel {
  height: 500px;
}
#carousel-img {
  height: 500px;
}
#two-grid-img {
  height: 600px;
}
#two-grid {
  height: 900px;
  width: 60%;
}
#two-grid2-img {
  height: 600px;
}
#two-grid2 {
  height: 900px;
  width: 60%;
}
@media screen and (max-width: 480px) {
  #hyperware {
    width: 27%;
  }
  #contact {
    margin-left: 23%;
  }
  #apra-row {
    height: 515px;
  }
  #newhomebtn3 {
    width: 39%;
    height: 30px;
    font-size: 49%;
    top: 73%;
  }
  #newhomebtn2 {
    top: 35%;

    width: 39%;
    height: 30px;
    font-size: 49%;
  }
  #newhomebtn {
    width: 57%;
    width: 49%;
    height: 30px;
    font-size: 49%;
  }
  #newhome {
    height: 358px;
  }
  #newhome2 {
    height: 183px;
    margin-top: 9%;
  }
  #newhome3 {
    height: 170px;
  }

  #toolbar {
    position: fixed;
    transform: translateY(0px);
    background-color: white;
    z-index: 2000;
    width: 100%;
    top: -1%;
  }
  #title {
    margin-left: 18%;
    width: 100%;
  }
  #apraimg {
    width: 80%;
  }

  #navhover {
    display: none;
  }

  #bggrad {
    height: 330px;
  }
  #filter-row {
    height: 150px;
    display: inline-flex;
    width: 100%;
    margin-left: 0%;
  }
  #filters {
    display: -webkit-flex;
  }
  #about-heading {
    font-size: 140%;
    margin-left: 32%;
  }
  #el-row {
    height: 230px;
  }
  #grid-btn,
  #grid-btn2 {
    width: 35%;
    font-size: 60%;
  }
  #owner-name {
    font-size: 90%;
    margin-top: 6%;
    margin-left: 3%;
  }
  #owner-img {
    height: 80px;
    width: 20%;
    margin-left: 43%;
  }
  #fb-btn {
    width: 20%;
    margin-top: 5%;
  }
  #insta-btn {
    width: 20%;
  }
  .mapouter {
    margin-left: 2%;
    margin-top: 8%;
    width: 50%;
  }
  #owner-p {
    font-size: 75%;
  }
  #mapdiv {
    margin-left: 10%;
  }
  #about-para {
    font-size: 100%;
    margin-top: 12%;
  }
  #el-menu2 {
    font-size: 150%;
    margin-left: 2%;
  }
  #home-buttons {
    margin-top: -1%;
    margin-left: 13%;
  }
  #carousel-img {
    height: 180px;
  }
  #carousel {
    height: 270px;
    overflow: hidden;
  }
  #grid-content {
        height: 452px;
  }
  #shopnow {
    width: 40%;
    font-size: 100%;
    height: 50px;
  }
  #knowmore {
    width: 40%;
    font-size: 100%;
    height: 50px;
  }
  #featured {
    font-size: 170%;
    margin-left: 21%;
    margin-top: 20%;
  }
  #featured2 {
    font-size: 170%;
    margin-left: 27%;
    margin-top: 5%;
  }
  .line {
    margin-left: 15%;
    width: 70%;
  }
  #two-grid-img {
    height: 300px;
  }
  #two-grid {
    height: 300px;
    width: 90%;
  }
  #two-grid2-img {
    height: 300px;
  }
  #two-grid2 {
    height: 300px;
    width: 90%;
  }
  #productimages {
    height: 20px;
  }
  #navhover-exception {
    font-size: 70%;
    margin-left: -4%;
    margin-top: -4%;
    margin-bottom: 1%;
    width: 100%;
  }
  #navhover2 {
    font-size: 70%;
    margin-left: -4%;
    margin-top: -6%;
    width: 100%;
  }
  #row2 {
    margin-top: 40%;
    font-size: 110%;
    width: 100%;
    margin-left: 2%;
  }
  #carticon {
    display: inline;
    margin-left: -2%;
    right: 45%;
  }
  #row3 {
    font-size: 90%;
    margin-top: 10%;
  }

  #store-col {
    width: 44%;
  }
  #products {
    margin-left: 30%;
    left: 3px;
  }
  .grid-content {
    height: 330px;
  }
  img {
    height: 10px;
  }
  #addtocartbtn {
    display: none;
  }
  #viewbtn {
    display: none;
  }
  #sortbtn {
    width: 13opx;
  }
  #sortproducts {
    font-size: 63%;
    margin-top: -10%;
    display: inline;
    text-align: center;
  }
}
@media screen and (min-width: 400px) and (max-width: 600px) {
  #row2 {
    margin-left: 9%;
  }
}
@media screen and (min-width: 481px) and (max-width: 720px) {
  #apraimg {
    width: 90%;
  }
  #row2 {
    margin-left: -30%;
  }
  #navhover2 {
    margin-left: 2%;
  }
  #title {
    width: 30%;
  }
  #bggrad {
    height: 330px;
  }
  #filter-row {
    height: 150px;
    display: inline-flex;
    width: 100%;
    margin-left: 0%;
  }
  #filters {
    display: -webkit-flex;
  }
  #about-heading {
    font-size: 140%;
    margin-left: 40%;
  }
  #el-row {
    height: 300px;
  }
  #grid-btn,
  #grid-btn2 {
    width: 35%;
    font-size: 60%;
  }
  #owner-name {
    font-size: 90%;
    margin-top: 6%;
    margin-left: 3%;
  }
  #owner-img {
    height: 110px;
    width: 20%;
    margin-left: 43%;
  }
  #fb-btn {
    width: 13%;
    margin-top: 5%;
  }
  #insta-btn {
    width: 13%;
  }
  .mapouter {
    margin-left: 10%;
    margin-top: 8%;
    width: 50%;
  }
  #contact {
    margin-left: -1%;
  }
  #owner-p {
    font-size: 75%;
  }
  #mapdiv {
    margin-left: 10%;
  }
  #about-para {
    font-size: 100%;
    margin-top: 12%;
  }
  #el-menu2 {
    font-size: 150%;
    margin-left: 2%;
  }
  #home-buttons {
    margin-top: -1%;
    margin-left: 13%;
  }
  #carousel-img {
    height: 180px;
  }
  #carousel {
    height: 270px;
    overflow: hidden;
  }
  #grid-content {
    height: 230px;
  }
  #shopnow {
    width: 40%;
    font-size: 100%;
    height: 50px;
  }
  #knowmore {
    width: 40%;
    font-size: 100%;
    height: 50px;
  }
  #featured {
    font-size: 170%;
    margin-top: 20%;
  }
  #featured2 {
    font-size: 170%;
    margin-top: 15%;
  }
  .line {
    margin-left: 14%;

    width: 70%;
  }
  #two-grid-img {
    height: 400px;
  }
  #two-grid {
    height: 400px;
    width: 90%;
  }
  #two-grid2-img {
    height: 400px;
  }
  #two-grid2 {
    height: 400px;
    width: 90%;
  }
  #productimages {
    height: 20px;
  }
  #navhover-exception {
    font-size: 70%;
    margin-left: -6%;
    margin-top: -6%;
  }
  #navhover2 {
    font-size: 70%;
    margin-left: 1%;
    margin-top: -6%;
  }
  #row2 {
    margin-top: 10%;
    font-size: 130%;
    width: 100%;
    margin-left: 8%;
  }
  #carticon {
    display: inline;
    margin-left: -2%;
    right: 45%;
  }
  #row3 {
    font-size: 90%;
  }
  #store-col {
    width: 44%;
  }
  #products {
    margin-left: 30%;
    left: 3px;
  }
  .grid-content {
    height: 330px;
  }
  img {
    height: 10px;
  }
  #addtocartbtn {
    display: none;
  }
  #viewbtn {
    display: none;
  }
  #sortbtn {
    width: 13opx;
  }
  #sortproducts {
    font-size: 63%;
    margin-top: -10%;
    display: inline;
    text-align: center;
  }
}
@media screen and (min-width: 721px) and (max-width: 1024px) {
  #apraimg {
    width: 90%;
  }
  #row2 {
    margin-left: -30%;
  }
  #navhover2 {
    margin-left: 2%;
  }
  #title {
    width: 30%;
  }
  #bggrad {
    height: 330px;
  }
  #filter-row {
    height: 150px;
    display: inline-flex;
    width: 100%;
    margin-left: 0%;
  }
  #filters {
    display: -webkit-flex;
  }
  #about-heading {
    font-size: 140%;
    margin-left: 42%;
  }
  #el-row {
    height: 300px;
  }
  #grid-btn,
  #grid-btn2 {
    width: 25%;
    font-size: 90%;
    margin-left: 7%;
  }
  #owner-name {
    font-size: 120%;
    margin-top: 6%;
    margin-left: 1%;
  }
  #owner-img {
    height: 160px;
    width: 16%;
    margin-left: 42%;
  }
  #fb-btn {
    width: 12%;
    margin-top: 5%;
  }
  #insta-btn {
    width: 12%;
  }
  .mapouter {
    margin-left: 10%;
    margin-top: 8%;
    width: 50%;
  }
  #contact {
    margin-left: -1%;
  }
  #owner-p {
    font-size: 95%;
  }
  #mapdiv {
    margin-left: 10%;
  }
  #about-para {
    font-size: 100%;
    margin-top: 12%;
  }
  #el-menu2 {
    font-size: 150%;
    margin-left: -6%;
    margin-top: 2%;
  }
  #home-buttons {
    margin-top: -1%;
    margin-left: 13%;
  }
  #carousel-img {
    height: 370px;
  }
  #carousel {
    height: 370px;
    overflow: hidden;
  }
  #grid-content {
    height: 400px;
  }
  #shopnow {
    width: 40%;
    font-size: 120%;
    height: 80px;
    margin-top: 15%;
  }
  #knowmore {
    width: 40%;
    font-size: 120%;
    height: 80px;
  }
  #featured {
    font-size: 170%;
    margin-top: 20%;
  }
  #featured2 {
    font-size: 170%;
    margin-top: 15%;
  }
  .line {
    margin-left: 14%;

    width: 70%;
  }
  #two-grid-img {
    height: 540px;
  }
  #two-grid {
    height: 540px;
    width: 80%;
  }
  #two-grid2-img {
    height: 540px;
  }
  #two-grid2 {
    height: 540px;
    width: 80%;
  }
  #productimages {
    height: 20px;
  }
  #navhover-exception {
    font-size: 67%;
    width: 15%;
    border: #a52b2b 5px;
    background-color: #a15050;
    padding: 0px;
    letter-spacing: 0.7px;
    color: white; /* padding-right: 7%; */
    text-align: center;
    padding-left: 0px;
    margin-right: 2%;
  }
  #navhover2 {
    width: 17%;
    border: #a52b2b 5px;
    background-color: #a15050;
    font-size: 67%;
    padding: 0px;
    letter-spacing: 0.7px;
    color: white;
    /* padding-right: 7%; */
    text-align: center;
    padding-left: 0px;
    margin-right: 1%;
  }
  #row2 {
    margin-top: 10%;
    font-size: 130%;
    width: 100%;
    margin-left: 8%;
  }
  #carticon {
    display: inline;
    margin-left: -2%;
    right: 45%;
  }
  #row3 {
    font-size: 90%;
    margin-top: 5%;
  }

  #store-col {
    width: 44%;
  }
  #products {
    margin-left: 30%;
    left: 3px;
  }
  .grid-content {
    height: 330px;
  }

  #addtocartbtn {
    display: none;
  }
  #viewbtn {
    display: none;
  }
  #sortbtn {
    width: 13opx;
  }
  #sortproducts {
    font-size: 63%;
    margin-top: -10%;
    display: inline;
    text-align: center;
  }
}
</style>

