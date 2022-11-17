// const people = [{id:1, name:"John"}, {id:2, name:"Alice"}];
// const address = [{id:1, peopleId: 1, address: 'Some street 1'}, {id:2, peopleId: 2, address: 'Some street 2'}]

// const { all } = require("sequelize/types/lib/operators");

// let op = people.map((e,i)=>{
//   let temp = address.find(element=> element.id === e.id)
//   if(temp.address) {
//     e.address = temp.address;
//   }
//   return e;
// })
// console.log(op);
// const mydata = [{id:2,mobile:9876543222},{id:2,mobile:9876543212},{id:3,mobile:9844541222}]
// const responses = [{mobile:9876543222,response:'BJP'},{mobile:9876543212,response:'AAP'},{mobile:9844541222,response:'others'},
// {mobile:9876543222,response:'BJP'},{mobile:9876543212,response:'BJP'},{mobile:9876541222,response:'AAP'}]


// let op = mydata.map((e,i)=>{
//     let temp = responses.filter(element=> element.mobile == e.mobile);

//     if (temp){
//         e.responses = temp
        
//     }
//     return e
// })

// console.log(op[0])


// const data = [[1,2],[3,4],[5,6]]


// const combine = data.reduce((total,currentvalue)=>{

//     return total.concat(currentvalue)

// },[])

// console.log(combine)



// // how to paginate?

// &lt;div id="listingTable"&gt;&lt;/div&gt;
// &lt;a href="javascript:prevPage()" id="btn_prev"&gt;Prev&lt;/a&gt;
// &lt;a href="javascript:nextPage()" id="btn_next"&gt;Next&lt;/a&gt;
// page: &lt;span id="page"&gt;&lt;/span&gt;


// var current_page = 1;
// var records_per_page = 2;

// var objJson = [
//     { adName: "AdName 1"},
//     { adName: "AdName 2"},
//     { adName: "AdName 3"},
//     { adName: "AdName 4"},
//     { adName: "AdName 5"},
//     { adName: "AdName 6"},
//     { adName: "AdName 7"},
//     { adName: "AdName 8"},
//     { adName: "AdName 9"},
//     { adName: "AdName 10"}
// ]; // Can be obtained from another source, such as your objJson variable

// function prevPage()
// {
//     if (current_page &gt; 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }

// function nextPage()
// {
//     if (current_page &lt; numPages()) {
//         current_page++;
//         changePage(current_page);
//     }
// }

// function changePage(page)
// {
//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
//     var listing_table = document.getElementById("listingTable");
//     var page_span = document.getElementById("page");

//     // Validate page
//     if (page &lt; 1) page = 1;
//     if (page &gt; numPages()) page = numPages();

//     listing_table.innerHTML = "";

//     for (var i = (page-1) * records_per_page; i &lt; (page * records_per_page); i++) {
//         listing_table.innerHTML += objJson[i].adName + "&lt;br&gt;";
//     }
//     page_span.innerHTML = page;

//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }

//     if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
// }

// function numPages()
// {
//     return Math.ceil(objJson.length / records_per_page);
// }

// window.onload = function() {
//     changePage(1);
// };


// for (var i = (page-1) * records_per_page; i &lt; (page * records_per_page) &amp;&amp; i &lt; objJson.length; i++)


























// pagination?

// &lt;div id="listingTable"&gt;&lt;/div&gt;
// &lt;a href="javascript:prevPage()" id="btn_prev"&gt;Prev&lt;/a&gt;
// &lt;a href="javascript:nextPage()" id="btn_next"&gt;Next&lt;/a&gt;
// page: &lt;span id="page"&gt;&lt;/span&gt;


// var current_page = 1;
// var records_per_page = 2;

// var objJson = [
//     { adName: "AdName 1"},
//     { adName: "AdName 2"},
//     { adName: "AdName 3"},
//     { adName: "AdName 4"},
//     { adName: "AdName 5"},
//     { adName: "AdName 6"},
//     { adName: "AdName 7"},
//     { adName: "AdName 8"},
//     { adName: "AdName 9"},
//     { adName: "AdName 10"}
// ]; // Can be obtained from another source, such as your objJson variable

// function prevPage()
// {
//     if (current_page &gt; 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }

// function nextPage()
// {
//     if (current_page &lt; numPages()) {
//         current_page++;
//         changePage(current_page);
//     }
// }

// function changePage(page)
// {
//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
//     var listing_table = document.getElementById("listingTable");
//     var page_span = document.getElementById("page");

//     // Validate page
//     if (page &lt; 1) page = 1;
//     if (page &gt; numPages()) page = numPages();

//     listing_table.innerHTML = "";

//     for (var i = (page-1) * records_per_page; i &lt; (page * records_per_page); i++) {
//         listing_table.innerHTML += objJson[i].adName + "&lt;br&gt;";
//     }
//     page_span.innerHTML = page;

//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }

//     if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
// }

// function numPages()
// {
//     return Math.ceil(objJson.length / records_per_page);
// }

// window.onload = function() {
//     changePage(1);
// };


// for (var i = (page-1) * records_per_page; i &lt; (page * records_per_page) &amp;&amp; i &lt; objJson.length; i++)

// let num1 = [12,10]
// let num2=[3,4,5]

// var findMedianSortedArrays = function(num1, num2) {

//     const merge= (num1,num2)=>num1.concat(num2)

//     const data = merge(num1,num2)

