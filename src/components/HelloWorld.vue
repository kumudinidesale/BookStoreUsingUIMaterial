<template>
  <form class="form1">
    <v-card
      :loading="loading"
      class="mx-auto "
      max-width="100vw"
      max-height="474"
      center
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="30"
          indeterminate
        ></v-progress-linear>
      </template>
      <div>
        <v-card-title>Book ({{ count }}Items)</v-card-title>
      </div>

      <v-container fluid class="card">
        <v-row >
          <v-col v-for="BookInfos in BookInfo" :key="BookInfos.bookId">
            <v-card>
              <v-img
                :src="BookInfos.bookImage"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="150px"
                width="150px"
              />
              <v-card-title v-text="BookInfos.bookName"></v-card-title>
              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  by {{ BookInfos.authorName }}
                </div>
                <v-card-title>Price:Rs {{ BookInfos.price }}</v-card-title>
              </v-card-text>

              <v-row align="center" justify="space-around">
                <v-btn
                  color="#a03037"
                  depressed
                  elevation="2"
                  small
                  @click="AddtoCart(BookInfos.bookId, BookInfos.price)"
                >
                  <v-icon>mdi-cart</v-icon>Add To Cart
                </v-btn>
                <v-btn elevation="2" small text>
                  <v-icon>mdi-cards-heart-outline</v-icon>WhishList</v-btn
                >
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </form>
</template>

<script>
import BookStoreService from "../service/BookStoreService";
import CartService from "../service/CartService";
export default {
  name: "HelloWorld",
  data: () => {
    return {
      formValues: {
        userId: "",
        bookId: "",
        quantity: "",
        total: "",
      },
      BookInfo: [],
      count: 0,
      cards: [
        { src: "../assets/Image 7.png", flex: 6 },
        { src: "../assets/Image 11.png", flex: 6 },
        { src: "../assets/Image 10.png", flex: 6 },
        { src: "../assets/Image 18.png", flex: 6 },
      ],
    };
  },

  methods: {
    getBook() {
      BookStoreService.getAllBooks().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },
    getContactCount() {
      BookStoreService.getContactCount().then((response) => {
        console.log(response.data.data);
        this.count = response.data.data;
      });
    },
    AddtoCart(id, total) {
      console.log(this.BookInfo.bookId);
      console.log(id);
      this.formValues.bookId = id;
      this.formValues.userId = 23;
      this.formValues.quantity = 1;
      this.formValues.total = total;
      console.log(this.formValues);
      const data = this.formValues;
      CartService.addCart(data)
        .then((response) => {
          console.log(response);
          // this.BookInfo = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          alert("WARNING!! Error while adding the Added person !");
        });
    },
  },

  created() {
    this.getBook();
    this.getContactCount();
  },
};
</script>
