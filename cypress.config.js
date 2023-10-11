const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a7hu7g',
  viewportHeight:660,
  viewportWidth:1000,

  e2e: {
  //  baseUrl:'https://test.urbanicfarm.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here 
    },
    baseUrl : "https://www.google.com",
    projectId: "hhtd5p",
    "video":false,
    //testlerin videolarini kaydetmiyoruz
   // "retries":2
   //test basarisiz oldugunda onu kac kere daha calismasi gerektigini belirtiyoruz
  },
});
