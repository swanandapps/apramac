<template>
<div>

<div id="totalorder">
    <div id="order-maths" >Order Total : {{total}} - {{(total*code)/100}} (Discount)= {{total-(total*code)/100}} ₹ (inclusive of all taxes)</div>
   <div id="proceed-div">
    <router-link to="/checkout" > <el-button aria-label="Proceed for checkout"  id="proceed-div-btn"  >Proceed</el-button></router-link>
    </div>
  </div>
 
   <el-row id="promo" style="margin-top:5%">
<el-col  style="width:50%;margin-left:5%"  :span="12" >

<el-input id="promovalue"
      v-model="promo"
      :rules="promorules"
      label="Enter Coupon Code"
      required
    ></el-input>
</el-col>
    <el-col style="width:30%"  :span="12">
            <el-button aria-label="Apply Promo" @click="usepromo()" id="promobtn">Apply Promo </el-button>
            </el-col>

   </el-row>
<el-row id="products-container">
        <el-row v-for="(products,index) in cartproducts" :key="index" :offset="1"  id="products"  >


 <el-row id="cartproducts">
                <h4 id="product1">Product</h4>
                <h4  id="product2">Price</h4>
                <h4  id="product3">Quantity</h4>

        </el-row>

<el-row id="cartproducts">
<el-row id="product-info">
                  <el-col id="col-img"><img :alt="products.name" onContextMenu="return false;" id="productimages" :src="products.image"></el-col>
    <el-col id="productname">
      <p>{{products.name}}</p>
      <p>{{products.price*products.quantity}} ₹ </p>
      </el-col>
 </el-row>

          
<el-col id="counter-product" >
<el-button aria-label="remove from cart" @click="subq(index)"  small id="subq" ><icon name="minus"></icon></el-button>
<h4 id="productquan">{{products.quantity}}</h4>

<el-button aria-label="add to cart" @click="addq(index)" small id="addq" ><icon name="plus"></icon></el-button>
</el-col>

 <el-button id="delete-icon" @click="remove(index)"><icon  id="removeicon" name="trash" ></icon></el-button>



    </el-row>


</el-row>
</el-row>


<el-row id="proceed-mobile">


<router-link to="/checkout" ><el-button  id="proceed-mobile-btn">Proceed</el-button></router-link>

</el-row>

    </div>

</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { Notification } from 'element-ui'
import Icon from "vue-awesome/components/Icon";
export default {
  data: function() {
    return {
      code: 0,
      promo:''
    };
  },
  components:{
Icon
  },

  methods: {
    remove: function(index) {

     
      this.$swal({
        title: "Remove from Cart?",

        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "Red",
        confirmButtonText: "Yes, Remove it!"
      }).then(result => {
        if (result.value) {
          this.$swal("Removed!", "Cart is Updated", "success");
          this.cartproducts.splice(index, 1);
        }
      });
    },
    addq: function(index) {
      this.cartproducts[index].quantity++;
    },
    subq: function(index) {
      let flag = 1;
      if (this.cartproducts[index].quantity < 2) {
        flag = 0;
      }
      if (flag == 1) {
        this.cartproducts[index].quantity--;
      }
    },

    usepromo: function() {

      console.log(this.promo)
      if (this.promo == "NEW20") {
        this.code = 20;
        Notification.success({
          title: "Success, NEW20 Promocode Applied",

          offset: 140,
          duration: 4400
        });

        this.$store.state.promo_applied=true

        document.getElementById("promo").style.display = "none";
      } else {
        Notification.error({
          title: "Incorrect Code, Try Again",

          offset: 40,
          duration: 2000
        });
      }
    }
  },

  beforeCreate() {
    this.$store.state.promo_applied=false
    console.log(this.quantity);
    console.log(this.$store.state.cartproducts)
  },
  computed: {
    ...mapState(["cartproducts", "quantity", "code","promo_applied"]),

    total() {
      return this.cartproducts.reduce(
        (acc, item) => (acc += parseFloat(item.price * item.quantity)),
        0
      );
      //console.log(sum)
    }
  }
};
</script>
<style scoped>
#product-info{
  display: flex;
  width: 100%
}
#order-maths{


  width: 80%;
  font-size: 150%;
  margin-top: 1%;
  padding-left: 2%;
  
  
}
#proceed-div{

