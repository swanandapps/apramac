<template>
<div>
        
<el-menu   id="el-menu4" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word style="color:black" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/store"     >:: <word v-bind:class="{ inactive: true }"  >Products</word> ::</router-link>



  <router-link v-bind:class="{ active:isActive }" id="art" style="text-decoration:none;color:#a52b2b" to="" > ::  <word  style="color:black"  @click="showtypes()"  >Art</word> ::</router-link>

<transition name="fade">
<div v-if="show_art_types" id="art-types">
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/created" ><el-button style="color:#a52b2b"> ::  <word style="color:black;background: transparent;">Created</word> ::</el-button></router-link>
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/curated" > <el-button style="color:#a52b2b">::  <word style="color:black;background: transparent;">Curated</word> ::</el-button></router-link></div>
</transition>
<!--
<router-link to="/created" > ::  <word style="color:black">Created</word> ::</router-link>
<router-link to="/curated" > ::  <word style="color:black">Curated</word> ::</router-link>
-->

<router-link  style="text-decoration:none;color:#a52b2b" to="/services"     >:: <word style="color:#a52b2b"  >Services</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/events"     >:: <word style="color:black" >Events</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/about"     >:: <word style="color:black" >About</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:black" >Contact</word> ::</router-link>
</div>
 </el-menu>


<el-row id="store-tag-line">

<div id="store-tag-line1">
  <p>Doing up your space makeover could be a confusing and daunting task at times.</p>

</div>

<div id="store-tag-line1a">
  Aprakrta’s inhouse team of highly qualified Designers, Artists and Architects can help you in every aspect of your space makeover journey right from designing, making and styling up your space just so that it not only suits your needs and personality but also upscales it!
</div>
<div id="services-tag-line1b">

  <p>Jazz up your spaces by consulting our experts for the following services:</p>
</div>

</el-row>


<el-row id="slider-div">

<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Interior Design</word> ::</h1>

<el-carousel  :interval="2500"  id="carousel" >
      <el-carousel-item id="carousel-img"  >
<img src="../assets/InteriorDesign/ANK537_8803a.jpg"  alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/InteriorDesign/ANK537_8814a.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >

<img src="../assets/InteriorDesign/ANK537_8820a.jpg" alt="">
      </el-carousel-item>


    </el-carousel>


</el-col>
<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Interior Styling</word> ::</h1>

<el-carousel  :interval="2500"  id="carousel">
      <el-carousel-item id="carousel-img"  >
<img src="../assets/InteriorStyling/1.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/InteriorStyling/2.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/InteriorStyling/3.jpg" alt="">

      </el-carousel-item>


    </el-carousel>



</el-col>
<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Terrace Gardening</word> ::</h1>
<el-carousel :interval="2500"  id="carousel">
  <el-carousel-item id="carousel-img"  >
<img src="../assets/TerraceGardening/Balconyoptions-Model.jpg" alt="">

      </el-carousel-item>
  <el-carousel-item id="carousel-img"  >
<img src="../assets/TerraceGardening/Interiorlayout01.jpg" alt="">

      </el-carousel-item>

</el-carousel>

</el-col>
<el-col id="interior-slider" style="margin-top:-20%">


<h1 id="interior-h1">::  <word style="color:black">Indoor & Outdoor Landscape</word> ::</h1>

<el-carousel :interval="2500"  id="carousel">
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Indoor_OutdoorLandscape/01.jpg" alt="">

      </el-carousel-item>
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Indoor_OutdoorLandscape/02.jpg" alt="">

      </el-carousel-item>
      <el-carousel-item id="carousel-img"  >
<img src="../assets/Indoor_OutdoorLandscape/03.jpg" alt="">

      </el-carousel-item>

</el-carousel>


</el-col>
<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Furniture Design</word> ::</h1>

<el-carousel :interval="2500"  id="carousel">
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Furniture/Mobile/1.jpg"  alt="">

      </el-carousel-item>
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Furniture/Mobile/2.jpg" alt="">

      </el-carousel-item>
      <el-carousel-item id="carousel-img"  >
<img src="../assets/Furniture/Mobile/3.jpg" alt="">

      </el-carousel-item>

</el-carousel>


</el-col>





</el-row>



        </div>

</template>
<script>
export default {
  data() {
    return {
   show_art_types:false,
   isActive:false

    }
    },
  methods: {
  showtypes(){
this.isActive=true

if(this.show_art_types==false){

 this.show_art_types=true
}

else if(this.show_art_types==true){

  this.show_art_types=false
}
   
  }


  }


  
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');


#store-tag-line,#store-tag-line1a,#store-tag-line1b{
  
text-align: center;
    padding-left: 12%;
    padding-right: 12%;
    font-size: 129%;
    margin-top: 5%

}
#service-tag-line1b{
      margin-top: 5%;
}
#interior-h1{

  color: #a52b2b;
    font-size: 180%;
   text-align: center;
    margin-top: 6%;
    margin-bottom: 6%;
    font-family: 'Cantarell', sans-serif;
}
 #carousel {
    height:592px;
  
  }
   #carousel-img {
 
    height: 592px;
    width: 51%;
    margin-left: 24%;
    background-size: contain
  }


#menu-tabs a{

 margin-top: 3.5%;
    margin-left: 6%;
    font-size: 136%;
}
#art{

  text-decoration: none;
  z-index: 2000;
  color: black
}
.active{

color:#a52b2b
}
.inactive{

  color: black
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#art-types{
         padding-left: 62%;
    padding-right: 21%;
    /* padding-bottom: 5%; */
    position: absolute;
    top: 125%;
    left: -28%;
    z-index: 200;
     font-family: inherit
}
#art-types :nth-child(2){

 margin-left: 7px;
