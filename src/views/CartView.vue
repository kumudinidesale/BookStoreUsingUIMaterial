<template>
<div>
<Header/>
  <div>
    
    <section v-if="count > 0"  justify="center">
      <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>Your Cart</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Product</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Total</th>
                    <th class="text-left">remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="BookInfos in BookInfo" :key="BookInfos">
                    <td>{{ BookInfos.book.bookName }}</td>
                    <td>{{ BookInfos.book.price }}</td>
                    <td>
                      <v-btn
                        small
                        @click="
                          decrement(
                            BookInfos.cartId,
                            BookInfos.quantity,
                            BookInfos.book.price
                          )
                        "
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      {{ BookInfos.quantity }}
                      <v-btn
                        small
                        @click="
                          increment(
                            BookInfos.cartId,
                            BookInfos.quantity,
                            BookInfos.book.price
                          )
                        "
                      >
                        <v-icon> mdi-plus</v-icon>
                      </v-btn>
                    </td>
                    <td>{{ BookInfos.book.price * BookInfos.quantity }}</td>
                    <td>
                      <button
                        class="delete-product"
                        @click="remove(BookInfos.cartId)"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>CustomerDetails</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row justify="center">
              <v-col cols="12" sm="10" md="8" lg="6">
                <v-app-bar color="#a03037" dark>
                  <!-- <div>
            <pre>
            {{JSON.stringify(formValues,null,2)}}
            </pre>
            </div> -->
                  <h2>CustomerDetails</h2>
                </v-app-bar>
                <v-card ref="form">
                  <v-card-text>
                    <v-text-field
                      ref="firstname"
                      v-model="firstname"
                      :rules="[() => !!firstname || 'This field is required']"
                      :error-messages="errorMessages"
                      label="Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="lastname"
                      v-model="lastname"
                      :rules="[() => !!lastname || 'This field is required']"
                      :error-messages="errorMessages"
                      label="PhoneNumber"
                      required
                    ></v-text-field>

                    <v-text-field
                      ref="Email"
                      v-model="Email"
                      label="Pincode"
                    ></v-text-field>

                    <v-text-field
                      ref="Address"
                      v-model="Address"
                      :rules="[
                        () => !!Address || 'This field is required',
                        () =>
                          !!Address & (Address.length <= 25) ||
                          'Address must be less than 25 characters',
                        addressCheck,
                      ]"
                      label="Address Line"
                      placeholder="Snowy Rock Pl"
                      counter="25"
                      required
                    ></v-text-field>
                    <v-container fluid>
                      <v-radio-group v-model="radios">
                        <template v-slot:label>
                          <div><strong>Type</strong></div>
                        </template>
                        <v-radio value="Home">
                          <template v-slot:label>
                            <div><strong>Home</strong></div>
                          </template>
                        </v-radio>
                        <v-radio value="Work">
                          <template v-slot:label>
                            <div><strong>Work</strong></div>
                          </template>
                        </v-radio>
                        <v-radio value="Other">
                          <template v-slot:label>
                            <div><strong>Other</strong></div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </v-container>
                  </v-card-text>

                  <v-btn color="primary" text @click="submit"> Continue </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>OrderSummery</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card class="mx-auto" max-width="944" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">Order</div>
                  <div
                    class="col-md-4"
                    v-for="BookInfos in CartData"
                    :key="BookInfos"
                  >
                    <div class="total">
                      <div class="caption">
                        <p>
                          <strong
                            >BookName:{{ BookInfos.book.bookName }}</strong
                          >
                        </p>
                        <p>authorName:{{ BookInfos.book.authorName }}</p>
                        <p class="golden">Price:RS{{ BookInfos.total }}</p>
                      </div>
                    </div>
                  </div>
                  <v-card-actions>
                    Subtotal:{{ BookInfo.total }}
                  </v-card-actions>

                  <v-list-item-subtitle
                    >Shipping:FreeShipping</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <hr />
              <v-list-item-title class="text-h5 mb-1">
                Total:{{ BookInfo.total }}
              </v-list-item-title>

              <router-link to="/placeOrder"> <v-btn
                color="#a03037"
                text
                type="Submit"
                @click="addToOrder(BookInfo.total)"
              >
                PLACEORDER
              </v-btn></router-link>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </section>
    <section v-else>
       <v-card
    class="mx-auto"
    max-width="344"
   
  >
  
