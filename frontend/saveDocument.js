import createDocument from "./createDocument.js";
import printDocuments from "./printDocuments.js";

export default function saveDocument() {

    let savedTitle = document.querySelector('.docTitle').value;
    let savedContent = document.querySelector('.textArea').value;

    /*
    localStorage.setItem('savedInputValue', titleValue);
    localStorage.setItem('savedDocumentTitle', contentValue);
    console.log(titleValue, contentValue);
    */
    fetch("http://localhost:3000/savedDocuments", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ docTitle: savedTitle, textArea: savedContent })
        
    })
    .then(res => res.json()) 
    .then(data => {
        console.log("sparad", data);
        documentSaved();
        
    })
    .catch(error => {
        console.error("error under fetch", error);
    }) 
};



function documentSaved() {

    
    let savedTitle = document.querySelector('.docTitle').value;
    let savedContent = document.querySelector('.textArea').value;
    
    document.body.innerHTML = "";

    let savedDocMessage = document.createElement('h1');
    savedDocMessage.textContent = "Ditt dokument är nu sparad!";
    document.body.appendChild(savedDocMessage);

    let makeNewDocButton = document.createElement('button');
    makeNewDocButton.textContent = "Skapa ett nytt dokument";
    makeNewDocButton.classList.add("newDocButton");
    document.body.appendChild(makeNewDocButton);

    let backToStartButton = document.createElement('button');
    backToStartButton.textContent = "Gå tillbaka till alla dokument";
    document.body.appendChild(backToStartButton);

    
    makeNewDocButton.addEventListener('click', () => {
        createDocument();
    });

    backToStartButton.addEventListener('click', () => {
        window.location.href = 'index.html';
        
    });

}

