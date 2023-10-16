/// <reference types="cypress" />

describe('JSON OBJECT',()=>{
    it('JSON OBJECT',()=>{
   cy.visit('https://google.com')

   const simpleObject={"key1":"value1","key2":"value2","key3":"value3"}
   console.log(simpleObject.key1)//value1 yazdirir
   console.log(simpleObject["key3"]) //value3 yazdirir
   

   const simpleArrayOfValue=["one","two","three"]
   console.log(simpleArrayOfValue[0])//one

const arrayObject=[{"key1":"value1"},{"key2":"value2"},{"key3":"value3"}]
console.log(arrayObject[2].key3)//value3

const dataType={"string":"metin","number":15}

const body={
   "Student":[
  
     { "FirstName":"Ayse","LastName":"Arzu" },
     { "FirstName":"Fatih","LastName":"Arzu" },
     { "FirstName":"Ebrar","LastName":"Battal" }
             ]
}

console.log(body.Student[2].LastName)

console.log(body.Student[1].FirstName)
console.log(body)
//inspect-> network -> Fetch/XHR

    })
   
   })