<v-row
    align="center"
     justify="center"
  >
   <v-col
          cols="20"
        >
    <v-card-text>
 
      <h2 color="#a03037" >Your Card</h2>
     
      <v-icon x-large   >mdi-cart-off</v-icon>
     
      <div class="text--primary">
      Your cart is empty, fill it up!
      </div>
     
    </v-card-text>
   </v-col>
     </v-row>
    <v-card-actions>
       <router-link to="/">
        <v-btn color="#a03037"> BackToHome </v-btn></router-link
      >
      
    </v-card-actions>
  
  </v-card>

      <!-- <v-list-item-title class="text-h5 mb-1"> Yourcard </v-list-item-title> -->

     <!-- <v-icon>mdi-cart-off</v-icon>
      <v-card-subtitle>Your cart is empty, fill it up!</v-card-subtitle>
      <router-link to="/">
        <v-btn color="#a03037"> BackToHome </v-btn></router-link
      > -->
    </section>
  </div>
  </div>
</template>
<script>
import CartService from "../service/CartService";
import Header from "../components/Header.vue"
import OrderService from "../service/OrderService";
export default {
  name: "CartView",

  components: {
   
    Header,

  },
  data() {
    return {
      formValues: {
        userId: "23",
        address: "XYZ",
        price: "",
      },

      count: 0,
      BookInfo: [],
      CartData: [],
      cartTotalPrice: 0,
    };
  },

  methods: {
    remove(id) {
      console.log(id);
      CartService.deleteContact(id).then((data) => {
        console.log(data);
        window.location.reload();
      });
    },

    getBookCart() {
      CartService.getAllCart().then((response) => {
        console.log(response);
        this.BookInfo = response.data.data;
        console.log(this.BookInfo);
        // this.BookInfo.length
        this.count = this.BookInfo.length;
        console.log(this.count);
        // this.count.
        this.CartData = response.data.data;
        this.setTotalValue();
      });
    },

    increment(id, quantity, cartprice) {
      console.log(cartprice);

      this.counter = quantity;
      this.counter++;
      this.cartTotalPrice = cartprice * this.counter;
      console.log(this.cartTotalPrice);
      console.log(this.counter);
      //  location.reload();

      this.updateCartQuantity(id, this.counter, this.cartTotalPrice);
    },
    decrement(id, quantity, totalPrice) {
      this.counter = quantity;
      this.counter > 0 ? this.counter-- : 0;
      this.cartTotalPrice = totalPrice * this.counter;
      console.log(this.cartTotalPrice);
      location.reload();
      console.log(this.counter);
      this.updateCartQuantity(id, this.counter, this.cartTotalPrice);
    },
    updateCartQuantity(id, quantity, total) {
      console.log(total);
      console.log(id, quantity);
      CartService.updateQuantity(id, quantity, total).then((data) => {
        console.log(data);

        this.CartData = data.data.data;
        // location.reload();
        console.log(this.CartData);
        this.getBookCart();
      });
    },
    setTotalValue() {
      console.log(this.CartData);
      // let newVar = this.BookInfo.
      let newVar = this.CartData.map((books, index) => {
        console.log(books.total);
        return books.total;
      });

      this.CartData.total = newVar.reduce((a, b) => a + b);
      console.log(this.CartData.total);
      // this.setState({
      //     discountCoupon: this.state.totalPrice
      // })
      // console.log(this.state.totalPrice);
    },

    addToOrder(price) {
      console.log(price);
      console.log(this.CartData);
      this.formValues.price = price;

      console.log(this.formValues);
      const data = this.formValues;
      OrderService.addOrder(data)
        .then(
          (response) => {
            console.log(response);
          },
          () => this.$router.push({ name: "PlaceOrder" })
        )

        .catch((error) => {
          console.log(error);
          alert("WARNING!! Error while adding the Added Order !");
        });
    },
  },

  created() {
    this.getBookCart();
    // this.setTotalValue(this.BookInfo);
  },
};
</script>
