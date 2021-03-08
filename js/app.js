'use straict';


let hours = [' ','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total'];
let totalAvgPeerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 

let table= document.getElementById('table');



function rndomCus (min,max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

function getTime(){
  let head = document.createElement('thead'); 
table.appendChild(head) ;
let th;
for(let i=0 ;i<hours.length;i++){
  th = document.createElement('th');
  th.innerText = hours[i];
  head.appendChild(th);
 th.setAttribute("class","table");
}

}


getTime();
  


 












 function City(name,min,max,avg,randomCustomer){
  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.randomCustomer = randomCustomer;


 

}

City.prototype.getCustomerRandomly=function(){
  let cust = this.randomCustomer;
 cust= rndomCus(this.min,this.max);

   return cust; 
 };
  

City.prototype.getavg = function(){
     
  return  this.getCustomerRandomly()* this.avg  ;

};

let seattle = new City('Seattle',23,65,Math.floor(6.3),0);
let tokyo = new City('Tokyo',3,24,Math.floor(1.2),0);
let dubai = new City('Dubai',11,38,Math.floor(3.7),0);
let paris = new City('Paris',30,38,Math.floor(2.3),0);
let lima  = new City('Lima',2,16,Math.floor(4.6),0);


render(seattle.name);



render(tokyo.name);



render(dubai.name);

console.log(dubai.getavg());


render(paris.name);


render(lima.name);




function render(cityName){

  let tr =  document.createElement('tr');
   tr.innerText= cityName;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
    let peerAve;
   
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
     peerAve= seattle.getavg();
   
            
      listItem.innerText = peerAve + " "+'Cookies'; 
            total+=peerAve ;
         
          
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }
 
 
