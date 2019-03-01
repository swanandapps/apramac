<template>


<div>




<div id='details-div' >


<div id="left-img-col1">


<img id="left-img" :src="clickedproduct[clickedproduct.length-1].image" alt="">


</div>
<div id="left-img-col"  onContextMenu="return false;">
   <vue-h-zoom :image="clickedproduct[clickedproduct.length-1].image"
  :image-full="clickedproduct[clickedproduct.length-1].image"
  :zoom-level="2" :zoom-window-x="600" :zoom-window-size="1"  onContextMenu="return false;"  :width="360" :height="570">
  </vue-h-zoom>




</div>

<div  id="productdata" >
          <p id="productname" >{{clickedproduct[clickedproduct.length-1].name}}</p>
           <p id="productprice" >{{clickedproduct[clickedproduct.length-1].price}} ₹ </p>
           <span><v-icon>local_shipping</v-icon><span>Order today and your item will be dispatched by</span><span id="dispatchdate">{{date}}</span> </span><br>
           <v-btn   @click="addtoclickedproduct(index)" id="addtocartbtn">Add to Cart</v-btn>
           <router-link style="text-decoration: none;" to="/store"><v-btn id="addtocartbtn">Back to Store</v-btn></router-link>
           <div class="line"></div>
           <h3 id="desc" >Product Description</h3>
           <div >
<p id="productdesc" >{{clickedproduct[clickedproduct.length-1].description}}  </p></div>






</div>

<div class="icon-b">
         <el-tooltip class="item" effect="dark" content="GO to Cart" placement="right-end">
<router-link  to="/cart"> <v-icon class="facebook" style="color:white" >shopping_cart</v-icon><div class="count" style="color:white">{{cartproducts.length}}</div></router-link></el-tooltip>
</div>


</div>





</div>

<!--
<div id="app2" >

        <el-row>



  <el-col onContextMenu="return false;" id="img-col" :span="12"><div  onContextMenu="return false;" id="product-img-zoom" class="grid-content bg-purple pic-box"> <vue-h-zoom :image="clickedproduct[clickedproduct.length-1].image"
  :image-full="clickedproduct[clickedproduct.length-1].image"
  :zoom-level="2" :zoom-window-x="600" :zoom-window-size="1"  onContextMenu="return false;"  :width="452" :height="681"></vue-h-zoom></div></el-col>
  <el-col :span="12"><div id="productdata" class="grid-content bg-purple-light">
          <p id="productname" >{{clickedproduct[clickedproduct.length-1].name}}</p>
           <p id="productprice" >{{clickedproduct[clickedproduct.length-1].price}} ₹ </p>
           <span><v-icon>local_shipping</v-icon><span>Order today and your item will be dispatched by</span><span id="dispatchdate">{{date}}</span> </span><br>
           <v-btn   @click="addtoclickedproduct(index)" id="addtocartbtn">Add to Cart</v-btn>
           <router-link style="text-decoration: none;" to="/store"><v-btn id="addtocartbtn">Back to Store</v-btn></router-link>
           <div class="line"></div>
           <h3 id="desc" >Product Description</h3>
           <div >
<p id="productdesc" >{{clickedproduct[clickedproduct.length-1].description}}  </p></div></div></el-col>
</el-row>

<div class="icon-b">
         <el-tooltip class="item" effect="dark" content="GO to Cart" placement="right-end">
<router-link  to="/cart"> <v-icon class="facebook" style="color:white" >shopping_cart</v-icon><div class="count" style="color:white">{{cartproducts.length}}</div></router-link></el-tooltip>
</div>
</div>

-->

</template>
<script>
import vZoom from "vue-zoom";
import PicZoom from "vuejs-picture-zoom";
import VueHZoom from "vue-h-zoom";

import { mapState } from "vuex";
import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';
export default {
  data: () => ({
    date: ""
  }),
  components: {
    vZoom,
    VueHZoom
  },
  computed: mapState(["title", "cartproducts", "clickedproduct", "disdate"]),
  methods: {
    addtoclickedproduct: function(index) {
      let flag = 1;
      for (let i = 0; i < this.cartproducts.length; i++) {
        if (this.clickedproduct[0].id == this.cartproducts[i].id) {
          this.$notify.warning({
            title: "Already Added to Cart",
            message: "Visit Cart to Checkout",
            offset: 40,
            duration: 1500
          });
          flag = 0;
        }
      }

      if (flag == 1) {
        this.cartproducts.push(this.clickedproduct[0]);

        console.log(this.cartproducts);

        this.$notify.success({
          title: "Added to Cart",
          message: "Visit Cart to Checkout",
          offset: 40,
          duration: 1500
        });
      }
    }
  },

  created() {
   let tempthis=this
    db.collection("dispatchdate").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var data = doc.data()
          tempthis.date= data.date

    });
  })
  }
};
</script>
<style>
#productdata{

  width:50%;
}

