function addNewWField(){
    console.log("hello");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",5);
    newNode.setAttribute("placeholder",'Enter here');
    let weOb = document.getElementById("we");

    let weAddButtonOb=document.getElementById("weAddButton");
    console.log("prabhat");
    console.log(weOb);
    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewEField(){
   let newNode= document.createElement("textarea");
   newNode.classList.add("eqField");
   newNode.classList.add("form-control");
   newNode.setAttribute("rows",5);
   newNode.setAttribute("placeholde",'Enter here');
   let eOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton")
   eOb.insertBefore(newNode,aqAddButtonOb);


}
function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
     document.getElementById("nameT2").innerHTML=nameField;
     document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
     document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
     document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
     document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
     document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

     document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    //  work experience
let wes=document.getElementsByClassName("weField");

let str='';
for(let e of wes){
 
    str=str+`<li> ${e.value} </li>`;

}
document.getElementById("weT").innerHTML=str;
// acedemic qualification
let aes=document.getElementsByClassName("eqField");

let str1='';
for(let e of aes){
   // console.log(e.value);
    str1=str1+`<li> ${e.value} </li>`;

}
document.getElementById("aqT").innerHTML=str1;
document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display="block";
}
// print cv
function printCV(){
window.print();
}
