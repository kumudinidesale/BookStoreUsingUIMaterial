<template>
  <v-card class="mx-auto" max-width="450">
    <v-img src="../../public/assets/success.png" height="200px"></v-img>

    <v-card-subtitle>
      Hurry!!!your order is confirmed<br />
      the order id is #123456 save the order id for <br />
      further communication.
    </v-card-subtitle>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Email Us</th>
            <th class="text-left">Contact Us</th>
            <th class="text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>kdesale1211@gmail.com</td>

            <td>+918010263659</td>
            <td>AT Post Kasare, Tal Sakri, Dist Dhule</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
   
      <v-btn color="#a03037" 
       type="Submit"
       @click="remove()"> 
       Continue Shopping </v-btn>
    
  </v-card>
</template>
<script>
import CartService from "../service/CartService"
export default {
  name: "PlaceOrder",

 methods:{
    remove(){
     
      CartService.deleteOrder()
         .then((data) => {
          console.log(data);
         this.$router.push({ name: "home" })
       
         })
      
          
    },
 },
 };
  
</script>