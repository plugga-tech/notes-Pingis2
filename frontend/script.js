import printDocuments from "./printDocuments.js";
import createDocument from "./createDocument.js";


let createDocumentBtn = document.getElementById('createDocumentBtn');
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


createDocumentBtn.addEventListener('click', () => {
    createDocument();
});


printDocuments();

/*
export default function createIndex() {
    fetch("http://localhost:3000/documents")
    .then(res => res.json())
    .then(data => {
        printDocuments();

        toggleLoginState();
    })
    .catch(error => {
        console.error("error", error);
    })
};
*/

/*
export default async function createIndex() {
    try {
        const response = await fetch("http://localhost:3000/documents");
        const data = await response.json();
        innerHTML = "";
        printDocuments();
        toggleLoginState();
    } catch (error) {
        console.error("Error:", error);
    }
}
*/
