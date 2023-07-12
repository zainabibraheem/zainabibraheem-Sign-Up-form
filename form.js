let form = document.getElementById('demo');
form.onsubmit = function () {
 
  if(form.fullname.value == ""){
    alert('enter your name')
    return false;
  }

  else if (form.email.value == "") {
    alert('email is missing')
    return false;
  }

  else if (!form.password.value) {
    alert('password is missing')
    return false;

  }

  else if (form.password.value.length < 8){
    alert('password too short')
    return false;
  }


  else if (form.password.value != form.confirmation.value) {
    alert('password not matched')
    return false;
  } 

 
  else if (!form.agreement.checked){
    alert('box unchecked')
    return false;
  }

  else {
    let name = document.getElementById('fullname').value

    alert(`Welcome ${name} !`)
    return true;
  }
};




