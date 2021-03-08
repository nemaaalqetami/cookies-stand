'use straict';


let hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let main = document.getElementById('demo');








let seattle ={
  name :'Seattle',
  min : 23,
  max : 65,
  avg : Math.floor(6.3),
  randomCustomer :0,
 

 getCustomerRandomly:function(){
  let cust = this.randomCustomer;
 cust= rndomCus(this.min,this.max);

   return cust; 
 },
  
 getavg : function(){
  
   
     return this.getCustomerRandomly() * this.avg; 
 }

};

 

 let tokyo ={
  name :'Tokoy',
  min : 3,
  max : 24,
  avg : Math.floor(1.2),
  randomCustomer :0,
 
 
 getCustomerRandomly:function(){
  let cust = tokyo.randomCustomer;
 cust= rndomCus(tokyo.min,tokyo.max);

   return cust; 
 },
  
 getavg : function(){
  
   
  return this.getCustomerRandomly() * this.avg; 
}
 };


 let dubai ={
  name :'Dubai',
  min : 11,
  max : 38,
  avg : Math.floor(3.7),
  randomCustomer :0,

 getCustomerRandomly:function(){
  let cust = dubai.randomCustomer;
 cust= rndomCus(dubai.min,dubai.max);

   return cust; 
 },
  
 getavg : function(){
  
   
  return this.getCustomerRandomly() * this.avg; 
}

 };

 let paris ={
  name :'Paris',
  min : 20,
  max : 38,
  avg : Math.floor(2.3),
  randomCustomer :0,
 

 getCustomerRandomly:function(){
  let cust = paris.randomCustomer;
 cust= rndomCus(paris.min,paris.max);

   return cust; 
 },
  
 getavg : function(){
  
   
  return this.getCustomerRandomly() * this.avg; 
}
 };


 let lima ={
   name :'Lima',
  min : 2,
  max : 16,
  avg : Math.floor(4.6),
  randomCustomer :0,
 
 
 getCustomerRandomly:function(){
  let cust = lima.randomCustomer;
 cust= rndomCus(lima.min,lima.max);

   return cust; 
 },
  
 getavg : function(){
  
   
  return this.getCustomerRandomly() * this.avg; 
}
 };



function rndomCus (min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}





function gitOrder(cityName){
 let h3 =  document.createElement('h1');
  h3.innerText= cityName;
 
  main.appendChild(h3);
  let unorderList = document.createElement('ul');
  main.appendChild(unorderList);
  
  
  let listItem ;

   let peerAve;
  let total = 0;
 
  for(let i=0;i<hours.length;i++)
  {
     
      
      
     listItem = document.createElement('li');
    
    peerAve = seattle.getavg();
           
     listItem.innerText = hours[i] +" :  " + peerAve + " "+'Cookies'; 
              total+=peerAve ;
      
   console.log(total);
     unorderList.appendChild(listItem);
    
    
 
  
    
   } 
  
   let tot = document.createElement('li');
   tot.innerText ='Total : '+ total + " "+ 'Cookies';
   
  unorderList.appendChild(tot);

  
}



gitOrder(seattle.name);
  gitOrder(tokyo.name);
 gitOrder(dubai.name);
  gitOrder(paris.name);
   gitOrder(lima.name);

  

  

 