//     const data2 = data.sort()

//     // console.log(data)


//     if(data2.length %2 !==0){
        
//         return data2[Math.round(data2.length-1)/2]
//     }
   

//     const mid = data2[(data2.length/2)-1]
//     const mid1 = data2[(data2.length/2)]


//     return (mid + mid1)/2
    
   

    

  
    
// };

// console.log(findMedianSortedArrays(num1,num2))


// const num = [2,6,1,15]
// const target = 18

// const num = [-1,2,1,-4] 
// const  target = 1


// const twosum = function (num,target){

   
    // for(let i=0; i<num.length; i++){
    //     for (let j=i+1; j<num.length; j++){

    //         if(num[i]+ num[j]==target){
    //             return [i,j]

    //         }
    //     }

       

        
    // }

//     map = new Map();

//      for ( let i=0; i<num.length; i++){
//         for ( let j=i+1; j<num.length; j++){

//         const h=num[i] +num[j]

//         temp = target - h
//         // console.log(temp)


//         if (map.has(temp)){
//             return [map.get(temp),i,j]
//         }else{
//             map.set(num[i],i,j)
//         }
//      }
//     }

//      return []
// }

// console.log(twosum(num,target))



// const threesum = function(num,target){
//     num.sort((a,b)=> a-b)

//     closestsum = 0

//     min = Infinity

//     for (let i = 0; i < num.length-2; i++){

//         let left = i+1 
//         let right = num.length-1

//         while (left<right){
//             sum = num[i] + num[left] + num[right]

//             diff = Math.abs(sum-target)

//             if(diff<min){

//                 min = diff

//                 closestsum = sum
//             }
//             if(sum <target){
//                 left ++
//             }else{
//                 right --
//             }
//         }

//     }
//     return closestsum 

// }

// console.log(threesum(num,target))




// const arr2 = [1,2,3];

// const removed = arr2.splice(1,1);

// console.log(removed)


// const  nums1 = [0,1,0,3,12]
// const  moveZeroes = function(nums1) {

//      let temp = 0 
//      let zeros = []
    
       


//     while (temp < nums1.length) {
//         if(nums1[temp]==0){
//             // console.log(temp)
//             nums1.splice(temp,1);
//             // console.log(temp)
//             zeros.push(0)
//             temp--;
//             // console.log(zeros)

//         }
//         temp++;
//     }
//      nums1.push(...zeros);
//      return nums1

// }

// console.log(moveZeroes(nums1))





// // Import the 'events' module
// const events = require('events');
  
// // Instantiate an EventEmitter object
// const eventEmitter = new events.EventEmitter();
  
// // Handler associated with the event
// const connectHandler = function connected() {
//     console.log('Connection established.');
  
//     // Trigger the corresponding event
//     eventEmitter.emit('data_received');
// }
  
// // Binds the event with handler
// eventEmitter.on('connection', connectHandler);
  
// // Binds the data received
// eventEmitter.on(
//     'data_received', function () {
//         console.log('Data Transfer Successful.');
//     });
  
// // Trigger the connection event
// eventEmitter.emit('connection');
  
// console.log("Finish");




// const events = require ('events')

// const eventEmitter =new events.EventEmitter();


// const handler = function connection (){
//     console.log ('conneection successfull')
//     eventEmitter.emit('data_transfer')
// }
// eventEmitter.on('connet',handler)

// eventEmitter.on('data_transfer', function (){
//     console.log ('data_transfer has been successful ')
// })

// eventEmitter.emit('connet')

// console.log('process finished ')




// const promise = new Promise(function (resolve, reject){

//     const str1 = 'swapnil'
//     const str2 ='swapni'

//     if(str1 === str2){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })


// promise.then(()=>{
   
//         console.log('promis is resolved ')
    
// }).catch(()=>{
//     console.log('promnis is reject')
// })



// const fib = function (n){
//     let fibo =[]


//     if(n<=0){
//         return 0
//     }
//     fibo[0]= 0
//     fibo[1]= 1

//     sum = fibo[0] + fibo [1]

//     for (i=2; i<=n ; i++){
//         fibo[i]= fibo[i-1]+ fibo[i-2]

//         sum += fibo[i]

//     }

//     return sum
        
// }
// var x = parseInt(prompt("Enter a Value", "0"), 10);

// console.log(fib(x))


// var fibon = function(n) {
//     if (n === 1) {
//       return [0, 1];
//     } else {
//       var arr = fibon(n - 1);
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//       return arr;
//     }
//   };
  
//   console.log(fibon(7));



var nextPermutation = function(nums) {
    
   let last = nums.length-1;

   let i;
   let j;

//    console.log(i)
   console.log(last)

   for (i=last; i>=0 ; i--){
    if(nums[i]<nums[i+1]){
        break
    }
   }
   if (i<0){
    nums.reverse()
    // console.log(nums)
   }else{
    for(j=last; j>i ; j--){
        if(nums[j]>nums[i]){
            console.log(i)
            break

        }
    }
    [nums[j],nums[i]]= [nums[i],nums[j]]

    console.log(nums)

    let lw = i+1
    let hw = last

    while(hw>lw){
        [nums[lw],nums[hw]]= [nums[hw],nums[lw]]
        lw ++;
        hw --;
        // console.log(nums)
    }

    return nums;
    

    

   }
   

  

  
    
};

const nums = [1,1,5]

console.log(nextPermutation(nums))