background: rgba(255, 255, 255, 0.6);
border-radius: 15px 5px;
margin-top: 4%;
 font-family: inherit

}
#art-types :nth-child(1){

  margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 5px 15px;
margin-top: -2%;
 font-family: inherit

}

img {
  box-shadow: 0 0 17px 0px black;
  background-image: url("../assets/Furniture/1.jpg");
  width: 100%
}
#menu-tabs a{

      margin-top: 3.5%;
}

#el-menu4 {



  margin-top: 2%;
 
 text-align: center;
  font-size: 90%;
  box-shadow: 0px;
  width: 100%;
      background-color: transparent;
          border: 0px;
    

}
#navhover-exception3 {
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
  
    color: #a52b2b;

}
.btn-grad:hover {
  background-position: right center;
}
#navhover4 {
  width: 11%;
  border: #a52b2b 5px;
    
    color: #a52b2b;
  font-size: 97%;
  padding: 0px;
  letter-spacing: 0.7px;

  /* padding-right: 7%; */
  text-align: center;
  padding-left: 0px;
  margin-right: 8%;

}

#steps {
  margin-top: 8%;

  width: 105%;
}
#howitworks {
  height: 200px;
  text-align: center;

  margin-left: 8%;
  margin-right: 8%;
}
#servicerow {
  margin-top: 28%;
  display: flex;
}
#img-about1 {
  font-size: 169%;
  font-family: serif;
  margin-top: 30%;
  margin-left: 8%;
  margin-right: 8%;
}





@media screen and (max-width: 480px) {
  #art-types :nth-child(2){

 margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 15px 5px;
margin-top: 4%;
 font-family: inherit

}
#art-types :nth-child(1){

  margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 5px 15px;
margin-top: -2%;
 font-family: inherit

}
  #art-types{
       padding-left: 62%;
    padding-right: 21%;
    display: grid;
    /* padding-bottom: 5%; */
    position: absolute;
    top: 20%;
    left: -32%;
    z-index: 200;
     font-family: inherit
}

  #menu-tabs a{

       margin-top: 3.5%;
    font-size: 94%;
    margin-left: 2%;
}


#menu-tabs{
  display:grid;text-align-last: center;
    /* left: 5%; */
    padding-left: -13%;
         margin-left: -69%;
    font-size: 92%;
        margin-top: -5%;
}
  #store-tag-line{

  text-align: center;
    font-size: 120%;
    color: black;
    padding-top: 4%;
    font-style: italic;
   padding-left: 5%;
    padding-right: 5%;

    font-family: 'Cantarell', sans-serif;
}
  #carousel {
    height:292px;
  
  }
   #carousel-img {
 
    height: 292px;
    width: 100%;
    margin-left: 0PX
    
  }
#interior-h1{

  color: #a52b2b;
    font-size: 150%;
   text-align: center;
    margin-top: 17%;
    margin-bottom: 15%;
    font-family: 'Cantarell', sans-serif;
}
#services-tag-line1b{

  padding-right: 7%;
    font-size: 90%;
    font-style: italic;
    font-weight: bold;
    padding-top: 4%;
    padding-left: 7%;
}
 #store-tag-line1{
          text-align: center;
    font-family: 'Cantarell', sans-serif;
    font-size: 90%;
    font-style: normal;
    font-weight: normal;
  }
   #store-tag-line1a{
         text-align: center;
    margin-top: 4%;
    font-family: 'Cantarell', sans-serif;
    font-size: 90%;
    padding-left: 4%;
    padding-right: 4%;
}
  
  #servicerow {
    display: block;
    margin-top: 60%;
  }
 
   #el-menu4 {
          font-size: 129%;
    width: 100%;
    margin-left: 0px;
        margin-top: 6%;
        height: 340px;
 background-image: url("../assets/300x360/kedit-forServices.jpg");
 background-size: cover;
     border: 0px;

   
  }
   #navhover-exception3 {
    font-size: 70%;
   
    margin-top: -4%;
 
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
         padding-left: 4%
  }
  #navhover4 {
    font-size: 70%;
    
        margin-top: -9%;
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
        padding-left: 4%
  }

  #abnormal3 {
    margin-top: 7%;
  }

  #img-about1 {
    font-size: 100%;
    font-family: serif;
    margin-top: 8%;
    margin-left: 17%;
    margin-right: 8%;
  }
}

@media screen and (min-width: 481px) and (max-width: 1024px) {

#founder-img{


  border-radius: 50%;
    width: 26%;
    height: 200px;
}
#about-row3{

  margin-top: 15%
}

  #menu-tabs a{

    margin-top: 3.5%;
    font-size: 114%;
    margin-left: 2%;
}
#el-menu4 {
    font-size: 150%;
    margin-left: 0%;
 background-image: url("../assets/300x360/kedit-forServices.jpg");
  background-size: cover
    
  }
  #art-types {
    padding-left: 62%;
    padding-right: 21%;
    /* padding-bottom: 5%; */
    position: absolute;
    top: 32%;
    left: -33%;
    z-index: 2000;
     font-family: inherit
}

#menu-tabs{
  display:grid;text-align-last: center;
    /* left: 5%; */
    padding-left: -13%;
          margin-left: -69%;
    font-size: 100%;
        margin-top: -5%;
}

#navhover-exception {
    font-size: 70%;
   
    margin-top: -4%;
   
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
         padding-left: 4%
  }
  #navhover2 {
    font-size: 70%;
    
       margin-top: -9%;
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
        padding-left: 4%
  }

}

</style>
