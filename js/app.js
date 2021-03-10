'use straict';


let hours = ['Locations ','6:am','7:am','8:am','9:am','10:am','11:am','12:am','1:pm','2:pm','3:pm','4:pm','5:pm','6:pm','7:pm','Daily Location Total'];
let totalAvgPeerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
let form = document.getElementById('form');
let table= document.getElementById('table');
let peerAve=[];
let tok =[];
let dub =[];
let par=[];
let lim =[];
let newLoc = [];
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
  


 












 function City(name,min,max,avg){
  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.randomCustomer = 0;

}

City.prototype.getCustomerRandomly=function(){
  let cust = this.randomCustomer;
 cust= rndomCus(this.min,this.max);

   return cust; 
 };
  

City.prototype.getavg = function(){
     
  return  this.getCustomerRandomly()* this.avg  ;

};

let seattle = new City('Seattle',23,65,Math.floor(6.3));
let tokyo = new City('Tokyo',3,24,Math.floor(1.2));
let dubai = new City('Dubai',11,38,Math.floor(3.7));
let paris = new City('Paris',30,38,Math.floor(2.3));
let lima  = new City('Lima',2,16,Math.floor(4.6));


renderSeattle(seattle.name);



renderTokyo(tokyo.name);



 renderDubai(dubai.name);




 renderParis(paris.name);


 renderLima(lima.name);




function renderSeattle(cityName){

  let tr =  document.createElement('tr');
  let tr2 =document.createElement('tr');
   tr.innerText= cityName;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.appendChild(tr2);
   table.setAttribute('class','table');
   
   let listItem ;
 
   
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
     peerAve[i]= seattle.getavg();
     
   
            
      listItem.innerText = peerAve[i] + " "+'Cookies'; 
            total+=peerAve[i] ;
      totalAvgPeerHour[i]=peerAve[i]+tok[i]+dub[i]+par[i]+lim[i];
         
      tr.appendChild(listItem);
       
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);



 }
 
 

 function renderTokyo(cityName){

  let tr =  document.createElement('tr');
   tr.innerText= cityName;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     tok[i]=tokyo.getavg()
   
            
      listItem.innerText =tok[i] + " "+'Cookies'; 
            total+=tok[i] ;
      
          
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }
 function renderDubai(cityName){

  let tr =  document.createElement('tr');
   tr.innerText= cityName;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  

    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     dub[i]=dubai.getavg()
   
            
      listItem.innerText =dub[i] + " "+'Cookies'; 
            total+=dub[i] ;
      
          
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }

 function renderParis(cityName){

  let tr =  document.createElement('tr');
   tr.innerText= cityName;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
   
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     par[i]=paris.getavg()
   
            
      listItem.innerText =par[i] + " "+'Cookies'; 
            total+=par[i] ;
      
          
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }


 function renderLima(cityName){

  let tr =  document.createElement('tr');
   tr.innerText= cityName;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     lim[i]=lima.getavg()
   
            
      listItem.innerText =lim[i] + " "+'Cookies'; 
            total+=lim[i] ;
      
          
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }
 
 
function renderTotal(cityName){

  let tr =  document.createElement('tr');
  let tr2 =document.createElement('tr');
   tr.innerText= cityName;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.appendChild(tr2);
   table.setAttribute('class','table');
   
   let listItem ;
 
   
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
     
     
   
      totalAvgPeerHour[i]=peerAve[i]+tok[i]+dub[i]+par[i]+lim[i]+newLoc[i];
         console.log(peerAve[i]);
         listItem.innerText=totalAvgPeerHour[i] + " " + "Cookies";
         total+=totalAvgPeerHour[i]
      tr.appendChild(listItem);
       
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);



 }


form.addEventListener('submit',function(event){

   event.preventDefault();
   
 let loc= event.target.location.value; 
 let min= event.target.min.value; 
 let max= event.target.max.value; 
 let avg= event.target.avg.value; 
 
 
 console.log(loc+min+max+avg);
 
 let tr =  document.createElement('tr');
   tr.innerText= loc;

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
    
   let total = 0;
   for(let i=0;i<hours.length-2;i++)
   {

       
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     newLoc[i]=Math.ceil( rndomCus(min,max) * avg);
   
            
      listItem.innerText =newLoc[i] + " "+'Cookies'; 
            total+=newLoc[i] ;
      
          
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 

 renderTotal('Total');
 })
