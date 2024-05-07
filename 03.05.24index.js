// <--------------------------1st  ForEach------------------------>


// Iterate an array of elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and the array itself. The index and the array are optional.



   // <--------------------------example------------------------>


// let food=["mango","apple","orange"];
// food.forEach(function(ele){
//     console.log(ele)
// })
// the output is-:
// mango
// apple
// orange

 // <--------------------------example------------------------>

//  let food=[1,2,3,4,10,6,7];
//  let sum=0;
//  food.forEach(function(ele){
//     if(ele%2==0){
//         sum=sum+ele
//     }
//  });
//  console.log(sum);



// <--------------------------2nd map------------------------>

// Iterate array elements and modify the array elements. It takes a callback function with elements, index , array parameter and returns a new array.

  // <--------------------------example------------------------>

//   let cost=[100,400,300,700];
//   let data=cost.map(function(cost){
//     return cost*2;
//   });
//   console.log(data);

// <--------------------------3rd filter------------------------>

// Filter out items which fulfil filtering conditions and return a new array.

  // <--------------------------example------------------------>

  // let details=[
  //   {name:"sohan",age:24},
  //   {name:"sohan",age:54},
  //   {name:"suresh",age:40},
  //   {name:"aman",age:30}
  // ]
  // let data= details.filter(function(costitem){
  //   return costitem.age<=30
  // });
  // console.log(data);