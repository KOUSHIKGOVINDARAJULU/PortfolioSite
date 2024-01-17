const form = document.querySelector('form');
 function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "koushikkumar580@gmail.com",
        Password : "5CEBA99827EC9D0CE451E39C388A4BA4B7A8",
        To : 'koushikkumar580@gmail.com',
        From : 'koushikkumar580@gmail.com',
        Subject : "New Contact From Te Protoflio site",
        Body : "Name : " + document.getElementById('name_user').value +
        "<br> Email : " + document.getElementById('email_user').value +
        "<br> Message : " + document.getElementById('message_user').value
    }).then(
      message => alert("mail has sented")
    );
    
 }
//  let popup = document.getElementById('popup');

//  function openPopup(){
//     popup.classList.add(".open-popup")
//  }
//  function closePopup(){
//     popup.classList.remove(".open-popup")
//  }

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    // sendEmail();
 })
//  localStorage.clear()
let emailList = document.getElementById('email_user').value;
let nameList  = document.getElementById('name_user').value;
localStorage.setItem(nameList,emailList);
//  function setError(element, message){
//     var formGroup = element.parentElement;
//     var errorMsg = formGroup.querySelector('.error');
//     errorMsg.innerText = message;
//     formGroup.classList.add('error');
//     formGroup.classList.remove('success');
// };
// function setSuccess(element){
//     var formGroup = element.parentElement;
//     var errorMsg = formGroup.querySelector('.error');
//     errorMsg.innerText = "";
//     formGroup.classList.add('success');
//     formGroup.classList.remove('error');
// };

// $('#name_user').on('change', ()=>{
//     var name = document.getElementById("name_user");
//     var nameValue = name.value.trim();
//     var letters = /^[A-Za-z\s]*$/;
//     if(nameValue.length >= 3 && nameValue!="" && nameValue.match(letters)){
//         // isNameValid = true;
//         setSuccess(name);
//     }
//     else{
//         setError(name, "Please, Enter valid name");
//     }
// });


// $('#email_user').on('change', ()=>{
//     var email = document.getElementById("email_user");
//     var regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     var emailValue = email.value.trim();
//     if(emailValue!=""){
//         if(regx.test(emailValue)){
//             // isEmailValid = true;
//             setSuccess(email);
//         }
//         else{
//             setError(email, "Please, Enter valid email address");
//         }
//     }
//     else{
//         setError(email, "Please, Enter email address");
//     }
// });

//  $('#message_user').on('change',()=>{
//     var text_area = document.getElementById("message_user").value;
//     if(text_area === ""){
//        setError("err_text","* This Field is required");
//     } 
//     else{
//     //    isdob = true;
//        setSuccess(text_area)
//     }
//  })

 