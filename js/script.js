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

               // console.log("response", resp.data.response);

               this.newEmail = resp.data.response;

               console.log("newEmail", this.newEmail, typeof this.newEmail);

               if (this.newEmail !== "") {

                  this.pushInArrEmailList();
   
                  console.log("--------------------");
   
                  console.log("arrEmailList", this.arrEmailList);
   
                  this.newEmail = "";
   
               } else {
   
                  this.generateEmail();
   
               };

            });

      },

      pushInArrEmailList: function () {

         this.arrEmailList.push(this.newEmail);

      },

      fillArrEmailList: function () {

         let i = 0;

         while (i < 10) {

            this.generateEmail();

            i++;

         };

      },

      cleanArrEmailList: function () {

         arrEmailList = [];

         // console.log("arrEmailList", this.arrEmailList);

      },

   },

}).mount("#app");