width: 40%;
text-align: center


}
#proceed-div-btn{
margin-top: 2%;
width: 30%;
font-size: 120%

}
#delete-icon{
      margin-right: 5%;
    border: solid white;
}
#addq{

  width: 34%;
 height: 48px;
   -moz-outline-style: none;
	outline:none;
	outline: 0;
}
#subq{
width: 34%;
height: 48px;
 -moz-outline-style: none;
	outline:none;
	outline: 0;

}
#proceed-mobile{

  display: none
}
#promobtn {
  margin-top: 12;
  width: 70%;
  height: 40px;
  margin-left: 3%;
   -moz-outline-style: none;
	outline:none;
	outline: 0;
}
#shop-head {
  margin-top: 3%;
  margin-left: 5%;
}
#productquan {
          margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 16%;
    font-size: 144%;
}
#row2 {
  display: none;
}
#product1 {
  margin-left: 3%;
}
#product2 {
  margin-left: 10%;
}
#product3 {
  margin-left: 34%;
}
#counter-product {
  margin-bottom: 1%;
  margin-left: 18%;
}
#col-test {
  margin-left: 10%;
  margin-top: 1%;
  font-size: 130%;
}
#removeicon {
  margin-right: 5%;
  cursor: pointer;
}
#removeicon:hover {
  color: red;
}
#addq:hover {
  color: white;
  background-color: black;
}
#subq:hover {
  color: white;
  background-color: black;
}
#row-textinfo {
  display: inline-flex;
}
#col-img {
  margin-left: 0%;
  width: 98%
}

#checkoutbtn {
  margin-right: 3%;
  width: 35%;
  border: none;
}
#totalorder {
  background: #1D976C;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #61cc89, #38c191);;  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #61cc89, #38c191); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
  top: 10%;
  height: 60px;
  
  box-shadow: 0px 0px 0px 0px;
  display: flex
}
#cartproducts {
  margin-left: 1%;
  display: inline-flex;
  margin-top: 2%;
  width: 100%;
      margin-bottom: 3%;
}
#products {
  width: 90%;
  border: solid 0.5px;
  margin-top: 2%;
  margin-left: 5%
}
#ordertotal {
  display: inline-block;
  margin-left: 90%;
  margin-top: -40%;
  width: 25%;
  height: 400px;
}
#checkout {
  display: inline-block;
}
#addremove {
  display: inline-block;
  margin-left: -10%;
}
#productname {
  font-size: 110%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-left: -2%;
}
#productdata {
  margin-left: 2%;
  margin-top: 3%;
  position: absolute;

  display: inline-block;
}
#productimages {
     width: 69%;
    height: 200px;
    margin-top: -2%;

}
a {
  background-color: white;
  text-decoration: none;
  color: black;
}
@media screen and (max-width: 480px) {
#products-container{
  margin-bottom: 20%
}
#subq{
  margin-left: 2%
}
#product-info{

  display: flex
}
#delete-icon{
  padding: 0px;
    width: 30%;
    margin-left: 34%;
    border: solid 0.5px white;
    -moz-outline-style: none;
	outline:none;
	outline: 0;
  background-color: white
}

  #proceed-mobile{

   display: block;
    width: 100%;
    margin: 0;
    /* height: 200px; */
    background-color: black;
     -moz-outline-style: none;
	outline:none;
	outline: 0;
  }
  #productdata {
  margin-left: 2%;
  margin-top: 3%;
  position: absolute;

  display: inline-block;
  width: 60%
}

  #proceed-mobile-btn{

        width: 100%;
    background-color: black;
    color: white;
    font-size: 111%;
    /* top: -15%; */
    position: fixed;
    top: 94%;
        height: 51px;
        font-family: 'Cantarell', sans-serif;
  }
  #promobtn {
   width: 124%;
    height: 40px;
    margin-left: 7%;
    margin-top: -2%;

  }
  #checkoutbtn {
  display: none
}
  
  #shop-head {
    margin-top: 5%;
  }
  #addq {
    margin-left: 13%;
        height: 50px;
    padding: 10px 15px;
     -moz-outline-style: none;
	outline:none;
	outline: 0;
  }
  #productquan {
       margin-top: 5%;
    margin-left: 9%;
  }
  #totalorder {
    font-size: 60%;
   
  }
  h1 {
    font-size: 90%;
    text-align: center;
  }
  #product1,
  #product2,
  #product3 {
    display: none;
  }
  #cartproducts {
    display: grid;
  }
  #productimages {
    width: 60%;
    margin-left: 6%;
    margin-top: 3%;
    height: 123px;
  }
  #productname {
     font-size: 80%;
    margin-left: -2%;
    margin-top: 5%;
    width: 100%;
  }
  #col-test {
    font-size: 90%;
    margin-left: 5%;
    width: 95%
  }
  #counter-product {
    display: inline-flex;
    margin-left: 0%;
    width: 100%;
    margin-top: 8%;
  }

  #removeicon {
   
        margin-bottom: 5%;
    /* text-align: center; */
    margin-right: 13%;
    margin-top: 10%;


  }
  #proceed-div{
    display: none
  }
  #order-maths{
        width: 100%;
    font-size: 150%;
    margin-top: 3%;
    padding-left: 2%;
  }
  #products{
    width: 98%;
    border: solid 0.5px;
    margin-top: 5%;
    margin-left: 1%;
  }
}
</style>

