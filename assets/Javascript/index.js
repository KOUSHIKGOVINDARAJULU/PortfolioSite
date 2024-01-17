// showing Menu
let menuBar = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}
menuBar("nav-toggle","nav-menu")

// ACTIVE AND REMOVE THE ACTIVE
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.classList.remove('active'))
function linkActive(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkActive))



// strangers name 
// const promtName = prompt("Enter Your Name");
// const strName = document.getElementById('stranger_name');
// if(promtName){
//     let sno = localStorage.length + 1;
//     strName.innerHTML= (promtName);
//     localStorage.setItem(sno,promtName);
// }
// else{
//     strName.innerHTML = ""
// }

// const formInput = document.getElementById("form");
// formInput.addEventListener("submit",function(event){
//     event.preventDefault()
// });

