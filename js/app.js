'use straict';


let hours = ['Locations ','6:am','7:am','8:am','9:am','10:am','11:am','12:am','1:pm','2:pm','3:pm','4:pm','5:pm','6:pm','7:pm','Daily Location Total'];
let totalAvgPeerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
let form = document.getElementById('form');
let table= document.getElementById('table');

let newLoc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
  this.cookiesPerHour=[];

}

City.prototype.getCustomerRandomly=function(){
  let cust = this.randomCustomer;
 cust= rndomCus(this.min,this.max);

   return cust; 
 };
  

City.prototype.getavg = function(){
     
  return  Math.floor(this.getCustomerRandomly()* this.avg)  ;

};

let seattle = new City('Seattle',23,65,6.3);
let tokyo = new City('Tokyo',3,24,1.2);
let dubai = new City('Dubai',11,38,3.7);
let paris = new City('Paris',30,38,2.3);
let lima  = new City('Lima',2,16,4.6);

let cities = [seattle,tokyo,dubai,paris,lima];


renderSeattle();



renderTokyo();



 renderDubai();




 renderParis();


 renderLima();
 renderTotal();

form.addEventListener('submit',renderForm);


function renderSeattle(){

  let tr =  document.createElement('tr');
  let td = document.createElement('td');
   td.innerText= cities[0].name;
tr.appendChild(td);
  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       let cookiesNum = cities[0].getavg();
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     cities[0].cookiesPerHour[i]=cookiesNum;
   
            
      listItem.innerText =cookiesNum + " "+'Cookies'; 
            total+=cookiesNum ;
  
           
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }

 function renderTokyo(){

  let tr =  document.createElement('tr');
  let td = document.createElement('td');
   td.innerText= cities[1].name;
tr.appendChild(td);
  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       let cookiesNum = cities[1].getavg();
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     cities[1].cookiesPerHour[i]=cookiesNum;
   
            
      listItem.innerText =cookiesNum + " "+'Cookies'; 
            total+=cookiesNum ;
  
           
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }
 function renderDubai(){

  let tr =  document.createElement('tr');
   let td = document.createElement('td');
   td.innerText = cities[2].name;
   tr.appendChild(td);

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  

    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

    let cookiesNum = cities[2].getavg();
    listItem = document.createElement('td');
     listItem.setAttribute("class","table")
  
   cities[2].cookiesPerHour[i]=cookiesNum;
 
          
    listItem.innerText =cookiesNum + " "+'Cookies'; 
          total+=cookiesNum ;

         
 
    tr.appendChild(listItem);
   
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }

 function renderParis(){

  let tr =  document.createElement('tr');
  let td = document.createElement('td');
  td.innerText= cities[3].name;
  tr.appendChild(td);
  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
   
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {
    let cookiesNum = cities[3].getavg();
    listItem = document.createElement('td');
     listItem.setAttribute("class","table")
  
   cities[3].cookiesPerHour[i]=cookiesNum;
 
          
    listItem.innerText =cookiesNum + " "+'Cookies'; 
          total+=cookiesNum ;

         
 
    tr.appendChild(listItem);
   
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 }


 function renderLima(){
 
 
  let tr =  document.createElement('tr');
  let td = document.createElement('td');
 
   td.innerText= cities[4].name;
   tr.appendChild(td);

  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       
    let cookiesNum = cities[4].getavg();
    listItem = document.createElement('td');
     listItem.setAttribute("class","table")
  
   cities[4].cookiesPerHour[i]=cookiesNum;
 
          
    listItem.innerText =cookiesNum + " "+'Cookies'; 
          total+=cookiesNum ;

         
 
    tr.appendChild(listItem);
   
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 

 


 }
 
 
function renderTotal(){

  let tr =  document.createElement('tr');

  let totalTH = document.createElement('th');
  totalTH.innerText = 'Total';
  tr.appendChild(totalTH);

  tr.setAttribute("class","table");
    tr.setAttribute("id","tr");
  

 
   
   let listItem ;
   
   let total = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
    
   let totalOfTotals = 0;
  
   for(let i=0;i<hours.length-2;i++)
  
   {
     for(let j = 0;j<cities.length;j++){
      
      listItem = document.createElement('td');
       total[i] += cities[j].cookiesPerHour[i];
       totalOfTotals += cities[j].cookiesPerHour[i];
       listItem.innerText = total[i] + ' cookies';
    
    
     }
     tr.appendChild(listItem);
    listItem.setAttribute("class","table")
  
    } 
    
  
    
    let tot = document.createElement('th');
    tot.innerText ='Total : '+ totalOfTotals + " "+ 'Cookies';
    
  tr.appendChild(tot);

  table.appendChild(tr);

 }
 function renderForm(event){

  event.preventDefault();
 
  

 

let loc= event.target.location.value; 
let min= parseInt(event.target.min.value); 
let max= parseInt(event.target.max.value); 
let avg= parseInt(event.target.avg.value); 
 table.removeChild(table.lastElementChild);
let newCity = new City (loc,min,max,avg);
cities.push(newCity);

let tr =  document.createElement('tr');
  let td = document.createElement('td');
   td.innerText= newCity.name;
tr.appendChild(td);
  tr.setAttribute("class","table");
  tr.setAttribute("id","tr");
   table.appendChild(tr);
   table.setAttribute('class','table');
   
   let listItem ;
 
  
    
   let total = 0;
  
   for(let i=0;i<hours.length-2;i++)
   {

       let cookiesNum = newCity.getavg();
      listItem = document.createElement('td');
       listItem.setAttribute("class","table")
    
     newCity.cookiesPerHour[i]=cookiesNum;
   
            
      listItem.innerText =cookiesNum + " "+'Cookies'; 
            total+=cookiesNum ;
  
           
   
      tr.appendChild(listItem);
     
    } 
    
    let tot = document.createElement('td');
    tot.innerText ='Total : '+ total + " "+ 'Cookies';
    
  tr.appendChild(tot);
 



 
      
 


renderTotal();

}

  

 
 