'use strict';

let arrOfObject=[];
let tabelEl=document.getElementById('table');
let formEl=document.getElementById('form');
let dropDown=document.getElementById('tuition');
let option1=document.getElementById('tu1');
let option2=document.getElementById('tu2');
let option3=document.getElementById('tu3');

let id;
let total=0;

let pEl= document.getElementById('total');
function randomAge (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function StudentInfo (email,contact,tuition) {
  this.email=email;
  this.contact=contact;
  this.tuition=tuition;
  this.age=randomAge(18,24);
  this.name=name;
  this.id=0;
  arrOfObject.push(this);
  setData();
}

function tableHeader (){
  let trEl =document.createElement('tr');
  tabelEl.appendChild(trEl);
  let thEl= document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent='id';
  let thEl2= document.createElement('th');
  trEl.appendChild(thEl2);
  thEl2.textContent='name';
  let thEl3= document.createElement('th');
  trEl.appendChild(thEl3);
  thEl3.textContent='email';
  let thEl4= document.createElement('th');
  trEl.appendChild(thEl4);
  thEl4.textContent='mobile';
  let thEl5= document.createElement('th');
  trEl.appendChild(thEl5);
  thEl5.textContent='age';
  let thEl6= document.createElement('th');
  trEl.appendChild(thEl6);
  thEl6.textContent='tuition';


  
}


tableHeader();

let newTuition;

function submit (event ){

  event.preventDefault();
  id++;
  let newEmail=event.target.email.value;
  let newContact=event.target.contact.value;
  if (event.target.id==='tu1'){newTuition='100jd';}
  else if (event.target.id==='tu2'){newTuition='500jd';}
  else if (event.target.id==='tu3'){newTuition='1000jd';}

  total=total+newTuition;



  let newStudent=new StudentInfo (newEmail,newContact,newTuition);

  renderSTudent();
 
}

formEl.addEventListener('submit',submit);
console.log(arrOfObject);


function renderSTudent (){


  for (let i=0;i<arrOfObject.length;i++){

    let trEl=document.createElement('tr');
    tabelEl.appendChild(trEl);

    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent=`${arrOfObject[i].id}`;
    let thEl2= document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent=`${arrOfObject[i].name}`;
    let thEl3= document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent=`${arrOfObject[i].email}`;
    let thEl4= document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent=`${arrOfObject[i].contact}`;
    let thEl5= document.createElement('th');
    trEl.appendChild(thEl5);
    thEl5.textContent=`${arrOfObject[i].age}`;
    let thEl6= document.createElement('th');
    trEl.appendChild(thEl6);
    thEl6.textContent=`${arrOfObject[i].tuition}`;

  }
  pEl.textContent=`${total}`;

}


function setData (){

  let savedData= localStorage.setItem('student',JSON.stringify(arrOfObject));

}


function getData(){

  let parseData=JSON.parse(localStorage.getItem('student'));
  if (parseData){
    arrOfObject=parseData;

  }

}

getData();
