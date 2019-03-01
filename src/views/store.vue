<template>
<div>
<el-row  id="top-row" >

<el-col  style="width:20%;margin:0%;margin-top:2%;height:20px;text-align: center">
       <router-link to="/"><v-icon style="color: rgb(167, 62, 44);">home</v-icon></router-link>
</el-col>
<el-col  style="width:50%;margin-left:4%;margin-top:-1%;height:40px;text-align: center">
 <md-menu md-offset-x="-40" md-offset-y="2" md-size="medium" md-align-trigger>
      <md-button  md-menu-trigger> <v-icon style="color: rgb(167, 62, 44);">category</v-icon></md-button>

      <md-menu-content id="list-content">
               <md-menu-item @click="seeall" >View All</md-menu-item>
        <md-menu-item @click="filterbypaint" >Paintings</md-menu-item>
        <md-menu-item @click="filterbyscul" >Sculpture</md-menu-item>
        <md-menu-item  @click="filterbydeco" >Home Decor</md-menu-item>

        <md-menu-item   @click="filterbypott" >Pottery</md-menu-item>
        <md-menu-item   >Aprakrta Services</md-menu-item>

      </md-menu-content>
    </md-menu>
</el-col>
<el-col style="width:20%;margin:0%;height:40px;text-align: center;margin-top:-1%">

        <md-menu   md-size="medium" md-align-trigger>
      <md-button md-menu-trigger> <v-icon style="color: rgb(167, 62, 44);">sort</v-icon></md-button>

      <md-menu-content id="list-content">
              <md-menu-item @click="sortrelevance">Relevance</md-menu-item>
        <md-menu-item @click="sortlowtohigh">Price: Low to High</md-menu-item>
        <md-menu-item @click="sorthightolow">Price: High to Low</md-menu-item>

      </md-menu-content>
    </md-menu>

</el-col>


<el-col style="width:30%;margin:0%;margin-left:-4%;text-align: center">
Home
</el-col>
<el-col style="width:50%;margin:0%;text-align: center">
Category
</el-col>
<el-col style="width:20%;margin:0%;text-align: center">
Sort
</el-col>


</el-row>














 <v-layout id="bggrad" row wrap height="400">


         <img onContextMenu="return false;" style="height:350px" src="../assets/home-decor-851x357.jpg" >


 </v-layout>










<el-row id="only-pc-row" style="margin-top:10%">




          <el-col  style="width:40%;">
 <md-menu md-offset-x="-40" md-offset-y="2" md-size="medium" md-align-trigger>
      <md-button id="category-btn-pc"   md-menu-trigger> Choose Category</md-button>

      <md-menu-content id="list-content">
              <md-menu-item @click="seeall" >View All </md-menu-item>
        <md-menu-item @click="filterbypaint" >Paintings</md-menu-item>
        <md-menu-item @click="filterbyscul" >Sculpture</md-menu-item>
        <md-menu-item  @click="filterbydeco" >Home Decor</md-menu-item>

        <md-menu-item   @click="filterbypott" >Pottery</md-menu-item>
        <md-menu-item   >Aprakrta Services</md-menu-item>

      </md-menu-content>
    </md-menu>
</el-col>

<el-col style="width:60%;margin-top:9%">
    Sort By : <v-btn id="sortbtn1" small @click="sortlowtohigh">Price: Low to High</v-btn>
   <v-btn id="sortbtn2" small @click="sorthightolow">Price: High to Low</v-btn>

  </el-col>

</el-row>




 <!-- Prod<ucts-->
  <el-row  id="products" >

  <el-col class="wow fadeInUp" data-wow-duration="1s"  id="store-col" style="padding:0px" v-for="(user,index) in filter" :key="index" :offset="1" :span="6">

          <div class="grid-content bg-purple " >
 <router-link to="/details"><img onContextMenu="return false;" id="productimages" @click="showproduct(index)" :src="filter[index].image"></router-link>
