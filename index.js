/*jshint esversion: 6 */

const openNav = document.querySelector(".hamberger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftPosition = menu.getBoundingClientRect().left;

openNav.addEventListener("click", () => {
if(leftPosition < 0 ){
  menu.classList.add("show");
}
});


closeNav.addEventListener("click", () => {
if(leftPosition < 0 ){
  menu.classList.remove("show");
}
});


const questions = document.querySelectorAll('.question')

questions.forEach(item=>{
    item.addEventListener('click', openAccordion)
})

function openAccordion(e){
    if(e.target.classList.contains('ques_btn')){
        e.target.classList.toggle('display')
    }

    if(e.target.classList.contains('display')){
        e.target.nextElementSibling.style.maxHeight = 'none';
        e.target.querySelector('span').innerHTML = '<i class="fas fa-angle-up"></i>'
    } else{
        e.target.nextElementSibling.style.maxHeight = '0';
        e.target.querySelector('span').innerHTML = '<i class="fas fa-angle-down"></i>'
    }
}

window.addEventListener('scroll',function(){
  const  header = document.querySelector('header');
  header.classList.toggle("sticky",window.scrollY > 0);
});