#details-div{

  width:100%;    display: -webkit-box;
  padding-top: 5%
}
#left-img-col{


  width:50%;padding-left:2%;padding-top:2%
}
#left-img-col1{


 display: none
}
@media screen and (max-width: 480px) {

  #left-img-col1{


  display: inline;
  width:50%;   
  padding-top: 27%;

}
#left-img{


      padding-top: 26%;
}
#left-img-col{


 display: none
}
  #details-div{

     display: inline-block;
     padding-top: 0%
     
}

  #left-img-col{


  padding-top:27%
}
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
.thumbnail-area {
  width: 412px;
}

.icon-b {
  position: fixed;
  top: 80%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8%;
}
.count {
  color: black;
  font-size: 110%;
  z-index: 2000;
  margin-top: -105%;
  margin-left: 80%;
}

.icon-b a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  background-color: #a52b2b;
  font-size: 120%;
  border-radius: 50%;
  height: 70px;
  width: 126%;
}

.facebook {
  color: black;
  font-size: 200%;
  margin-top: 18%;
}
a {
  color: black;
  text-decoration: none;
  border-color: black;
}
#dispatchdate {
  color: black;
  font-weight: 700;
  font-size: 110%;
}
#addtocartbtn {
  margin-top: 5%;
}

#addtocartbtn:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
span {
  margin-left: 2%;
}
#product-img-zoom {
  width: 100%;
  margin-left: 10%;
  margin-top: 6%;
  margin-bottom: 10%;
  background-size: contain
}
.line {
  width: 690px;
  height: 17px;
  border-bottom: 0.5px solid black;
  margin-left: 1%;
}
#imgcol {
  width: 30%;
}
.zoomImg {
  width: 2233px;
  height: 1000px;
  opacity: 1;
  display: none;
}

#productimages {
  width: 50%;
  height: 500px;
  margin-left: 10%;
  margin-top: 9%;
  margin-bottom: 3%;
  text-align: center;
}

#productname {
  font-size: 190%;
}
#productprice {
  font-weight: 700;
  font-size: 140%;
}
#desc {
  margin-top: 5%;
}

@media screen and (max-width: 480px) {

 #app2{

   width: 65%
 }
 
  #product-img-zoom {
    width: 140%;
    margin-left: 3%;
    margin-top: 16%;
    margin-bottom: -2%;
  }

  #img-col {
    width: 120%;
    pointer-events: none;
  }

  .img-zoom-container[data-v-cd0bf226] {
    overflow: visible;
  }
  #productdata {
    width: 93%;
    margin-left: 7%;
  
    display: inline-block;
     margin-top: 5%;
  }
  .el-row {
    margin-left: -4%;
  }
  .icon-b {
    position: fixed;
    top: 80%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 18%;
    margin-top: 15%;
  }

  #productname {
    font-size: 115%;
    margin-right: 1%;
   
  }
  #productprice {
    font-size: 100%;
  }
  .line {
    display: none;
  }
  #addtocartbtn {
    width: 15%;
    font-size: 60%;
    margin-left: 2%;
    margin-top: 8%;
  }
  #cartproducts {
    display: grid;
  }
  #desc {
    font-size: 130%;
    margin-top: 8%;
  }
  #productdesc {
    font-size: 100%;
    margin-top: 2%;
    width: 80%;
  }
  #toolbar {
    width: 90%;
    position: initial;
  }
  span {
    font-size: 80%;
    margin-left: 1%;
    margin-right: 1%;
  }
  i {
    font-size: 80%;
    margin-left: -1%;
  }
  #productimages {
    width: 70%;
    border: solid 1px rgb(88, 64, 64);
    margin-top: 80%;
  }
}
@media screen and (min-width: 481px) and (max-width: 720px) {
  #productname {
    font-size: 135%;
    margin-right: 1%;
    margin-top: 60%;
  }
  #productprice {
    font-size: 120%;
  }
}

@media screen and (min-width: 721px) and (max-width: 1024px) {
  #productname {
    font-size: 155%;
    margin-right: 1%;
    margin-top: 60%;
  }
  #productprice {
    font-size: 140%;
  }
}
</style>
