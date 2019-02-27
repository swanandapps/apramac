<template>
<div>

<el-row id="checkout-row">
         <el-col :span="12">

          <div id="order-summary" class="grid-content bg-purple-light">


          <h1>Order Summary :  {{total -total*code2/100}}</h1>
          <div id="order-summ-div" v-for="(product,index) in cartproducts" :key="index">
          <img id="order-summ-img" onContextMenu="return false;" :src="cartproducts[index].image">
 <div id="productdata">
          <p id="productname" >{{cartproducts[index].name}}</p>
           <p id="productprice" >{{cartproducts[index].price}} x {{cartproducts[index].quantity}}  </p>
             <p id="productprice" >Total :{{cartproducts[index].quantity*cartproducts[index].price}} ₹ </p>


          </div>
          </div>
          </div>
          </el-col>
  <el-col :span="12"><div class="grid-content bg-purple">

         <v-form id="checkout-form" ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="firstname"
      :rules="nameRules"
      :counter="15"
      label="FirstName"
      required
    ></v-text-field>
     <v-text-field
      v-model="lastname"
      :rules="nameRules"
      :counter="15"
      label="LastName"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="number"
      :rules="numberRules"
      label="Contact Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="address"

      :rules="addressRules"
      label="Address"

      required
    ></v-text-field>




    <v-btn id='submit-proceed'
      :disabled="!valid"
      @click="submit"
    >
      Proceed to Payment
    </v-btn>

  </v-form>
          </div></el-col>

</el-row>


</div>


</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cartproducts", "code2"]),
    total() {
      return this.cartproducts.reduce(
        (acc, item) => (acc += parseFloat(item.price * item.quantity)),
        0
      );
    }
  },
  created: function() {
    console.log(this.cartproducts);
    for (let i = 0; i < this.cartproducts.length; i++) {
      //this.$data.itemsordered[i].push(this.cartproducts[i].name);

      console.log(this.$data.itemsordered.itemnames);

      this.$data.itemsordered.itemnames.push(this.cartproducts[i].name);
      this.$data.itemsordered.itemnames.push(this.cartproducts[i].quantity);
    }
    console.log(this.$data.itemsordered);
    var utc = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    console.log(utc);
  },

  data: () => ({
    valid: true,
    itemsordered: {
      itemnames: []
    },
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 30) || "Name must be less than 30 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    number: "",

    numberRules: [v => !!v || "Contact Number is required"],
    address: "",
    addressRules: [v => !!v || "Address is required"]
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported

        const orderdata = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          number: this.number,
          address: this.address,
          itemsordered: this.$data.itemsordered.itemnames,
          ordertotal: this.total,
          orderdate: new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, "/")
        };
        console.log(orderdata);
        axios
          .post(
            "https://aprakrta-48342.firebaseio.com/userdata.json",
            orderdata
          )
          .then(res => console.log(res))
          .catch(error => console.log(error));
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
input {
  font-size: 200%;
}
#submit-proceed {
  margin-left: 25%;
  margin-top: 10%;
  width: 50%;
  height: 50px;
  font-size: 130%;
  background-color: black;
  color: white;
}
#productprice {
  margin-top: -3%;
}
#order-summ-div {
  margin-top: 5%;
}
#checkout-row {
  margin-top: 4%;
}
#order-summ-img {
  width: 15%;
  height: 90px;
}
#checkout-form {
  margin-left: 10%;
  margin-right: 5%;
}
#order-summary {
  margin-left: 6%;
  background-color: rgba(250, 250, 250, 0.952);
  border: solid 1px black;
  padding: 5% 5% 5% 5%;
}
#productdata {
  margin-left: 2%;
  margin-top: 1%;
  position: absolute;

  display: inline-block;
}

@media screen and (max-width: 480px) {
  #submit-proceed {
    width: 90%;
    text-align: center;
    left: -16%;
    font-size: 75%;
  }
  h1 {
    font-size: 140%;
    color: black;
  }
  #checkout-form {
    width: 170%;
    font-size: 80%;
    margin-top: 5%;
  }

  #checkout-row {
    display: grid;
    top: 150px;
  }
  #order-summary {
    width: 190%;
    font-size: 80%;
  }
}
</style>
