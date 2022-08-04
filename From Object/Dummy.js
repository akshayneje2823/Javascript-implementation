// var userInfo = {
//     name: "Mayank Gupta",
//     age: 30,
//     designation: "Developer"
//   }
  
//   var cloneData = userInfo;
  
//   cloneData.name = "Anshul Gupta";
  
//   if(cloneData == userInfo) {
//     console.log("Reference Comparison return true")
//   }
var initialData = { 
name: "Mayank Gupta",
age: 30
}

var finalData = {
name: "Mayank Gupta",
age: 30
}

// The value of "isEqual" equates to be "false" even if the property values are same

var isEqual = (finalData === initialData);
console.log(isEqual)