<template>
 <v-app>

  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#a03037"
        
         v-bind="attrs" v-on="on"
        >
          Login
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
             
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                 v-model="formValue.email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                 v-model="formValue.password"></v-text-field>
              </v-col>
             
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
         
          <v-btn
            color="#a03037"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="#a03037"
            text
          @click="addUserLog"
           >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   
 
   <v-dialog
      v-model="Login"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#a03037"
        
         v-bind="attrs" v-on="on"
        >
          SigUp
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="FirstName*"
                  required
                v-model="formValue.firstName"></v-text-field>
              </v-col>
               <v-col cols="12">
                <v-text-field
                  label="LastName*"
                  required
                v-model="formValue.lastName"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                 v-model="formValue.email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                 v-model="formValue.password"></v-text-field>
              </v-col>
               <v-col cols="12">
                <v-text-field
                  label="Address*"
                  required
                 v-model="formValue.address"></v-text-field>
              </v-col>
             
            </v-row>
          </v-container>
         
        </v-card-text>
       
          <v-btn
            color="#a03037"
            text
            @click="Login = false"
          >
            Close
          </v-btn>
          <v-btn
            color="#a03037"
            text
         
              @click="addUser" 
          >
            Save
          </v-btn>
           <v-alert
      :value="alert"
      color="pink"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
     Register Success
    </v-alert>
          <v-spacer></v-spacer>
          
      
      </v-card>
    </v-dialog>
  </v-row>
 </v-app>
</template>
<script>
import User from "../service/User"

    export default {
     
        name: "Login",
    data () {
      return{
       formValue: {
        firstName: " ",
        lastName:" ",
        email:" ",
        address: " ",
        password: " ",
       },
      dialog:false,
      Login:false,
      alert:false,
        Contacts: [],
       
    }
    },
    methods:{
  addUser() {
   console.log(this.formValue);
      User.addUserRegister(this. formValue).then((response) => {
        console.log(response.data.data);
        this.Contacts = response.data.data;

      })

      this.dialog = false
      this.alert=!alert

    },
    addUserLog() {
   console.log(this.formValue);
  const login=
        {
          email:this.formValue.email,
          password:this.formValue.password
        }
   console.log(login);
      User.addUserLogin(login).then((response) => {
        console.log(response.data.data);
        this.Contacts = response.data.data;
      });
      this.dialog = false
      this.alert=!alert
      this.$router.push({ name: "home" })
    }
     }
  }
    
</script>