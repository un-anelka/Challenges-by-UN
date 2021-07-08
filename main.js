/*//Single element selectors
const form=document.getElementById("my-form");
console.log(form)

console.log(document.querySelector('h1'));


//Multiple elements selectors

console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("items"));
console.log(document.getElementsByTagName("li"));*/

/*const item=document.querySelectorAll('.item');
items.forEach(function(item){
    console.log(item);
})
*/
//Methods on DOM
const ul = document.querySelector('.items');  

//ul.lastElementChild.remove();
//ul.remove();

/*ul.lastElementChild.TextContent ='Hello';
ul.firstElementChild.remove();*/
/*
ul.children[2].innerText="Brad";
ul.children[1].innerHTML="<h1>Brad<h1>";

const btn=document.querySelector('.btn');
btn.style.background="lightblue";
btn.style.border='6px red dotted';
btn.style.font.size="34px";*/

//event list

 /*btn.addEventListener('click',(e)=>{
    e.preventDefault(); 
    document.querySelector('#my-form').style.background="green";
    console.log(e.target.className);
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello</h1>"
 });

 btn.addEventListener('mouseover',(e)=>{
    e.preventDefault(); 
    document.querySelector('#my-form').style.background="green";
    console.log(e.target.className);
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello</h1>"
 });

 btn.addEventListener('mouseout',(e)=>{
    e.preventDefault(); 
    document.querySelector('#my-form').style.background="green";
    console.log(e.target.className);
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello</h1>"
 });
 */

 const myForm=document.querySelector('#my-form');
 const nameInput=document.querySelector('#name');
 const emailInput=document.querySelector('#email');
 const msg=document.querySelector('.msg');
 const userList=document.querySelector('#users');


