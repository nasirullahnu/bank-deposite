document.getElementById('login-btn').addEventListener('click', function(){
    // get the email value 
    const emailIs = document.getElementById('user-email')
    const userEmail = emailIs.value;

    // get the password value 
    const passwordIs = document.getElementById('user-password');
    const userPassword = passwordIs.value;

    // compare both with default value 
    if(userEmail === 'nasir' && userPassword === 'hello'){
        window.location.href = 'bank.html'
    }
    else{
        alert('এই নামে কোনো একাউন্ট নেই!! আপনার email এবং password পূনরায় চেক করুন');
    }
})