<v-btn   @click="addtocart(index)" id="addtocartbtn">Add to Cart</v-btn>
<router-link to="/productdetails" style="text-decoration:none" ><v-btn id="viewbtn" @click="showproduct(index)">View product</v-btn></router-link>
    </div>

           <p  id="productname">{{filter[index].name}}</p>

           <p id="productprice">{{filter[index].price}} ₹ </p>


    </el-col>



<el-row>
<section >


<div class="icon-bar">
         <el-tooltip class="item" effect="dark" content="GO to Cart" placement="right-end">
<router-link  to="/cart"> <v-icon class="facebook" style="color:white" >shopping_cart</v-icon><div class="count" style="color:white">{{cartproducts.length}}</div></router-link>
         </el-tooltip>

</div>

</section>
</el-row>

</el-row>


</div>

</template>
<script >
import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      users: [],
      filter: [],
      isDisabled: false,
      dialogVisible: false,
      count:1
    };
  },

  computed: {
    ...mapState(["title", "cartproducts", "clickedproduct"]),
    ...mapGetters(["indexed"])
  },

  methods: {
    addtocart: function(index) {
      let flag = 1;
      for (let i = 0; i < this.cartproducts.length; i++) {
        if (this.filter[index].id == this.cartproducts[i].id) {
          this.$notify.warning({
            title: "Already Added to Cart",
            message: "Visit Cart to Checkout",
            offset: 10,
            duration: 1500
          });
          flag = 0;
        }
      }

      if (flag == 1) {
        this.cartproducts.push(this.filter[index]);

        console.log(this.cartproducts);

        this.$notify.success({
          title: "Added to Cart",
          message: "Visit Cart to Checkout",
          offset: 40,
          duration: 1500
        });
      }
    },
    showproduct(index) {
      this.clickedproduct.push(this.filter[index]);
      this.clickedproduct.splice(0, this.clickedproduct.length - 1);
      console.log(this.clickedproduct);
    },

    sortrelevance: function() {
      return this.filter.sort(() => Math.random() - 0.5);
    },
    sortlowtohigh: function() {
      // result = this.filter.sort(
      //  (a, b) => parseFloat(a.price) > parseFloat(b.price)
      //

      return this.filter.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    },
    sorthightolow: function() {
      return this.filter
        .sort(function(a, b) {
          return parseFloat(a.price) - parseFloat(b.price);
        })
        .reverse();
    },
    seeall: function() {
      this.filter = this.users;
    },
    filterbypaint: function() {
      this.filter = this.users.filter(users => users.type == "paintings");
      console.log(this.filter);
    },

    filterbyscul: function() {
      this.filter = this.users.filter(users => users.type == "sculpture");
      console.log(this.filter);
    },
    filterbydeco: function() {
      this.filter = this.users.filter(users => users.type == "home decor");
      console.log(this.filter);
    },
    filterbypott: function() {
      this.filter = this.users.filter(users => users.type == "pottery");
      console.log(this.filter);
    }
  },
  beforeCreate() {

let tempthis=this

    db.collection("products").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        
        console.log(tempthis.count)
        var data = doc.data()
        console.log(data.id=doc.id)
         // console.log(tempthis.users[count])
           //tempthis.filter[tempthis.count].id=doc.id
           console.log(data.id)
          tempthis.users.push(data);
        tempthis.filter.push(data);
        tempthis.count++;

    });

    console.log(tempthis.users)
    console.log(tempthis.filter)
});


   
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
#category-btn-pc {
  width: 170%;
  height: 55px;
  font-size: 100%;

  color: inherit;
  background-color: #f5f5f5;
}
#top-row {
  display: none;
}
#home-i {
  margin-top: 15%;
  margin-left: 25%;
}
a {
  text-decoration: none;
}
.md-menu-content.md-menu-content-medium {
  color: black;
  background-color: white;
  /* width: 150%; */

  width: 50%;
  left: -5px;
}
#top-row {
  position: fixed;
  width: 100%;
  background-color: white;
  border: 1px solid;
  z-index: 1;
  box-shadow: 0 0 15px black;
  height: 74px;
  display: none;
}
.md-menu {
  margin-left: 27%;
  margin-top: 1%;
}
#drawer {
  display: none;
}
#categorybtn {
  opacity: 1;
}
#home-icon {
  margin-top: -15%;
}
.icon-bar {
  position: fixed;
  top: 80%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8%;
}
#viewbtn {
  text-decoration: none;
}
.count {
  color: black;
  font-size: 110%;
  z-index: 2000;
  margin-top: -105%;
  margin-left: 80%;
}

