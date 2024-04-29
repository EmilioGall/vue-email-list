const { createApp } = Vue;

createApp({

   data() {
      return {

         newEmail: "",

         arrEmailList: [],

      };
   },

   created() {

      //

   },

   methods: {

      generateEmail: function () {

         axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {

               console.log("response", resp.data.response);

               this.newEmail = resp.data.response;

               console.log("newEmail", this.newEmail);

            });

      },

      cleanArrEmailList: function () {

         arrEmailList = [];

      },

   },

}).mount("#app");