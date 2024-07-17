
const myform = document.querySelector('.form1');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');


 myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || dateInput.value ===''){
        msg.classList.add('error');

        setTimeout(() => msg.remove(), 3000);
    } else{

    }
}  

const form1 =document.getElementById('form1');
const form2 =document.getElementById('form2');

form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    form2.style.display='block';
    form1.style.display ='none';

    if(nameInput.value === '' || dateInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else{

    }
}); 

form2.addEventListener('submit', (e)=>{
    e.preventDefault();
    const firstname= document.getElementById('firstname').value;
    const lastname= document.getElementById('lastname').value;
    const email= document.getElementById('email').value;
    const phone= document.getElementById('phone').value;
    const amount= document.getElementById('amount').value;

    if (!firstname || !lastname || !email || !phone || !amount){
        alert('please fill in all fields');
        return;
    }
}); 