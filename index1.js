// let sum="";
// let i=0;
// while (i<=100){
 
//     sum=sum+i +" ";
//     i++

// }
// console.log( sum);




// let yet=0;
// let i=0;
// while (i<=100){
//     console.log(i,"i value");
//     yet=yet+i;
//     i++

// }


// let yet=[1, 2 ,3 ,4]
// let i=0;
// while (i<=4){
//     console.log(yet [i]);
   
    
//     i++

// }

// let limit = 10; //  



// let sum = 0;
// let number = 1;

// while (number<=50) {
//     sum=sum+number
//   number++;
// }


// console.log(sum)




// let string="jaipur";
// let i=0;

// while(i<string.length){

//     if (string[i]=="r"){
//         console.log("true")
//     }
//     else{console.log("false")}
//     i++
// }



// let radha ="rajasthan";
// let a=0;
// while(a<radha.length){

//     if(radha[a]=="t"){
//         console.log("ture")
//     }
//     else{console.log("flase")}
//     a++
// }

// let num=1;
// let odd=0;
// let even=0;

// while(num<=20){
//     if(num%2){
//         even++
//         console.log("numberis even",num);
//     }
//     else{
//         odd++
//         console.log("number is odd",num);
       
        
//     }
//     num++
// }
//  console.log(odd,even)
 






// let arr=[2,4,6,7,9,10,12]
// let i=0;
// let sumEven =0;
// let sumOdd =0;


// while(i<arr.length){
//     if(arr[i]%2==0){
//         sumEven=sumEven+arr[i]
//     }
//     else if (arr[i]%2==1) {

//         sumOdd= sumOdd+arr[i]
        
//     }
//     i++
// }
// let totelSum= sumEven+sumOdd;
//     let avg= totelSum /arr.length
//     console.log(sumEven)
//     console.log(sumOdd)
//     console.log(totelSum)
//     console.log(avg)

// -------------------------------------

//  let number=[1,2,3,4,5,6,7,8,9,10,];
//   let data=number.map(function(costitem){
//     return costitem*2
//   }

//   )
//   console.log (data)



// -----------------


// let number=[1,2,3,4,5,6,7,8,9,10,];

// let data=number.forEach(function(costitem){
   
//   console.log (costitem)
// }

// )


let details=[
  {name: "devid",city:'jaipur'},
   {name: "rahual",city:'jodhpur'},
    {name: "ram",city:'delhi'},
  {name: "vivek",city:'mumbai'}
]
let data=details.filter(function (item) {
  return item.city=='jaipur'
});
console.log(data)
 
