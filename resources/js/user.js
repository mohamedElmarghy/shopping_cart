/*
*
 check if log in
 *
 */
 let user = JSON.parse(localStorage.getItem('user'));
 let navLinks = document.querySelector('.links');
 let signOutSec = document.querySelector('.signOut');
 let signOutBtn = document.querySelector('#logOut');
 signOutBtn.addEventListener('click', () => {
     localStorage.clear();
 })
 if (user) {
    navLinks.style.display = 'none';
    signOutSec.style.display = 'flex'
 } else {
     navLinks.style.display = 'flex';
     signOutSec.style.display = 'none';
 }
 const shoppingIcon = document.querySelector('#shoppingIcon span');
 shoppingIcon.style.display = 'none';
