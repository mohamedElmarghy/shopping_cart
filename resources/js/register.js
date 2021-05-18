const registerBtn = document.querySelector('#registerBtn');
registerBtn.addEventListener('click', event => {
    event.preventDefault();
    let userName = event.target.parentElement.querySelector('#userName').value;
    let userMail = event.target.parentElement.querySelector('#userMail').value;
    let userPassword = event.target.parentElement.querySelector('#userPassword').value;
    let newUser = {
        userName,
        userMail,
        userPassword
    };
    if (userName == '' || userMail == '' || userPassword == '') {
        alert('Please fill the form');
    } else {
    localStorage.setItem('users',JSON.stringify(newUser));
    window.location = 'signIn.html';
    }
})
