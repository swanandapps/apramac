<template>

        <div>


                <h1 id="h1" style="text-align:center;">Orders Placed</h1>

<el-row id="col-order" v-for="(order,index) in orders" :key="index"  >


<div style="margin-top:3%;margin-left:3%">
 <h5>{{orders[index].itemsordered.toString().split(",")}}</h5>

<p> Total Order Value : {{orders[index].ordertotal}} ₹</p>



  <div class="text item">
          <h3>Shipment Address</h3>
         <b>Order Placed on : </b>{{orders[index].orderdate}}<br>
  <b>Name : </b>{{orders[index].firstname}}

   {{orders[index].lastname}}<br>
 <b> Email Address :</b> {{orders[index].email}}<br>
  <b>Contact Number :</b> {{orders[index].number}}<br>
  <b> Address :</b> {{orders[index].address}}<br>
  </div>

</div>


</el-row>

        </div>

</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    orders: []
  }),
  created() {
    axios
      .get("https://aprakrta-48342.firebaseio.com/userdata.json")
      .then(res => {
        const data = res.data;

        for (let key in data) {
          const order = data[key];
          order.id = key;
          this.$data.orders.push(order);

          console.log(this.orders);
        }
      });
  }
};
</script>

<style scoped>
#col-order {
  border: 1px solid;
  margin-left: 7%;
  margin-top: 5%;
  width: 90%;
}
#h1 {
  margin-bottom: 5%;
}
#ordercard {
  margin-left: 30%;
}
</style>

