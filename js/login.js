// 1.add event listener
// 2.get email and pass word
// 3.match email and pass with secret pass and email
// 4.if so give give access to the bank
// 5.otherwise give an alert
// 6.clear filed

//1
document.getElementById('submit-btn').addEventListener('click', function () {
    //2
    const emailFiled = document.getElementById('email-field');
    const passFiled = document.getElementById('pass-field');
    const email = emailFiled.value;
    const pass = passFiled.value;
    //3
    if (email === "zisan@jobamail.com" && pass === "zisanjoba") {
        //4
        window.location.href = 'bank-deposite.html';
        emailFiled.value = '';
    }
    //5
    else {
        alert('fuck you! i dont know you');
        emailFiled.value = '';
        passFiled.value = '';
    }


})