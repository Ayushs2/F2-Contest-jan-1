/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
 const aa = arr.map(item=>{
  if(item.profession=="developer"){
    console.log(item);
  }
 })

}

function PrintDeveloperbyForEach() {
  arr.forEach((item)=>{
    if(item.profession=="developer"){
      console.log(item);
    }
  })
}

function addData() {
  let employee = {id:4,name:"susan",age:"20",profession:"intern"}; 
  arr.push(employee);
 
  console.log(arr);
}

function removeAdmin() {
  arr.forEach((item)=>{
    if(item.profession=="admin"){
      arr.pop(item);
    }
    
  })
  console.log(arr);
}

function concatenateArray() {
  
 let newarr  =[{id:6,name:"PW",age:"23",profession:"tester"},{id:7, name:"Newton",age:"20", profession:"Scientist"},{id:8, name:"Carry", age:"22",profession:"tester"}]
 Array.prototype.push.apply(arr,newarr);
 console.log(arr);
}
//PrintDeveloperbyForEach();
//addData();
//console.log(arr);
//removeAdmin();
//console.log(arr);
//concatenateArray();
//console.log(arr);