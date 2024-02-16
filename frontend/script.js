let loginBtn = document.getElementById('loginBtn');
let isLoggedIn = true;


function toggleLoginState() {
    if (isLoggedIn) {
        loginBtn.innerHTML = "logga ut";
        console.log("du är inloggad");
    } else {
        loginBtn.innerHTML = "logga in";
        console.log("du är utloggad");
    }
    isLoggedIn = !isLoggedIn;
    
}


loginBtn.addEventListener('click', () => {
    
    toggleLoginState();    
});


