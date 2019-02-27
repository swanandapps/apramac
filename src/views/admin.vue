<template>
   <div>
<h1 style="text-align:center;margin-top:5%">Add New Product</h1>
<div class="line"></div>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div>


   

<el-form id="addprodform" ref="form" :model="form" label-width="120px">
  <el-form-item label="Product Name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Product Price">
   
    <el-input v-model="form.price"></el-input>

  </el-form-item>

    <el-form-item label="Product Type">
    <el-select v-model="form.type" placeholder="Please Select Product Type">
      <el-option label="Home Decor" value="home decor"></el-option>
      <el-option label="Paintings" value="paintings"></el-option>
       <el-option label="Sclupture" value="sclupture"></el-option>
        <el-option label="Pottery" value="pottery"></el-option>
    </el-select>
  </el-form-item>

<el-form-item label="Image">
  
    <input type="file" @change="onFileChange">

  </el-form-item>


  <el-form-item label="Product Description">
    <el-input type="textarea" v-model="form.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>

  
  <div class="line"></div>
<h1 style="text-align:center;margin-top:5%">Update Product Dispatch Date</h1>
<div class="line"></div>
  <form  id="dispatchform">

 <v-text-field id="inputdispatch"
      v-model="dispatchdate"
    hint
      label="Dispatch Date"
      required

    ></v-text-field>
    <v-btn @click="submitdate"> Update Date</v-btn>

  </form>
<div class="line"></div>
 </el-col>

<orders></orders>



   </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';
import orders from '../components/orders.vue';
import axios from 'axios'

export default {
  data() {
    return {

      
    
   form: {
      name: "",
      price: "",
      image: "",
      description: "",
      type: "",
      date:''
    }
    };
  },
  components: {
    orders
  },
  computed: {
    ...mapState(["orders", "disdate"])
  },
  mixins: [validationMixin],

  validations: {
    name: { required },
    price: { required },
    image: { required },
    description: { required },
    type: { required }
  },

 
    
  

  methods: {

 onFileChange(e) {
     
let tempthis=this
     var file = e.target.files[0]
var storageref = firebase.storage().ref('images/'+ file.name)

storageref.put(file).then(function(snapshot) {



storageref.put(file)



  if(snapshot.state == "success"){

storageref.getDownloadURL().then(function(url) {



  tempthis.main_image = url 
  console.log(url)
  console.log(tempthis.main_image);
  tempthis.$swal("Success!", "Image Successfully Added", "success");

  })
  }
});



  
      },


    onSubmit() {
      let tempthis=this
       var date = new Date().toString().slice(4,15);
      this.$v.$touch();
      const productdata = {
        name: this.form.name,
        price: this.form.price,
        image: tempthis.main_image,
        description: this.form.description,
        quantity: "1",
        type: this.form.type
      };
      console.log(productdata);

  db.collection("products").add({
        name: tempthis.form.name,
        price: tempthis.form.price,
        image: tempthis.main_image,
        description: tempthis.form.description,
        quantity: "1",
        type: tempthis.form.type,
        date:date
       
        }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
     tempthis.$swal("Success", "Product Has Been Added Sucesfully", "success");
   
})
.catch(function(error) {
    console.error("Error adding document: ", error);
      tempthis.$swal("Error!", "Error While Adding Product, Try Again", "error");
});


}


     ,

    ...mapMutations(["ADD_DATE"]),
    submitdate: function() {

      let tempthis=this
      const disdate = {
        date: this.dispatchdate
      };
      this.$swal({
        title: "Update the Dispatch Date",

        type: "info",
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "Red",
        confirmButtonText: "Yes, Update!"
      }).then(result => {
        if (result.value) {
          
         db.collection("dispatchdate").doc("yqFDg02NzmiDfGMjkd5m").set({
    date:tempthis.dispatchdate
})
.then(function() {
    console.log("Document successfully written!");
    tempthis.$swal("Updated!", "Dispatch Date is Updated", "success");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
           
            
        }
      });
    },

    clear() {
      this.$v.$reset();
      this.name = "";
      this.price = "";
      this.description = "";
      this.image = "";
      this.type = "";
      this.select = null;
      this.checkbox = false;
    }
  },
  
//remaining firestore
  created() {
    axios
      .get("https://aprakrta-48342.firebaseio.com/userdata.json")
      .then(res => {
        const data = res.data;
        console.log(res.data);

        for (let key in data) {
          const order = data[key];
          order.id = key;
          this.orders.push(order);
        }
      });
  }
};
</script>
<style >
#dispatchform {
  margin-left: 30%;
  margin-top: 5%;
  width: 40%;
  margin-bottom: 5%;
}
#orders-col {
  display: -webkit-inline-box;
}
#boxcard {
  margin-left: 15%;
  margin-top: 8%;
}
.el-col-8 {
  display: -webkit-inline-box;
}
.el-card box-card {
  width: 30%;
  margin-left: 10%;
}
#addprodform {
  width: 50%;
  margin: 5% 30%;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.line {
  width: 70%;
  height: 47px;
  margin-left: 17%;
  margin-bottom: 5%;
  border-bottom: 1px solid black;
}
</style>
