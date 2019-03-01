<template>
<div>
<div>
<v-toolbar id="totalorder">
    <v-toolbar-title style="font: 200 130% 'Raleway', Helvetica, sans-serif;">Order Total  : {{total-total*code/100}} ₹ (inclusive of all taxes)</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/checkout" > <el-button id="checkoutbtn"  size="large" >Proceed</el-button></router-link>
  </v-toolbar></div>
   <h1 id="shop-head" >Shopping Cart </h1>
   <el-row id="promo" style="margin-top:1%">
<el-col  style="width:50%;margin-left:5%"  :span="12" >

<v-text-field id="promovalue"
      v-model="promo"
      :rules="promorules"
      label="Enter Coupon Code"
      required
    ></v-text-field>
</el-col>
    <el-col style="width:30%"  :span="12">
            <el-button @click="usepromo()" id="promobtn">Apply Promocode </el-button>
            </el-col>

   </el-row>

        <el-row v-for="(products,index) in cartproducts" :key="index" :offset="1" style="margin-left: 5%;" id="products"  :gutter="40">


 <el-row id="cartproducts">
                <h4 id="product1">Product</h4>
                <h4  id="product2">Price</h4>
                <h4  id="product3">Quantity</h4>

        </el-row>

<el-row id="cartproducts">

                  <el-col id="col-img"><img onContextMenu="return false;" id="productimages" :src="products.image"></el-col>
    <el-col id="productname"><p>{{products.name}}</p></el-col>

    <el-col id="col-test">

           <p>{{products.price*products.quantity}} ₹ </p>
           </el-col>
<el-col id="counter-product" >
<v-btn @click="subq(index)"  small id="subq" style="font-size:200%;width:2%"><v-icon>remove</v-icon></v-btn>
<h4 id="productquan">{{products.quantity}}</h4>

<v-btn  @click="addq(index)" small id="addq" style="font-size:200%;height:30px"><v-icon>add</v-icon></v-btn>
</el-col>

 <v-icon large  id="removeicon" @click="remove(index)">delete </v-icon>



    </el-row>


</el-row>


    </div>

</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      code: 0
    };
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
      if (document.getElementById("promovalue").value == "NEW20") {
        this.code = 20;
        this.$notify.success({
          title: "Success, NEW20 Promocode Applied",

          offset: 40,
          duration: 2000
        });

        document.getElementById("promo").style.display = "none";
      } else {
        this.$notify.error({
          title: "Incorrect Code, Try Again",

          offset: 40,
          duration: 2000
        });
      }
    }
  },

  created() {
    console.log(this.quantity);
  },
  computed: {
    ...mapState(["cartproducts", "quantity", "code"]),

    total() {
      return this.cartproducts.reduce(
        (acc, item) => (acc += parseFloat(item.price * item.quantity)),
        0
      );
    }
  }
};
</script>
<style scoped>
#promobtn {
  margin-top: 12;
  width: 70%;
  height: 40px;
  margin-left: 3%;
}
#shop-head {
  margin-top: 3%;
  margin-left: 5%;
}
#productquan {
  margin-top: 2%;
  margin-left: 17%;
}
#row2 {
  display: none;
}
#product1 {
  margin-left: 3%;
}
#product2 {
  margin-left: 42.5%;
}
#product3 {
  margin-left: 17%;
}
#counter-product {
  margin-bottom: 1%;
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
  margin-left: 2%;
}

#checkoutbtn {
  margin-right: 3%;
  width: 15%;
  border: none;
}
#totalorder {
  background-color: rgba(0, 0, 0, 0.801);
  color: white;
  top: 10%;
  margin-top: 20%;
  box-shadow: 0px 0px 0px 0px;
}
#cartproducts {
  margin-left: 1%;
  display: inline-flex;
  margin-top: 2%;
  width: 100%;
}
#products {
  width: 90%;
  border: solid 0.5px;
  margin-top: 2%;
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
  width: 47%;
  height: 120px;
  margin-top: -2%;
}
a {
  background-color: white;
  text-decoration: none;
  color: black;
}
@media screen and (max-width: 480px) {
  #promobtn {
    width: 130%;
    height: 40px;
    margin-left: 3%;
  }
  #totalorder {
    top: 105px;
  }
  #shop-head {
    margin-top: 38%;
  }
  #addq {
    margin-left: 13%;
  }
  #productquan {
    margin-top: 2%;
    margin-left: 8%;
  }
  #totalorder {
    font-size: 60%;
    margin-top: 5%;
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
    width: 30%;
    margin-left: 30%;
    margin-top: 3%;
  }
  #productname {
    font-size: 80%;
    margin-left: 5%;
    margin-top: 5%;
  }
  #col-test {
    font-size: 90%;
    margin-left: 5%;
  }
  #counter-product {
    display: inline-flex;
    margin-left: 7%;
  }

  #removeicon {
    margin-bottom: 5%;
  }
}
</style>

