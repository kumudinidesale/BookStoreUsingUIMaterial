<template>
  <v-app>
    <v-app-bar app color="#a03037" dark>
      <div >
        <router-link to="/"
          ><v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="assets/education.png"
            transition="scale-transition"
            width="40"
        /></router-link>

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" />

        <h1>BookStore</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
 
      <div class="text-center">
        <v-dialog v-model="dialog" width="400">
          <template v-slot:activator="{ on, attrs }">
            
              <v-icon dark v-bind="attrs" v-on="on">mdi-account</v-icon>
           
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              User Page
            </v-card-title>

            <v-card-text> Hello, Please Login. </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <router-link to="/LoginPage"
                ><v-btn color="#a03037" @click="dialog = false">
                  Login
                </v-btn></router-link
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    
      <router-link to="/about"><v-icon>mdi-cart</v-icon></router-link>
      <!-- <div class="cartbtn">{{ CartNo.length }}</div> -->
    </v-app-bar>

 </v-app>
</template>

<script>

export default {
  name: "Header",
data(){
    return{
 dialog: false,
    }
   
},
 
 
}
</script>