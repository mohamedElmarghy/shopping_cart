/******
 * 
 *  Log in 
 */
 const loginBtn = document.querySelector('#signInBtn');

 loginBtn.addEventListener('click', event => {
     event.preventDefault();
     let user;
     let newUser = JSON.parse(localStorage.getItem('users'));
     let userName = event.target.parentElement.querySelector('#userName').value;
     let userPassword = event.target.parentElement.querySelector('#userPassword').value;
     if (userName == '' || userPassword == ''){
         alert('Please Fill The Form');
     } else {
         if (newUser.userName !== userName || newUser.userPassword !== userPassword) {
             alert('Wrong Password Or Name');
         } else {
            user = {
                userName,
                userPassword
            };
              
            localStorage.setItem('user',JSON.stringify(user));
            window.location = 'index.html'
         }
     }
     
 })