.icon-bar a {
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  background-color: #a52b2b;
  font-size: 120%;
  border-radius: 50%;
  height: 80px;
  width: 120%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.19);
}

.facebook {
  color: black;
  font-size: 200%;
  margin-top: 18%;
}
#el-menu2 {
  background-color: white;
  margin-top: 4%;
  margin-left: 7%;
  font-size: 110%;
  box-shadow: 0px;
  width: 100%;
}
#navhover-exception {
  width: 11%;
  border: #a52b2b 5px;
  font-size: 77%;
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
#navhover-exception:hover {
  background-color: black;
  color: black;
  transform: scale(1.1);
  transition: ease-in-out 0.3s;
}
#navhover2 {
  width: 11%;
  border: #a52b2b 5px;
  background-color: #a15050;
  font-size: 77%;
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
#filter-row {
  height: 50px;
  width: 100%;
  margin-left: 0%;
}
@media screen and (max-width: 480px) {
  #only-pc-row {
    display: none;
  }
  #top-row {
    top: 91%;
    margin-left: -1%;
    width: 102%;
    display: block;
  }
  #viewbtn {
    display: none;
  }
  #filter-row {
    display: none;
  }
  .md-menu {
    margin-left: 4%;
    margin-top: 3%;
  }
  #row2 {
    display: none;
  }
  #drawer {
    display: block;
  }
  .line {
    display: none;
  }
  .icon-bar {
    position: fixed;
    -webkit-transform: translateY(-50%);
    transform: translateY(-56%);
    right: 18%;
    bottom: 10%;
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
  #el-menu2 {
    background-color: white;
    text-align: center;
    font-size: 140%;
    -webkit-box-shadow: 0px;
    box-shadow: 0px;
    display: initial;
    width: 100%;
    margin-left: -2%;
  }

  #title {
    width: 30%;
  }
  #bggrad {
    height: 210px;
    margin-top: 15%;
  }
  #productimages[data-v-40dd46b7] {
        height: 263px;
    width: 100%;
    margin-left: 0%
  }

  #carticon {
    display: none;
  }

  #row3 {
    margin-top: 5%;
  }
  #store-col {
    width: 45%;
    height: 400px;

    margin-left: 5%;
  }
  #products {
    width: 100%;
    margin-top: 50%;
    margin-left: -1%;
  }
  .grid-content {
    height: 296px;
  }
  img {
    height: 10px;
  }

  #addtocartbtn {
    margin-top: -2%;
    left: 19%;
    width: 100%;
  }

  #filter-row {
    background-color: #f5f5f5c2;
    color: black;
    height: 20px;
  }
  #sortproducts {
    margin-top: 7%;
    margin-left: 10%;
    width: 100%;
    font-size: 60%;
  }
  #sortbtn1 {
    width: 50%;
    height: 50px;
    font-size: 30%;
    margin-top: -0.5%;
    opacity: 1;
  }
  #sortbtn2 {
    width: 50%;
    height: 50px;
    font-size: 30%;
    margin-top: -0.5%;
    opacity: 1;
  }
}
/* TABLETS PORTRAIT */
@media screen and (min-width: 481px) and (max-width: 720px) {
  #only-pc-row {
    display: none;
  }
  .line {
    display: none;
  }
  .icon-bar {
    position: fixed;
    -webkit-transform: translateY(-50%);
    transform: translateY(-56%);
    right: 18%;
    bottom: 10%;
  }
  #navhover-exception {
    font-size: 97%;
    letter-spacing: 0.7px;
    border: none;
    color: black;
    margin-top: -6%;
  }
  #el-menu2 {
    background-color: white;
    text-align: center;
    font-size: 140%;
    -webkit-box-shadow: 0px;
    box-shadow: 0px;
    display: initial;
    width: 100%;
    margin-left: -2%;
  }
  #navhover2 {
    font-size: 90%;
    color: black;
    margin-left: -3%;
    margin-top: -6%;
  }
  #title {
    width: 30%;
  }
  #bggrad {
    height: 210px;
  }
  #filters {
    display: -webkit-flex;
    margin-bottom: 8%;
  }
  #productimages {
    height: 100%;
    width: 95%;
  }

  #row2 {
    margin-left: 9%;
    font-size: 90%;
    margin-top: 10%;
  }
  #carticon {
    display: none;
  }

  #row3 {
    margin-top: 1%;
  }
  #home-icon {
    margin-top: -12%;
    margin-left: 15%;
  }
  #store-col {
    width: 25%;
    height: 466px;
  }

  .grid-content {
    height: 365px;
  }
  img {
    height: 10px;
  }

  #addtocartbtn {
    margin-top: -2%;
    left: 19%;
  }
  #viewbtn {
    display: none;
  }
  #filter-row {
    background-color: #f5f5f5c2;
    color: black;
    height: 100px;
  }
  #sortproducts {
    margin-top: 6%;
    margin-left: 20%;
    width: 100%;
  }
  #sortbtn1 {
    width: 30%;
    height: 40px;
    font-size: 50%;
    margin-top: -0.5%;
    opacity: 1;
  }
  #sortbtn2 {
    width: 30%;
    height: 40px;
    font-size: 50%;
    margin-top: -0.5%;
    opacity: 1;
  }
}
/* /* TABLETS PORTRAIT */
@media screen and (min-width: 721px) and (max-width: 1024px) {
  .line {
    display: none;
  }
  .icon-bar {
    position: fixed;
    -webkit-transform: translateY(-50%);
    transform: translateY(-56%);
    right: 18%;
    bottom: 10%;
  }
  #navhover-exception {
    font-size: 97%;
    letter-spacing: 0.7px;
    border: none;
    color: black;
    margin-top: -6%;
  }
  #el-menu2 {
    background-color: white;
    text-align: center;
    font-size: 140%;
    -webkit-box-shadow: 0px;
    box-shadow: 0px;
    display: initial;
    width: 100%;
    margin-left: -2%;
  }
  #navhover2 {
    font-size: 90%;
    color: black;
    margin-left: -3%;
    margin-top: -6%;
  }
  #title {
    width: 30%;
  }
  #bggrad {
    height: 210px;
  }
  #productimages {
    height: 100%;
    width: 95%;
  }
  #row2 {
    margin-left: 9%;
    font-size: 90%;
    margin-top: 10%;
  }
  #carticon {
    display: none;
  }

  #row3 {
    margin-top: 1%;
  }
  #home-icon {
    margin-top: -5%;
  }
  span {
    margin-top: 1%;
  }
  #store-col {
    width: 25%;
    height: 466px;
  }
  #products {
    left: 6%;
  }
  .grid-content {
    height: 365px;
  }
  img {
    height: 10px;
  }

  #addtocartbtn {
    margin-top: -2%;
    left: 19%;
  }
  #viewbtn {
    display: none;
  }
  #filter-row {
    background-color: #f5f5f5c2;
    color: black;
    height: 150px;
  }
  #sortproducts {
    margin-top: 4%;
    margin-left: 30%;
    width: 100%;
  }
  #sortbtn1 {
    width: 30%;
    height: 40px;
    font-size: 70%;
    margin-top: -0.5%;
    opacity: 1;
  }
  #sortbtn2 {
    width: 30%;
    height: 40px;
    font-size: 70%;
    margin-top: -0.5%;
    opacity: 1;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1400px) {
}
#products {
  margin-left: -1.5%;
}
#cartcount {
  color: black;
  display: table-caption;
  height: 50px;
}
#carticon {
  margin-top: -2%;
  margin-left: 30%;
  text-align: right;
}
#cart-icon {
  padding-bottom: 0px;
  margin-left: 32%;
  margin-right: 5%;
  margin-top: -3%;
  text-decoration: none;
  border: none;
  background-color: white;
  color: black;
}
#cart-icon:hover {
  color: #c44b49;
}
a {
  text-decoration: none;
}
#navhover2 {
  font-size: 77%;
  letter-spacing: 0.7px;
  border: none;
  color: white;
}
#navhover2:hover {
  color: black;
  background-color: white;
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
  margin-top: 3%;
  margin-bottom: 3%;
  text-align: center;
  font-size: 140%;
  box-shadow: 0px;
  width: 100%;
}
#sortbtn1:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#sortbtn2:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#category-btn-pc:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#toolbar {
  position: fixed;
  z-index: 1000;
}
#filter-row {
  background-color: #f5f5f5c2;
  color: black;
  height: 150px;
}
#sortproducts {
  margin-top: 4%;
  margin-left: 50%;
  width: 100%;
}
#home-icon {
  margin-top: -1%;
}
#store-col {
  background-color: white;
  padding: 0px 0px 0px 0px;
}
span {
  margin-left: 2%;
}
#dialog-img {
  width: 20%;
  height: 30%;
  margin-right: 90%;
}
#dialogbox {
  height: 600px;
  top: 5%;
  width: 90%;
  left: 5%;
}
#sortbtn1 {
  width: 25%;
  height: 40px;
  font-size: 80%;
  margin-top: -0.5%;
  opacity: 1;
}
#sortbtn2 {
  width: 25%;
  height: 40px;
  font-size: 80%;
  margin-top: -0.5%;
  opacity: 1;
}
#prodactions {
  display: inline-block;
}
#viewbtn {
  width: 40%;
  font-size: 70%;
  margin-left: 5%;
  margin-top: -2%;
  color: rgb(0, 0, 0);
  height: 35px;
  text-align: center;
  background-color: rgb(255, 255, 255);
}
#quick-view-icon {
  z-index: 1000;
  margin-top: -5%;
  margin-left: 10%;
}
#productimages {
  margin-top: 9%;
  width: 110%;
  height: 320px;
}
#addtocartbtn {
  width: 40%;
  font-size: 70%;
  margin-left: 5%;
  margin-top: -2%;
  color: rgb(0, 0, 0);
  height: 35px;
  background-color: rgb(255, 255, 255);
}
#productname {
  margin-top: 7%;
  text-align: center;
  font-size: 90%;
}
#productprice {
  text-align: center;
  margin-top: -2%;
  font-size: 160%;
  color: black;
}
.el-col {
  width: 20%;
  margin-top: 8%;
}
.el-dropdown {
  display: inline;
  margin-left: 70%;
}
#sortproducts {
  margin-left: 5%;
}
.px-0 {
  text-align: center;
  font-size: 200%;
  margin-top: 5%;
}
.line {
  width: 590px;
  height: 47px;
  border-bottom: 1px solid black;
  margin-left: 28%;
  margin-bottom: 3%;
}

h1 {
  margin: 10% 35%;
}
.el-row,
.el-col {
  overflow: hidden;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  overflow: hidden;
}
img {
  height: 300px;
  width: 100%;
  margin-top: 10px;
  word-spacing: 3px;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

#bggrad {
  height: 210px;
  margin-top: 4%;
}
img:hover {
  transform: scale(1.2);
  transition: 0.8s;
}
.grid-content:hover #addtocartbtn {
  opacity: 1;
  transform: translateY(-120%);
  transition: all 0.8s ease-in-out;
}
.grid-content:hover #viewbtn {
  opacity: 1;
  transform: translateY(-120%);
  transition: all 0.8s ease-in-out;
}
#addtocartbtn,
#viewbtn {
  opacity: 0;
}
#shopnow {
  margin-top: -30%;
  margin-left: 28%;
}
#featured {
  margin-top: 2%;
  text-align: center;
}
</style>
